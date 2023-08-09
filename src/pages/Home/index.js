import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name ="Luiz Henrique"/>
      <Balance saldo='15,452' gastos='754,27'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
