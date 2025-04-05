import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../../config/theme/app-theme';

const CalculatorButton = () => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
        </Pressable>
    );
};

export default CalculatorButton;

