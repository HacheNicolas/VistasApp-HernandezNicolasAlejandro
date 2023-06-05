import { View, Text } from 'react-native';
import { styles } from './styles';

const Orders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Pedidos y Donaciones</Text>
      </View>
    </View>
  );
};

export default Orders;
