import React from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'


export default function LikePage(){
    const aboutImage = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png"
  return (
    <View style={styles.container}>
        <Text style={styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>
        <View style={styles.textContainer}>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#1F266A",
        alignItems:"center"
      
    },
    title: {
        fontSize:30,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop:100,
        paddingRight:30
    },
    textContainer: {
        width:300,
        height:500,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700"
    }
})