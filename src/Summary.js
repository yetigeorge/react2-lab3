import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ transactions }) => {
  let sumAmt = transactions.reduce((sum, transaction) => sum + transaction.amt, 0);
  let highTrx = transactions.reduce((prev, current) => (prev.amt > current.amt) ? prev : current, transactions[0]);
  let lowTrx = transactions.reduce((prev, current) => (prev.amt < current.amt) ? prev : current, transactions[0]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Trxns: {transactions.length}</Text>
      <Text style={styles.text}>Balance Amt: ${sumAmt}</Text>
      <Text style={styles.text}>High Spending: {highTrx.store} - ${highTrx.amt}</Text>
      <Text style={styles.text}>Low Spending: {lowTrx.store} - ${lowTrx.amt}</Text>
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
    backgroundColor: 'lightgray',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 10,
  },
});

export default Summary;
