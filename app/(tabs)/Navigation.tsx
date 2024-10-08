import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Mypage from '../screen/Mypage';
import Signin from '../screen/Signin';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  )
}


function Navigation() {
  return (
    <NavigationContainer independent={true}>
    {/* <NavigationContainer> */}
      <StackScreen />
    </NavigationContainer>
  )
}

export default Navigation;