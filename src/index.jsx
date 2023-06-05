import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import AppNavigator from './navigation';
import { Header } from './components/index';
import { theme } from './constants';
import { StartSesion, Home, Stock, Orders } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [user, setUser] = useState(null);
  const [module, setModule] = useState(null);
  const [headerTitle, setHeaderTitle] = useState(null);
  const [loaded] = useFonts({
    'Oswald-Bold': require('../assets/fonts/Oswald-Bold.ttf'),
    'Oswald-ExtraLight': require('../assets/fonts/Oswald-ExtraLight.ttf'),
    'Oswald-Light': require('../assets/fonts/Oswald-Light.ttf'),
    'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
    'Oswald-Regular': require('../assets/fonts/Oswald-Regular.ttf'),
    'Oswald-SemiBold': require('../assets/fonts/Oswald-SemiBold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  /* const onStartSesion = (user) => {
    setUser(user);
  };

  const onModuleSelect = (module) => {
    setHeaderTitle(module);
    setModule(module);
  }; */

  const showHeader = user ? true : false;

  /* const Content = () => {
    if (module === 'PEDIDOS') {
      return <Orders />;
    } else if (module === 'STOCK') {
      return <Stock />;
    } else {
      if (!user) {
        return <StartSesion onStartSesion={onStartSesion} />;
      } else {
        return <Home user={user} onModuleSelect={onModuleSelect} />;
      }
    }
  }; */

  return (
    <View style={styles.container}>
      <Header show={showHeader} title={headerTitle} />
      {/* <Content /> */}
      <AppNavigator />
    </View>
  );
}
