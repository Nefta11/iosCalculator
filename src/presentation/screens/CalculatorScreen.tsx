import { Text, View } from 'react-native';
import { styles } from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={styles.paddingContainer}>
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton label="C" />
                <CalculatorButton label="+/-" />
                <CalculatorButton label="del" />
                <CalculatorButton label="/" />

            </View>

        </View >
    );
};

export default CalculatorScreen;
