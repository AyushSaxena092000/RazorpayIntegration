import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';

const App = () => {
  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = RAZORPAY_KEY_SECRET;

  const amount = 100;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'I am buying a bmw car',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: currency,
      key: razorpayKeyId,
      amount: amount * 100,
      name: 'My Customer 1',
      order_id: '',
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9191919191',
        name: 'XYZ',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
