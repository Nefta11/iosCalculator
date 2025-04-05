import { Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={styles.paddingContainer}>
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton label="C" color={colors.lightGray} />
                <CalculatorButton label="+/-" color={colors.lightGray} />
                <CalculatorButton label="del" color={colors.lightGray} />
                <CalculatorButton label="÷" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="7" color={colors.lightGray} />
                <CalculatorButton label="8" color={colors.lightGray} />
                <CalculatorButton label="9" color={colors.lightGray} />
                <CalculatorButton label="X" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="4" color={colors.lightGray} />
                <CalculatorButton label="5/-" color={colors.lightGray} />
                <CalculatorButton label="6" color={colors.lightGray} />
                <CalculatorButton label="-" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="1" color={colors.lightGray} />
                <CalculatorButton label="2" color={colors.lightGray} />
                <CalculatorButton label="3" color={colors.lightGray} />
                <CalculatorButton label="+" color={colors.orange} />
            </View>
        </View >
    );
};

export default CalculatorScreen;
