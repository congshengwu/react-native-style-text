import _ from 'lodash';
import React from 'react';
import { Text, TextProps } from 'react-native';

import Stack from './Stack';

interface MatchTextStyleItem {
  match: string | RegExp;
  textProps: TextProps;
}

interface StyleTextProps extends TextProps {
  matchTextStyle?: Array<MatchTextStyleItem>;
}

const StyleText = (props: StyleTextProps) => {
  const { children, matchTextStyle } = props;

  const handleStyle = () => {
    let childrenClone = children;

    matchTextStyle?.forEach((item) => {
      childrenClone = renderContent(
        _.cloneDeep(childrenClone),
        item.match,
        item.textProps
      );
    });
    return childrenClone;
  };

  const renderContent = (
    content: React.ReactNode,
    match: string | RegExp,
    textProps: TextProps
  ) => {
    if (typeof content === 'string' && content) {
      content = matchAndSetProps(content, match, textProps);
      return content;
    }

    const stack = new Stack<React.ReactNode>();
    stack.push(content);

    while (!stack.isEmpty()) {
      const element: React.ReactNode = stack.pop();

      if (!element) {
        continue;
      }

      if (Array.isArray(element)) {
        element.forEach((item, index) => {
          if (typeof item === 'string' && item) {
            element[index] = matchAndSetProps(item, match, textProps);
          } else {
            stack.push(item);
          }
        });
        continue;
      }

      if (typeof element === 'object') {
        if (!('props' in element && 'children' in element.props)) {
          continue;
        }
        let elementContent = element.props.children;
        if (typeof elementContent === 'string' && elementContent) {
          element.props.children = matchAndSetProps(
            elementContent,
            match,
            textProps
          );
          continue;
        }
        if (Array.isArray(element)) {
          element.forEach((item, index) => {
            if (typeof item === 'string' && item) {
              element[index] = matchAndSetProps(item, match, textProps);
            } else {
              stack.push(item);
            }
          });
          continue;
        }
        stack.push(elementContent);
      }
    }
    return content;
  };

  const matchAndSetProps = (
    content: string,
    match: string | RegExp,
    textProps: TextProps
  ): React.ReactNode | Array<React.ReactNode> => {
    const UUID = 'bc5c7ce7-1cb6-49fe-b960-cbab2c3aecbf';
    const reg = new RegExp(match);
    const keyTextArr: Array<string> | null = content.match(reg);
    content = content.replace(reg, UUID);
    const restTextArr: Array<string> | null = content.split(UUID);
    const mainTextArr: Array<React.ReactNode> = [];
    restTextArr.forEach((item: string, index: number) => {
      if (item) {
        mainTextArr.push(item);
      }
      if (keyTextArr && keyTextArr[index]) {
        mainTextArr.push(
          <Text key={`${item}${index}`} {...textProps}>
            {keyTextArr[index]}
          </Text>
        );
      }
    });
    if (mainTextArr.length === 1) {
      return mainTextArr[0];
    }
    return mainTextArr;
  };

  return <Text {...props}>{handleStyle()}</Text>;
};

export default StyleText;
