import React, { useEffect } from 'react';
import { ToastAndroid, View } from 'react-native';
import StyleText from 'react-native-style-text';

const App = () => {
  useEffect(() => {}, []);

  const dividerLine = () => {
    return <View style={{ height: 1, backgroundColor: '#ccc', margin: 20 }} />;
  };

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <StyleText style={{ color: 'black', fontWeight: 'bold', margin: 15 }}>
        Example:
      </StyleText>
      <StyleText
        style={{ color: 'black' }}
        matchTextStyle={[
          {
            match: 'Privacy Policy',
            textProps: {
              style: { color: 'blue', textDecorationLine: 'underline' },
              onPress: () => {
                ToastAndroid.show(
                  'Jump to "Privacy Policy Page"',
                  ToastAndroid.SHORT
                );
              },
            },
          },
          {
            match: 'Terms of Use',
            textProps: {
              style: { color: 'blue', textDecorationLine: 'underline' },
              onPress: () => {
                ToastAndroid.show(
                  'Jump to "Terms of Use Page"',
                  ToastAndroid.SHORT
                );
              },
            },
          },
          {
            match: 'accept',
            textProps: {
              style: { fontWeight: 'bold' },
            },
          },
        ]}
      >
        Please accept the Privacy Policy and Terms of Use.
      </StyleText>
      {dividerLine()}
      <StyleText
        matchTextStyle={[
          {
            match: /\d+\.?\d*/g,
            textProps: {
              style: { color: 'red', textDecorationLine: 'underline' },
              onPress: () => {
                ToastAndroid.show('Pure numbers', ToastAndroid.SHORT);
              },
            },
          },
        ]}
      >
        Tesla chief executive Elon Musk has sold around $5bn of shares in the
        electric carmaker. It comes days after he asked his 63 million Twitter
        followers whether he should sell 10% of his stake in Tesla. The
        company's shares fell by around 16% in the two days after the poll came
        out in favour of him selling shares, before regaining some ground on
        Wednesday. Tesla is the world's most valuable carmaker, with a market
        valuation of more than $1tn. Mr Musk's trust sold almost 3.6 million
        shares in Tesla, worth around $4bn.
      </StyleText>
    </View>
  );
};

export default App;
