import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Header = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 3, y: 0}}
      colors={['#44226E', '#868686']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={styles.textheader}>Approved Loan</Text>
        <View style={styles.numContainer}>
          <Icon name="rupee-sign" size={45} color="white"></Icon>
          <Text style={styles.textNum}>50,000</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  linearGradient: {
    height: responsiveHeight(20),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  numContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: responsiveWidth(5),
  },
  textheader: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  textNum: {
    color: 'white',
    fontSize: responsiveFontSize(7),
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginLeft: responsiveWidth(2),
    marginBottom: responsiveHeight(0.5),
    textAlign: 'center',
  },
});
