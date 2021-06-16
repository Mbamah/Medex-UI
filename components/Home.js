import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,StatusBar, Image, ScrollView,TextInput,TouchableOpacity,Dimensions,FlatList } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import specials from './data'
import hospitals from './hospitals'
const {width} = Dimensions.get('screen')

const Home = () => {

  const Card = ({special}) =>{
    return(
      <TouchableOpacity activeOpacity={0.8}>

        <View style={styles.card}>
          <View style={{backgroundColor:'white',padding:20, width:70, height:70,display:'flex', alignItems:'center',justifyContent:'center' ,borderRadius:20, marginTop:20, marginLeft:20, elevation:10}}>
            <Image source={special.image} style={styles.cardImage}/>
          </View>
          <Text style={{ marginLeft:20,marginTop:30, fontSize:20,fontWeight:'bold'}}>{special.name}</Text>

          <Text style={{ marginLeft:20, fontWeight:'bold',paddingVertical:5}}>{special.doctors}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const CardHospital = ({hospital}) =>{
    return(
      <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.cardHos}>
        <View style={{flexDirection:'row'}}>
          <View style={{backgroundColor:'#1f4554',width:70, height:70,display:'flex', alignItems:'center',justifyContent:'center' ,borderRadius:10 }}>
            <Image style={{ height:30, color:'white', width:30}}  source={hospital.image}/>
          </View>
          <View style={{flexDirection:'column', paddingLeft: 10, flex:1}}> 
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{fontSize:20, fontWeight:'bold', paddingBottom:5}}>{hospital.name}</Text>
            <Text style={{fontWeight:'bold'}}>{hospital.time}</Text>
          </View>
          <Text style={{width:'100%',flexWrap:'wrap'}}>{hospital.activities}</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#1f4554'}}>
          <StatusBar translucent backgroundColor={'#1f4554 '} />
          <View style={styles.header}>
            <Text style={{color:'white', fontSize:'20', fontWeight:'bold', fontFamily:'monospace'}}>Medex.</Text>
             <AntDesign name="appstore1" size={28} color="white" />
          </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View  >
              <View style={{paddingHorizontal: 20}}>
                  <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>
                    Health Assistance
                  </Text>
                  <Text style={{paddingVertical:10, lineHeight:25, color:'white' ,fontSize:16}}>We always have a doctor on duty, so you can get help within 30 minutes</Text>

                  <View style={styles.inputContainer}>
                    <MaterialIcons name="search" size={28} color={'#1f4554'} />
              <TextInput
                placeholder="Search by name or speciality..."
                style={{ color: '#1f4554', fontSize: 19, paddingLeft: 10 }}
              />
                  </View>
              </View>
            </View>

            <View style={styles.details}>
              <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:23, color:'#111',fontWeight:'bold'}}>Specialties</Text>
                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                  <Text style={{fontSize:18, paddingRight:7, color:'grey'}}>All</Text>
                  <MaterialIcons name="arrow-forward-ios" size={16} color="grey" />
                </View>
              </View>

            <View>
              <FlatList  data={specials} renderItem={({item})=> <Card special={item}/>} horizontal contentContainerStyle={{  paddingVertical: 20 }} showsHorizontalScrollIndicator={false}/>

              <Text style={{color:'#9db3b7', fontWeight:'bold', fontSize:22, paddingTop:10}}> Hospitals near you</Text>
              <FlatList data={hospitals} renderItem={({item}) => <CardHospital hospital={item}/>} showsVerticalScrollIndicator={false}contentContainerStyle={{ paddingVertical: 10, }} 
              />

            </View>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    paddingHorizontal:20,
    height: 50,
    width: "100%",
    backgroundColor: '#f1faee',
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 12,
    marginVertical:10,
    opacity:.5,
  },
  details:{
    backgroundColor:'white',
    top: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 1,
  },
  card:{
    height: 200,
    width: width / 2,
    overflow: "hidden",
    borderRadius: 25,
    backgroundColor:'#e5dff5',
    elevation:12,
    marginRight: 20,
    padding:10,
  },
  cardImage:{
    height:50,
    width:50
  },
  cardHos:{
    elevation:12,
    height:100,
    marginTop: 20,
    borderRadius:10,
  },
  
});
export default Home;