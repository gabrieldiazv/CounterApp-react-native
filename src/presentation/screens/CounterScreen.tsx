import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button, FAB} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      {/* <PrimaryButton
        label="Sumar 1"
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}
      /> */}
      <Button
        mode="contained"
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}>
        Sumar 1
      </Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
    fontWeight: '300',
  }
});
