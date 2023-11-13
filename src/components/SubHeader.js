import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Foundation';
const SubHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.upperview}>
          <Text style={styles.textContainer}>Select Loan amount</Text>
          <Text style={styles.textLight}>
            Move the slider to select your loan amount
          </Text>
        </View>
        <View style={styles.footerview}>
          <Icon name="info" size={responsiveWidth(5)} color="black"></Icon>
          <Text style={styles.textbold}>
            An annualised interest rate of 29.95%p.a. will be applicable.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  mainContainer: {
    height: responsiveHeight(30),
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    textAlign: 'left',
    color: '#44226E',
    fontSize: responsiveFontSize(2.4),
    fontWeight: '500',
    marginBottom: responsiveHeight(0.5),
  },
  textLight: {
    textAlign: 'left',
    color: 'grey',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  textbold: {
    textAlign: 'left',
    color: 'grey',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  upperview: {
    textAlign: 'left',
    color: 'grey',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  footerview: {
    textAlign: 'left',
    color: 'grey',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
});
