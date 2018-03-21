/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet,
	LayoutAnimation,
	Image,
	Animated,
	ScrollView,
	Dimensions
} from 'react-native';

import PropTypes from 'prop-types';

/*eslint-enable no-unused-vars*/

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

class HorizontalWrapper extends Component {
    static propTypes = {
        offset: PropTypes.number
    }
	constructor(props) {
		super(props);
		this.state = {
			anim: new Animated.Value(0)
		};
	}


	componentDidMount() {
		const { offset=0 } = this.props;
		this.horizontalView.scrollTo({ x: offset * SCREEN_WIDTH })
		this.state.anim.setValue(offset * SCREEN_WIDTH);
	}

	render() {
		const xAnim = this.state.anim
        const childrenElement = React.Children.map(this.props.children, 
                                    (child, index) => React.cloneElement(
                                    child,
                                    {xAnim, index}
                                ))

		return (
			<View style={styles.container}>

                <Animated.ScrollView
                    ref={(ref) => this.horizontalView = ref && ref._component}
                    scrollEventThrottle={1}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: xAnim } } }],
                        { useNativeDriver: true })}
                    pagingEnabled={true}
                    removeClippedSubviews={false}
                    horizontal={true}>
                        {childrenElement}
                </Animated.ScrollView>
			</View>

		);
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1
	}
});



export default HorizontalWrapper;
