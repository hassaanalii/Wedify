import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState("")
    
    useEffect(()=>{
        fetch("https://reactnative.dev/movies.json").then(response => response.json()).then(data => setData(data.title)).catch(error => console.error(error))
    },[])
  return (
    <View style={{display:"flex", alignItems:"center", justifyContent:"center", marginHorizontal:100, marginVertical:350}}>
      <Text style={{fontSize:20}}>{data}</Text>
    </View>
  )
}

export default FetchData