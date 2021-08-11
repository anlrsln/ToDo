import React,{useState,useEffect} from "react"
import { SafeAreaView,View,Text,StyleSheet,FlatList} from "react-native"
import ToDo from "./Components/ToDo"
import AddMission from "./Components/AddMission"

const App=()=>{
  const [number,setNumber]=useState(0)
  const [id,setId]=useState(0)
  const [text,setText]=useState("")
  const [data,setData]=useState([]);
  //const [isClicked,setIsClicked]=useState(false)


  function renderMission({item}){
   //console.log(item);
    return <ToDo mission={item} handleNumber={handleNumber} handleLongPress={handleLongPress}/>
  }

  function handleLongPress(id){
    const removeItemData=data.filter(i=>i.id!==id)
    setNumber(number-1)
    setData(removeItemData)
  }


  function handleNumber(isTrue){
    if(isTrue){
      setNumber(number+1)
    }else{
      setNumber(number-1)
    }
  }

  function onAdd(){
    const dataObj={
      id:id,
      text:text,
    }
    data.unshift(dataObj)
    setId(id+1);
    setNumber(number+1)
    setData(data)
    console.log(data);
  }


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
          <Text style={styles.title}>Yapılacaklar</Text>
          <Text style={styles.number}>{number}</Text>
      </View>
      <View style={styles.body}>
        <FlatList data={data} renderItem={renderMission}/>
      </View>
      <AddMission onTextChange={setText}  onPress={onAdd} value={text}/>
    </SafeAreaView>
  )
}

export default App;


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1f3a46"
  },
  head:{
    flexDirection:"row",
    padding:10
  },
  body:{
    flex:1,
  },
  title:{
    flex:1,
    fontSize:35,
    fontWeight:"bold",
    color:"#d2aa03"
  },
  number:{
    fontSize:35,
    color:"#d2aa03"
  }

})