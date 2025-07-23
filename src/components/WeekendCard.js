import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { Grid } from '../assets/images';
import { Label } from './Label';
import Heading from './Heading';
import { Fonts } from '../assets/constants/Fonts';
import Swiper from 'react-native-swiper';
import { WeekendCardsData } from '../assets/constants/Dummy';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const WeekendCard = () => {
  return (
    <Swiper
      style={{ height: windowHeight * 0.24 }}
      autoplay
      showsPagination={false}
    >
      {WeekendCardsData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <ImageBackground
            source={require('../assets/images/weekendBg.png')}
            style={styles.container}
            imageStyle={styles.imageStyle}
          >
            <View style={{ padding: 20 }}>
              <Grid />
              <View style={styles.textContainer}>
                <Label label={item.WeekendText} />
                <Heading
                  heading={item.offerText}
                  style={{ fontSize: 22, fontFamily: Fonts.SANS_EXTRA_BOLD }}
                />
                <Label label={item.menuText} />
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: windowWidth,
    height: windowHeight * 0.24,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
});
