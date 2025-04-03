import {  Text, View } from 'react-native';
import { styles } from '../../config/theme/app-theme';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer} >
            <Text style={styles.mainResult}>1500</Text>
            <Text style={styles.subResult}>15</Text>
        </View>
    );
};


export default CalculatorScreen;
