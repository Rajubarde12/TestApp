import React from "react";
import { View,SafeAreaView } from "react-native";
import MyStack from "./src/Navigation";
const App=()=>{
  return(
    <View style={{flex:1}}>
   <SafeAreaView style={{flex:1,backgroundColor:'#328da8'}}>
     <MyStack/>
   </SafeAreaView>
    </View>
  )
}
export default App