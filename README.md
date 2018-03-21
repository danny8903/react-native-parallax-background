# react-native-parallax-background

## Installation

```
npm install --save react-native-parallax-background
```

## Demo

![Demo](./demo.gif)

## `ParallaxBackground` Properties
#
| Prop | Description |
|---|---|
|**`uri`**|string of image url |
|**`maxHeight`**|height of the image background. |

```js
import {ParallaxBackground} from 'react-native-parallax-background';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ParallaxBackground
          maxHeight={300}
          uri={'http://your_image_url.png'}
          >
          <View>
            <Text> content </Text>  
          </View>  
        </ParallaxBackground>
      </View>
    );
  }
}
```

## `HorizontalWrapper` Properties
*Note: `ParallaxBackground` elements must be direct descendants of `HorizontalWrapper`*

| Prop | Description | Defaul|
|---|---|---|
|**`offset`**|index of the children ParallaxBackground component to be showed.|0|

```js
import {HorizontalWrapper, ParallaxBackground} from 'react-native-parallax-background';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HorizontalWrapper
        offset={1}>
          <ParallaxBackground
            maxHeight={300}
            uri={'http://your_image_url.jpg'}>
            <View><Text> Content 1</Text> </View>  
          </ParallaxBackground>
          <ParallaxBackground
            maxHeight={300}
            uri={'http://your_image_url.jpg'}>
            <View><Text> Content 2</Text> </View>  
          </ParallaxBackground>
          <ParallaxBackground
            maxHeight={300}
            uri={'http://your_image_url.jpg'}>
            <View><Text> Content 3</Text> </View>  
          </ParallaxBackground>
        </HorizontalWrapper>
      </View>
    );
  }
}
```

## References and Credits
- [f8app](https://github.com/fbsamples/f8app) from Facebook Samples
- [react-native-parallax-view](https://github.com/lelandrichardson/react-native-parallax-view) by Leland Richardson

## License

[MIT License](http://opensource.org/licenses/mit-license.html).