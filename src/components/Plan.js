import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Iconr from 'react-native-vector-icons/dist/FontAwesome5';

const Plan = () => {
  return (
    <View style={{height: responsiveHeight(45), backgroundColor: 'white'}}>
      <View>
        <View
          style={{
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(3),
          }}>
          <Text
            style={{
              textAlign: 'left',
              color: '#44226E',
              fontSize: responsiveFontSize(2.4),
              fontWeight: '500',
              marginBottom: responsiveHeight(0.5),
            }}>
            Select Tenure
          </Text>
          <Text
            style={{
              textAlign: 'left',
              color: 'grey',
              fontSize: responsiveFontSize(2),
              fontWeight: '400',
            }}>
            Choose your preferred terms in months
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: responsiveHeight(30),
            width: responsiveWidth(90),
            marginTop: responsiveHeight(1),
            alignSelf: 'center',
            borderRadius: responsiveWidth(2),
            borderColor: 'grey',
            borderWidth: responsiveWidth(0.2),
          }}>
          <View
            style={{
              flex: 1,
              margin: responsiveWidth(0.5),
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginBottom: responsiveHeight(7),
            }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: responsiveFontSize(2),
                color: 'black',
              }}>
              Months
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: responsiveFontSize(2),
                color: 'black',
              }}>
              Emi
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: responsiveFontSize(2),
                color: 'black',
              }}>
              Total
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              margin: responsiveWidth(1),
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: '#F1C27C',
              borderColor: 'orange',
              borderWidth: responsiveWidth(0.3),
              borderRadius: responsiveWidth(2),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textbox}>3</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text style={styles.textbox}>6,000</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text style={styles.textbox}>20,000</Text>
            </View>
            <Icon
              name="checkmark-circle-sharp"
              size={responsiveWidth(5)}
              color="#4FBC0C"></Icon>
          </View>
          <View
            style={{
              flex: 1,
              margin: responsiveWidth(0.5),
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textbox}>6</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text style={styles.textbox}>3,500</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text style={styles.textbox}>21,000</Text>
            </View>
            <Icon
              name="checkmark-circle-sharp"
              size={responsiveWidth(5)}
              color="#4FBC0C"></Icon>
          </View>
          <View
            style={{
              flex: 1,
              margin: responsiveWidth(0.5),
              justifyContent: 'space-evenly',
              alignItems: 'center', 
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textbox}>9</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text style={styles.textbox}>2,200</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text style={styles.textbox}>20,500</Text>
            </View>
            <Icon
              name="checkmark-circle-sharp"
              size={responsiveWidth(5)}
              color="#4FBC0C"></Icon>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: responsiveHeight(2),
          }}>
          <Text
            style={{
              textAlign: 'left',
              color: 'black',
              fontWeight: '600',
              fontSize: responsiveFontSize(2),
            }}>
            Offer Expires in
          </Text>
          <Text
            style={{
              textAlign: 'left',
              color: 'black',
              fontWeight: '600',
              fontSize: responsiveFontSize(2),
              marginRight: responsiveWidth(5),
              color: '#44226E',
            }}>
            {' '}
            00.24 secs
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({
  textbox: {
    marginLeft: responsiveWidth(1),
    textAlign: 'center',
    width: responsiveWidth(11),
    color: 'black',
    fontSize:responsiveFontSize(1.6)
  },
});
