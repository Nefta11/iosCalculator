import { Pressable, Text, View } from 'react-native';
import { styles } from '../../config/theme/app-theme';

const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={styles.paddingContainer}>
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Pressable  style={styles.button}>
                    <Text style={styles.buttonText}>Holaa Mundo </Text>
                </Pressable>
            </View>

        </View >
    );
};

export default CalculatorScreen;
