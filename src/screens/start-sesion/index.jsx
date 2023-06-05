import { useState } from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../components/index';
import { styles } from './styles';

const StartSesion = ({ onStartSesion, navigation }) => {
  const [userSelected, setUserSelected] = useState(null);

  const onHandlerStartSesion = (user) => {
    setUserSelected(user);
  };

  const onHandlerLogin = () => {
    onStartSesion(userSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BIENVENIDO</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Seleccione el tipo de usuario con el cual desea ingresar a la fundación
          </Text>
        </View>
      </View>
      <View style={styles.usersContainer}>
        <Button
          text={'ENCARGADO'}
          value={'ENCARGADO'}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          /* onSelect={onHandlerStartSesion}
          onHandler={onHandlerLogin} */
          onPressButton={() => navigation.navigate('Home')}></Button>
        <Button
          text={'VOLUNTARIO'}
          value={'VOLUNTARIO'}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textStyle}
          /* onSelect={onHandlerStartSesion}
          onHandler={onHandlerLogin} */
          onPressButton={() => navigation.navigate('Home')}></Button>
        <Button
          text={'FAMILIAR'}
          value={'FAMILIAR'}
          buttonStyle={styles.buttonStyleDisabled}
          textStyle={styles.textStyle}
          disabled={true}
          onSelect={onHandlerStartSesion}
          onHandler={onHandlerLogin}></Button>
        <Button
          text={'USUARIO GENERAL'}
          value={'USUARIO GENERAL'}
          buttonStyle={styles.buttonStyleDisabled}
          textStyle={styles.textStyle}
          disabled={true}
          onSelect={onHandlerStartSesion}
          onHandler={onHandlerLogin}></Button>
      </View>
    </View>
  );
};

export default StartSesion;
