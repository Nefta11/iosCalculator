import { StyleSheet, Text, View } from 'react-native';

const CalculatorScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calculator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
});
export default CalculatorScreen;
