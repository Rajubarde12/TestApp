import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
export default function StoryScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: "#328da8" }}>
            <View style={styles.header} >
                {/* <TouchableOpacity onPress={() => navigation.goBack()}><Image tintColor={'#FFD700'} style={{ height: 30, width: 30 }} source={require('../Assets/back.png')} /></TouchableOpacity>
                <Image tintColor={'#FFD700'} style={{ height: 40, width: 40 }} source={require('../Assets/menu.png')} /> */}
            <View style={{ height: 8, borderWidth: 1.5, marginHorizontal: 20, marginTop: 30, borderRadius: 55, borderColor: "white" }}>
                <View style={{ width: '50%', backgroundColor: "white", height: "100%", borderRadius: 55 }}></View>
            </View>
            </View>

            <View style={styles.storyImageContainer}>
              <Image style={{height:'100%',width:"100%",overflow:'hidden'}} source={require('../Assets/isro.jpeg')}/>
            </View>
            <Text style={{textAlign:"center",marginTop:30,fontSize:25,fontWeight:'500',color:'white'}}>ISRO to launch surveillance satellite</Text>

            <Text style={{fontSize:30,fontWeight:'600',marginHorizontal:"15%",textAlign:"center",color:"white",marginTop:'30%'}} >SUCH AN AMAZING NEW! YOU MUST <Text style={{fontSize:38}}> READ THIS!</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
       
        marginTop: 5,
        marginHorizontal: 15
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        color: "grey",
        textAlign: "center"
    },
    storyImageContainer: {
      //  borderWidth: 1,
        marginTop: 80,
        height: '28%',
        width: '95%',
        borderRadius: 30,
        alignSelf: 'center',
        shadowColor:'black',
        shadowOpacity:1,
        shadowOffset:{height:5,width:5},
        shadowRadius:5,
        backgroundColor:"white",
        overflow:"hidden"
      

    }
}
)