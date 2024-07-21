import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{transaction.store}</Text>
      <Text style={styles.text}>Amount: {transaction.amt}</Text>
      <Text style={styles.text}>Address: {transaction.address}</Text>
      <Text style={styles.text}>Date: {transaction.dt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'lightgray',
  },
});

export default Detail;
