import React from 'react';
import CalculatorScreen from './presentation/screens/CalculatorScreen';
import { StatusBar, View } from 'react-native';
import { styles } from './config/theme/app-theme';

function App(): React.JSX.Element {
  return (
    <View style={styles.backhround}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}



export default App;
