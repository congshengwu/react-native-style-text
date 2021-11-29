# react-native-style-text

A wrapper component of RN Text, you can use this component just like RN Text component.

You can use sting or regular expression to match text content, change its style and props.

## Installation

`yarn add react-native-style-text`

or

`npm i react-native-style-text`

## Demo

<div>
  <img src="https://raw.githubusercontent.com/congshengwu/react-native-style-text/master/screenshots/demo1.jpg" alt="ViewPager" width="300">
</div>

## Usage

#### Example 1:

```tsx
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
```

#### Example 2:

```tsx
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
```

#### Example 3:

```tsx
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
```

## Props

|       Prop        |  Type          |   Default   | Require |                         Description                                           |
| ----------------- | ------         | ----------- | ------- | ----------------------------------------------------------                    |
|       TextProps   |TextProps       |    null     |    N    |   Props of RN Text component, like "style", "numberOfLines", eg. https://reactnative.dev/docs/text#props         |
|  matchText        | object / Array |    null     |    N    |   Match the content you want and set the text props for it.                   |

#### Example of matchText:

```javascript
{
    match: /Github/gi,
    style: {
        fontWeight: 'bold'
    }
}
```

#### or

```javascript
[
    {
        match: 'Privacy Policy',
        style: { color: 'blue' }
    },
    {
        match: /Github/gi,
        style: { 
            fontWeight: 'bold',
            onPress: () => {}
        }
    }
]
```

## How it works

If I want to make the below keyword "react" to be red.

```tsx
<Style>react native style text from <Text>Github</Text></Style>
```

to

```tsx
["react native style text from ", <Text>Github</Text>];
```

to

```tsx
[<Text style={{ color: 'red' }}>react</Text>, " native style text from ", <Text>Github</Text>]
```

at last, use the RN Text component to render it.

```tsx
<Text>[balabala]</Text>
```

## License

MIT
