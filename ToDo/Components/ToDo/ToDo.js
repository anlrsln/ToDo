import React,{useState,useEffect} from "react"
import { Text,View,TouchableOpacity} from "react-native"
import styles from "./ToDo.styles"

const ToDo=({mission,handleNumber,handleLongPress})=>{
    const [isClicked,setIsClicked]=useState(false)
    

    function handlepressed(){
        setIsClicked(!isClicked)   
        console.log("useState: ",isClicked)
        handleNumber(isClicked)
    }

    function didLongPress(){
        handleLongPress(mission.id)
    }

    
    
    

    return(
        <TouchableOpacity onPress={handlepressed} onLongPress={didLongPress}>
            { isClicked ? (
                    <View style={styles.delete_container}>
                        <Text style={styles.text_decoration} >{mission.text}</Text>
                    </View>
                ):(
                    <View style={styles.container}>
                        <Text style={styles.input}>{mission.text}</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

export default ToDo;