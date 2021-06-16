import * as React from 'react';
import { Text, View, StyleSheet,StatusBar,TouchableOpacity } from 'react-native';

const Board = ({navigation}) =>{
  return (

    <View style={styles.mainContainer}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        
        <View style={styles.bigCircle} ></View>
        <View style={styles.biggerCircle} ></View>

        <View style={styles.smallCircle}></View>
        <View style={styles.small1Circle}></View>

        <View style={styles.smallestCircle}></View>
        <View style={[styles.square, {transform: [{ rotate: "45deg" }]}]}></View>





        
       <View style={styles.details}> 

        <Text style={{fontSize: 35, color:'white', fontWeight:'bold', letterSpacing:2, lineHeight:50}}> Taking care of yourself is easy</Text>
        <Text style={{fontSize: 16, color:'white', marginVertical:20, lineHeight:25}}> Any treatment begins with consultation from a  qualified specialist.</Text>
        <TouchableOpacity activeOpacity={0.9} style={{marginVertical:10}} onPress={()=>{navigation.navigate('Home')}}>
          <Text style={{fontSize:22, color:'white', fontWeight:'bold',}}>Get started
          </Text>
          <View style={{width:60, height:7, backgroundColor:'#c4f44e', borderRadius:20, marginVertical:8, }}></View>
        </TouchableOpacity>
        
       </View>

     </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#1f4554'

  },
  bigCircle:{
    width:250,
    height:250,
    borderRadius:125,
    backgroundColor:'#d2c2f7',
    position:'absolute',
    top: 150,
    right:0,
  },
   biggerCircle:{
    width:150,
    height:150,
    borderRadius:75,
    backgroundColor:'#c4f44e',
    position:'absolute',
    top: 75,
    left:0,
  },
   square:{
    width:30,
    height:30,
    backgroundColor:'#c4f44e',
    position:'absolute',
    top: 300,
    right:50,
    
    
  },
   smallCircle:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#61d283',
    position:'absolute',
    right:0,
    top:40
  },
  small1Circle:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#61d283',
    position:'absolute',
    left:0,
    top:400
  },
    smallestCircle:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#d2c2f7',
    position:'absolute',
    left:40,
    top:-10
  },
  details:{

    height: "40%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 30,
 
    width:'100%',
  }
})

export default Board