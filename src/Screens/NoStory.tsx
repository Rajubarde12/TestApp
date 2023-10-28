import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity as Touch } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function NoStory() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: "#328da8" }}>
            <View style={styles.header} >
                {/* <Touch onPress={()=>navigation.goBack()}> */}
                {/* <Image tintColor={'#FFD700'} style={{ height: 30, width: 30 }} source={require('../Assets/back.png')} /></Touch> */}
                <Image tintColor={'#FFD700'} style={{ height: 40, width: 40 }} source={require('../Assets/menu.png')} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity  style={{ height: '80%' }} activeOpacity={1}
                   onPress={()=>navigation.navigate('StoryAdded')} 
                >
                    <ImageBackground style={{ height: "75%", width: '100%', alignSelf: 'center', alignItems: "center", overflow: 'hidden' }} tintColor={'grey'} source={require('../Assets/decagaonal.png')}>

                        <Image style={{ height: '50%', width: '70%', alignSelf: "center", borderRadius: 90, marginTop: '17%' }} source={require('../Assets/user.jpg')} />

                        <View style={{ marginTop: '24%' }}>
                            <Text style={styles.name}>John Dev</Text>
                            <Text style={styles.name}>Developer (React-native)</Text>
                        </View>
                    </ImageBackground>
                    <Touch style={styles.plushicon}>
                        <Image tintColor={'#FFD700'}  style={{height:50,width:50}} source={require('../Assets/plush.png')} />
                    </Touch>
                </TouchableOpacity>


            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 5,
        marginHorizontal: 15
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        color: "white",
        textAlign: "center"
    },
    plushicon: {
        position: "absolute",
        height: 50, width: 50,
        right: 30,
        top: '40%',
        zIndex:1
    }

})