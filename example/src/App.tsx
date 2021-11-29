import React, { useEffect } from 'react';
import { ToastAndroid, View } from 'react-native';
import StyleText from 'react-native-style-text';

const App = () => {
  useEffect(() => {}, []);

  const dividerLine = () => {
    return <View style={{ height: 1, backgroundColor: '#ccc', margin: 15 }} />;
  };

  const renderExample1 = () => {
    return (
      <View style={{ margin: 15 }}>
        <StyleText
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 15,
          }}
        >
          Example1:
        </StyleText>
        <StyleText
          style={{ color: 'black', fontSize: 16 }}
          matchText={[
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
          ]}
        >
          Please accept the Privacy Policy and Terms of Use.
        </StyleText>
      </View>
    );
  };

  const renderExample2 = () => {
    return (
      <View style={{ margin: 15 }}>
        <StyleText
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 15,
          }}
        >
          Example2:
        </StyleText>
        <StyleText
          style={{ fontSize: 16, color: 'gray' }}
          matchText={[
            {
              match: /Tesla/gi,
              textProps: {
                style: { color: 'red', fontSize: 18 },
              },
            },
            {
              match: /Elon Musk/gi,
              textProps: {
                style: { color: 'black', fontSize: 18 },
              },
            },
          ]}
        >
          Tesla chief executive Elon Musk has sold around $5bn of shares in the
          electric carmaker. It comes days after he asked his 63 million Twitter
          followers whether he should sell 10% of his stake in Tesla. The
          company's shares fell by around 16% in the two days after the poll
          came came out in favour of him selling shares, before regaining some
          ground Wednesday. Tesla is the world's most valuable carmaker, with a
          market valuation of more than $1tn. Mr Musk's trust sold almost 3.6
          million shares in Tesla, worth around $4bn.
        </StyleText>
      </View>
    );
  };

  const renderExample3 = () => {
    return (
      <View style={{ margin: 13 }}>
        <StyleText
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 15,
          }}
        >
          Example3:
        </StyleText>
        <StyleText
          style={{ fontSize: 16, color: 'gray' }}
          matchText={{
            match: /\d+.?\d*?/gi,
            textProps: {
              style: { color: '#FF1493' },
            },
          }}
        >
          The ad in the Sunday paper clearly says it's only $2.99 for a baker's
          dozen. But the store clerk insisted on giving me only 12 doughnuts. So
          I finally had to call the manager. I was right a baker's dozen is 13.
        </StyleText>
      </View>
    );
  };

  return (
    <View style={{ width: '100%', height: '100%' }}>
      {renderExample1()}
      {dividerLine()}
      {renderExample2()}
      {dividerLine()}
      {renderExample3()}
    </View>
  );
};

export default App;
