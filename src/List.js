import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const List = ({ transactions }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
            <View style={styles.transactionItem}>
              <Text style={styles.text}>{item.store}</Text>
              <Text style={styles.text}>${item.amt}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  transactionItem: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    marginBottom: 5
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default List;
