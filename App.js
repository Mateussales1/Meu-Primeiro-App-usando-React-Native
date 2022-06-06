import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MeuComponente from './MeuComponente';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Text style={styles.title}>Meu App</Text>
              
          <MeuComponente/> 
        
    </View>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#2a2a2a',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 50,
  
  
},
title:{
  
  color: '#fff',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 24,
  
},

});