import { useRef, useState } from 'react';

enum Operator {
    add,
    subtract,
    multiply,
    divide,
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [prevsNumber, setPrevsNumber] = useState('0');

    const lastOperation = useRef<Operator | undefined>(undefined);

    const clean = () => {
        setNumber('0');
        setPrevsNumber('0');
    };

    //Borra el ultimo número ingresado
    const deleteOperation = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }
        setNumber('0');
    };

    // Cambia el signo del número
    // Si el número es negativo, lo convierte en positivo y viceversa
    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }

        setNumber('-' + number);
    };

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') {
            return;
        }

        if (number.startsWith('0') || number.startsWith('-0')) {

            // Punto decimal
            if (numberString === '.') {
                return setNumber(number + numberString);
            }
            // Evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
            // Evaluar si es diferente de cero, no hay punto decimal y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //Evaluar para evitar 00000.00
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
            return setNumber(number + numberString);
        }

        setNumber(number + numberString);
    };

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevsNumber(number.slice(0, -1));
        } else {
            setPrevsNumber(number);
        }
        setNumber('0');
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };

    // Aquí podrías implementar la lógica para calcular el resultado basado en lastOperation
    const calculateResult = () => {

        const num1 = Number(number);
        const num2 = Number(prevsNumber);

        switch (lastOperation.current) {
            case Operator.add:
                setNumber(`${num1 + num2}`);
                break;
            case Operator.subtract:
                setNumber(`${num2 - num1}`);
                break;
            case Operator.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operator.divide:
                setNumber(`${num2 / num1}`);
                break;
            default:
                throw new Error('Invalid operation');
        }

        setPrevsNumber('0');
    };
    return {
        // Properties
        number,
        prevsNumber,

        // Methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult
    };
};
