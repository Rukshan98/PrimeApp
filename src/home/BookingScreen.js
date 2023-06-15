import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer {'\n'}Inquiry</Text>
      <StatusBar style="auto" />
      <TextInput
      style={styles.textInputContainer}
      placeholder='Customer Name'
      
      />
       <TextInput 
      style={styles.textInputContainer}
      placeholder='Email address'
      
      />
       <TextInput
      style={styles.textInputContainer}
      placeholder='Contact number'
      
      />
       <TextInput
      style={styles.textInputContainer}
      placeholder='Service'
      
      />
       <TextInput
      style={styles.textInputContainer}
      placeholder='Package type'
      
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Next</Text>

      </TouchableOpacity>
  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  heading:{
    color:'#2F679B',
    fontSize:45,
    marginTop:50,
    marginBottom:50,
 alignSelf:'flex-start'
  },
  textInputContainer:{
    width:'100%',
    height:40,
    backgroundColor:'#D9D9D9',
    marginTop:15,
    borderRadius:5,
    padding:10,
  },
  button:{
    padding:10,
    height:40,
    width: "80%",
    backgroundColor:'#2F679B',
    alignSelf:'center',
    marginTop:40,
    borderRadius:5
  },
  btnText:{
    color:'white',
    alignSelf:'center',
    fontSize:17
  }
});

