import React from 'react';
//이제 모든 페이지 컴포넌트들이 끼워져있는 책갈피를 메인에 둘예정이므로
//컴포넌트를 더이상 불러오지 않아도 됩니다.
// import MainPage from './pages/MainPage';
// import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';

//메인에 세팅할 네비게이션 도구들을 가져옵니다.
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'

export default function App() {

  console.disableYellowBox = true;
//ruturn에 책을 넣었다고 생각하자! 
  return ( 
  <NavigationContainer>
    <StatusBar style="black" />
    <StackNavigator/>
 </NavigationContainer>);
}