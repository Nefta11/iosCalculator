import { useEffect, useRef, useState } from 'react';

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '/',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');

    const [number, setNumber] = useState('0');
    const [prevsNumber, setPrevsNumber] = useState('0');

    const lastOperation = useRef<Operator | undefined>(undefined);

    useEffect(() => {

        if (lastOperation.current) {
            const firstFormulaPart = formula.split('').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }

    }, [number, formula]);

    const clean = () => {
        setNumber('0');
        setPrevsNumber('0');
        lastOperation.current = undefined;
        setFormula('0');
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

        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined;
        setPrevsNumber('0');
    };

    const calculateSubResult = (): number => {

        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) {
            return num1;
        }

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num2 - num1;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num2 / num1;
            default:
                throw new Error('Invalid operation');
        }
    };

    return {
        // Properties
        number,
        prevsNumber,
        formula,

        // Methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
    };
};
