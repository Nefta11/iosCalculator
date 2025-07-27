import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
    label: string;
    color?: string;
    dobleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

const CalculatorButton: React.FC<Props> = ({ label, color = colors.darkGray, dobleSize = false, blackText = false, onPress }) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...styles.button,
                backgroundColor: color,
                width: dobleSize ? 180 : 80,
                opacity: pressed ? 0.8 : 1,
            })}
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: blackText ? 'black' : 'white',
                }}
            >
                {label}
            </Text>
        </Pressable>
    );
};

export default CalculatorButton;
