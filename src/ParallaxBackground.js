/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import {
  View,
	StyleSheet,
	ScrollView,
	Text,
	Dimensions,
  Animated
} from 'react-native';

import PropTypes from 'prop-types';

import Background from './Background';

/*eslint-enable no-unused-vars*/

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH}  = Dimensions.get('window');

class ParallaxBackground extends Component {
  static propTypes = {
      uri: PropTypes.string,
      maxHeight: PropTypes.number,
      xAnim: PropTypes.object,
      index: PropTypes.number
  }

	constructor(props) {
		super(props);
    let self = this;
    this.state = {
      anim: new Animated.Value(0),
      rendered: props.xAnim ? false : true
    };
    this._listener = props.xAnim && props.xAnim.addListener(({value}) => {
      if(value >= (props.index - 1) * SCREEN_WIDTH
          && value <= (props.index + 1) * SCREEN_WIDTH){

        self.setState({rendered: true})
      }
    })
	}

  componentDidUpdate(){
    const {rendered} = this.state;
    if(rendered && this._listener){
      this.props.xAnim.removeListener(this._listener);
    }
  }

	render() {
		const {xAnim, index, uri, maxHeight=300} = this.props;
    const yAnim = this.state.anim;
    const rendered = this.state.rendered;
    if(!rendered){
      return <View style={[styles.container]}></View>
    }

    return (
      <View style={[styles.container]}>
        <Background
          uri = {uri}
          xAnim = {xAnim}
          index = {index}
          yAnim={yAnim}
          maxHeight={maxHeight}
        />

        <Animated.ScrollView
          scrollEventThrottle={1}
          automaticallyAdjustContentInsets={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: yAnim } } } ],
                    { useNativeDriver: true })}
          contentContainerStyle={[styles.scrollViewWrapper, {paddingTop: maxHeight}]}>

            {this.props.children}

        </Animated.ScrollView>
      </View>
    )

	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor:'black',
    backgroundColor: 'white'
	},
  scrollViewWrapper: {
    paddingBottom: 20,
    marginLeft:10,
    marginRight:10
  }
});


export default ParallaxBackground;
