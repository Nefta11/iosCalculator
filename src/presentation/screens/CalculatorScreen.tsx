import { Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const { number, buildNumber, clean, deleteOperation, toggleSign, divideOperation, multiplyOperation, subtractOperation, addOperation, prevsNumber, calculateResult } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            <View style={styles.paddingContainer}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.mainResult}>{number}</Text>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.subResult}>
                    {(prevsNumber === '0') ? '' : prevsNumber}
                </Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={clean} label="C" blackText color={colors.lightGray} />
                <CalculatorButton onPress={toggleSign} label="+/-" blackText color={colors.lightGray} />
                <CalculatorButton onPress={deleteOperation} label="del" blackText color={colors.lightGray} />
                <CalculatorButton onPress={divideOperation} label="/" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('7')} label="7" />
                <CalculatorButton onPress={() => buildNumber('8')} label="8" />
                <CalculatorButton onPress={() => buildNumber('9')} label="9" />
                <CalculatorButton onPress={multiplyOperation} label="x" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('4')} label="4" />
                <CalculatorButton onPress={() => buildNumber('5')} label="5" />
                <CalculatorButton onPress={() => buildNumber('6')} label="6" />
                <CalculatorButton onPress={subtractOperation} label="-" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('1')} label="1" />
                <CalculatorButton onPress={() => buildNumber('2')} label="2" />
                <CalculatorButton onPress={() => buildNumber('3')} label="3" />
                <CalculatorButton onPress={addOperation} label="+" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('0')} label="0" dobleSize />
                <CalculatorButton onPress={() => buildNumber('.')} label="." />
                <CalculatorButton onPress={calculateResult} label="=" color={colors.orange} />
            </View>

        </View >
    );
};

export default CalculatorScreen;
