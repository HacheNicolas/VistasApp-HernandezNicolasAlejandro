import { useState } from 'react';
import { View } from 'react-native';

import { Button, Card } from '../../components/index';
import { styles } from './styles';

const Home = ({ user, onModuleSelect, navigation }) => {
  const [moduleSelected, setModuleSelected] = useState(null);

  const onHandlerModuleSelect = (module) => {
    setModuleSelected(module);
  };

  const onHandlerModule = () => {
    onModuleSelect(moduleSelected);
  };

  /* const Content = () => {
    if (user === 'ENCARGADO') { */
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <Card cardStyle={styles.simpleCard}>
          <Button
            text={'PEDIDOS'}
            value={'PEDIDOS'}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            /* onSelect={onHandlerModuleSelect}
            onHandler={onHandlerModule} */
            onPressButton={() => navigation.navigate('Orders')}></Button>
        </Card>
        <Card cardStyle={styles.simpleCard}>
          <Button
            text={'STOCK'}
            value={'STOCK'}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            /* onSelect={onHandlerModuleSelect}
            onHandler={onHandlerModule} */
            onPressButton={() => navigation.navigate('Stock')}></Button>
        </Card>
      </View>
    </View>
  );
  /* } else if (user === 'VOLUNTARIO') {
      return (
        <View style={styles.container}>
          <View style={styles.usersContainer}>
            <Card cardStyle={styles.simpleCard}>
              <Button
                text={'PEDIDOS'}
                value={'PEDIDOS'}
                buttonStyle={styles.buttonStyleDisabled}
                textStyle={styles.textStyle}
                disabled={true}
                onSelect={onHandlerModuleSelect}
                onHandler={onHandlerModule}></Button>
            </Card>
          </View>
        </View>
      );
    }
  };

  return <Content />;*/
};

export default Home;
