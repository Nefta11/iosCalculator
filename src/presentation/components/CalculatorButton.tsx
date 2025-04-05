import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../../config/theme/app-theme';

interface Props {
    label: string;
}

const CalculatorButton: React.FC<Props> = ({ label }) => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
};

export default CalculatorButton;
