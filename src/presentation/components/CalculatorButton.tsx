import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
    label: string;
    color?: string;
}

const CalculatorButton: React.FC<Props> = ({ label, color = colors.darkGray }) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...styles.button,
            backgroundColor:color,
            opacity:(pressed) ? 0.8 : 1,
        })}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
};

export default CalculatorButton;
