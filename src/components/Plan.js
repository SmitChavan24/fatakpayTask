import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Iconr from 'react-native-vector-icons/dist/FontAwesome5';

const Plan = () => {
  const [plan, setplan] = useState('3Month');
  const [timer, settimer] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      settimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
        }
        return prevTimer > 0 ? prevTimer - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  const onSelectPlan = selectedplan => {
    if (selectedplan == '3Month') {
      settimer(90);
    } else if (selectedplan == '6Month') {
      settimer(120);
    } else {
      settimer(40);
    }

    setplan(selectedplan);
  };
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
          <TouchableOpacity
            style={{
              flex: 1,
              margin: responsiveWidth(1),
              justifyContent: 'space-evenly',
              alignItems: 'center',
              ...(plan == '3Month'
                ? {
                    backgroundColor: '#FFE097',
                    borderColor: '#FFC637',
                    borderWidth: responsiveWidth(0.3),
                    borderRadius: responsiveWidth(2),
                  }
                : {}),
            }}
            onPress={() => onSelectPlan('3Month')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.textbox,
                  plan == '3Month' ? {fontWeight: 'bold'} : {},
                ]}>
                3
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text
                style={[
                  styles.textbox,
                  plan == '3Month' ? {fontWeight: 'bold'} : {},
                ]}>
                6,000
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text
                style={[
                  styles.textbox,
                  plan == '3Month' ? {fontWeight: 'bold'} : {},
                ]}>
                20,000
              </Text>
            </View>
            <Icon
              name="checkmark-circle-sharp"
              size={responsiveWidth(5)}
              color={plan == '3Month' ? '#4FBC0C' : 'grey'}></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              margin: responsiveWidth(0.5),
              justifyContent: 'space-evenly',
              alignItems: 'center',
              ...(plan == '6Month'
                ? {
                    backgroundColor: '#FFE097',
                    borderColor: '#FFC637',
                    borderWidth: responsiveWidth(0.3),
                    borderRadius: responsiveWidth(2),
                  }
                : {}),
            }}
            onPress={() => onSelectPlan('6Month')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.textbox,
                  plan == '6Month' ? {fontWeight: 'bold'} : {},
                ]}>
                6
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text
                style={[
                  styles.textbox,
                  plan == '6Month' ? {fontWeight: 'bold'} : {},
                ]}>
                3,500
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text
                style={[
                  styles.textbox,
                  plan == '6Month' ? {fontWeight: 'bold'} : {},
                ]}>
                21,000
              </Text>
            </View>
            <Icon
              name="checkmark-circle-sharp"
              size={responsiveWidth(5)}
              color={plan == '6Month' ? '#4FBC0C' : 'grey'}></Icon>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              margin: responsiveWidth(0.5),
              justifyContent: 'space-evenly',
              alignItems: 'center',
              ...(plan == '9Month'
                ? {
                    backgroundColor: '#FFE097',
                    borderColor: '#FFC637',
                    borderWidth: responsiveWidth(0.3),
                    borderRadius: responsiveWidth(2),
                  }
                : {}),
            }}
            onPress={() => onSelectPlan('9Month')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.textbox,
                  plan == '9Month' ? {fontWeight: 'bold'} : {},
                ]}>
                9
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text
                style={[
                  styles.textbox,
                  plan == '9Month' ? {fontWeight: 'bold'} : {},
                ]}>
                2,200
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Iconr name="rupee-sign" size={10} color="black"></Iconr>
              <Text
                style={[
                  styles.textbox,
                  plan == '9Month' ? {fontWeight: 'bold'} : {},
                ]}>
                20,500
              </Text>
            </View>
            <Icon
              name="checkmark-circle-sharp"
              size={responsiveWidth(5)}
              color={plan == '9Month' ? '#4FBC0C' : 'grey'}></Icon>
          </TouchableOpacity>
        </View>

        {timer != '0' ? (
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
              {formatTime(timer)} secs
            </Text>
          </View>
        ) : null}
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
    fontSize: responsiveFontSize(1.6),
    fontWeight:'400'
  },
});
