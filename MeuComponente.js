import react from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function MeuComponente(){
    return(
        <View style={styles.card}>
        <Text style={styles.cardTitle}>React Native</Text>
        <Text style={styles.cardSubTitle}>Criando applicações para Android e iOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    card: {
      backgroundColor:'#fff',
      padding: 12,
      borderRadius: 3,
      marginVertical: 12,
      
    },
    cardTitle:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    cardSubTitle:{
      color: '#999', 
      fontSize: 16,
    },
  });
  
  