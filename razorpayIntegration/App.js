import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RAZORPAY_KEY_ID } from '@env';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const razorpayKeyId = RAZORPAY_KEY_ID;
  const amount = 100; // Amount in currency's smallest unit (e.g., paisa in INR)
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'Buy BMW CAR',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: razorpayKeyId,
      amount: amount * 100,
      name: 'test order',
      order_id: "", // Replace this with an order_id created using Orders API.
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9999999999',
        name: 'User 1'
      },
      theme: { color: '#F37254' },
      payment_method: {
        netbanking: true, // Enable Netbanking payments
        wallet: true,     // Enable Wallet payments
        upi: true         // Enable UPI payments
      }
    }

    RazorpayCheckout.open(options)
      .then((data) => {
        // Handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // Handle failure
        console.log(error);
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Razorpay Example</Text>
      <TouchableOpacity onPress={handlePayment} style={styles.button}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
