import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Summary from './src/Summary';
import List from './src/List';
import Detail from './src/Detail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const transactions=[
    { id: '1', store: 'Freshco', amt: 110, address: 'London, ON', dt: '2023-06-20' },
    { id: '2', store: 'Best Buy', amt: 300, address: 'Burlington, ON', dt: '2023-07-04' },
    { id: '3', store: 'Costco', amt: 500, address: 'Vaughan, ON', dt: '2023-07-05' },
    { id: '4', store: 'IKEA', amt: 150, address: 'Markham, ON', dt: '2023-07-06' },
    { id: '5', store: 'Metro', amt: 80, address: 'Pickering, ON', dt: '2023-07-07' },
    { id: '6', store: 'Shoppers Drug Mart', amt: 60, address: 'Ajax, ON', dt: '2023-07-08' },
    { id: '7', store: 'Apple Store', amt: 1200, address: 'Toronto, ON', dt: '2023-07-09' }
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transactions">
          {() => 
            <Stack.Navigator>
            <Stack.Screen name="List">
              {props => <List {...props} transactions={transactions}/>}
            </Stack.Screen>
            <Stack.Screen name="Transaction Detail" component={Detail} />
          </Stack.Navigator>}
        </Tab.Screen>
        <Tab.Screen name="Summary">
          {() => <Summary transactions={transactions} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


