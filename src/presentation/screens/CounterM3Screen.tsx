import {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button, FAB} from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      {/* <Icon name='accessibility-outline' size={25}/> */}
      <FAB
        // label='+1'
        icon="add-outline"
        style={styles.fab}
        size="medium"
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: Platform.OS === 'android' ? 15 : 0,
    },
  });


