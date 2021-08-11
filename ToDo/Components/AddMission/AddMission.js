import React,{useState,useEffect} from "react";
import { View,Text,TouchableHighlight,TextInput } from "react-native";
import styles from "./AddMission.style"


const AddMission=(props)=>{
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.input} placeholder="Yapılacaklar..." placeholderTextColor="grey" onChangeText={props.onTextChange} value={props.value}/>
            <View style={styles.button_container}>
            <TouchableHighlight style={styles.button} onPress={props.onPress}>
                <Text style={styles.title}>Kaydet</Text>
            </TouchableHighlight>
            </View>
        </View>
    )
}

export default AddMission;