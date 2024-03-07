import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

const dimensions = Dimensions.get('window');

// const {width, height} = dimensions;

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{
            ...styles.purpleBox,
            width: width * 0.5,
            
        }}></View>
      </View>
      <Text style={styles.title}>
        Width: {width}, Height: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 400,
    height: 200,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
  title:{
    fontSize: 14,
    textAlign: 'center'
  }
});
