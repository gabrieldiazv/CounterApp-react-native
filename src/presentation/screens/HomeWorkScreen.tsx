import {StyleSheet, View} from 'react-native';

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.blueBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.purpleBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',


  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    
  },
  purpleBox: {
    backgroundColor: '#28C4D9',

  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    bottom: -50,
  },
  blueBox: {
    backgroundColor: '#5856D6',
    

  },
});
