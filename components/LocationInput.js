import react from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';

export default function LocationInput(){
    return(
        <SafeAreaView style={styles.container}>
            <TextInput 
            placeholder = "stuff">
        
            </TextInput>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: .1,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  