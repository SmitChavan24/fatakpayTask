import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/Foundation';
const SubHeader = () => {
  return (
    <View style={{height: responsiveHeight(30)}}>
    <View style={{flex:1,justifyContent:'space-between'}}>
      <View style={{marginLeft:responsiveWidth(5),marginTop:responsiveHeight(3)}}>
        <Text style={{textAlign: 'left',color:'#44226E',fontSize:responsiveFontSize(2.4),fontWeight:'500',marginBottom:responsiveHeight(0.5)}}>Select Loan amount</Text>
        <Text style={{textAlign: 'left',color:'grey',fontSize:responsiveFontSize(2),fontWeight:'400'}}>
          Move the slider to select your loan amount
        </Text>
      </View>
      <View style={{marginLeft:responsiveWidth(5),width:responsiveWidth(80),flexDirection:'row'}}>
      <Icon name='info' size={responsiveWidth(5)} color='black'></Icon>
        <Text style={{textAlign: 'left',color:'black',fontWeight:'600',fontSize:responsiveFontSize(1.7),marginLeft:responsiveWidth(2)}}>
          An annualised interest rate of 29.95%p.a. will be applicable.
        </Text>
      </View>
    </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({});
