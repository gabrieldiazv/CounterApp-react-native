
import { StyleSheet, Text, View } from 'react-native'


export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>
            BoxObjectScreen
        </Text> */}
        <View style={styles.purpleBox}>
            <Text style={{color: 'white'}} >
                BoxObjectScreen
            </Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
        height: 30,
    },
    title:{
        fontSize: 30,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderWidth: 10,
    },
    purpleBox:{
        height: 30,
        backgroundColor: '#5856D6',
        // margin: 20,
        marginHorizontal: 20,
        padding: 5,
        
    }
})