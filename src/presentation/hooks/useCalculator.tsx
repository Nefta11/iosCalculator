import { useCallback, useEffect, useRef, useState } from 'react';

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
    const originalNumber = useRef<string>('0'); // Para guardar el número original
    const justCalculated = useRef<boolean>(false); // Para saber si acabamos de calcular

    const calculateSubResult = useCallback((): number => {
        if (!lastOperation.current) {
            return Number(originalNumber.current);
        }

        const num1 = Number(originalNumber.current);
        const num2 = Number(number);

        if (isNaN(num2) || number === '0') {
            return num1;
        }

        switch (lastOperation.current) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                return num1;
        }
    }, [number]);

    useEffect(() => {
        if (lastOperation.current) {
            setFormula(`${originalNumber.current} ${lastOperation.current} ${number}`);

            // Calcular el sub-resultado
            if (number !== '0' && !number.endsWith('.')) {
                const subResult = calculateSubResult();
                if (!isNaN(subResult) && isFinite(subResult)) {
                    setPrevsNumber(`${subResult}`);
                }
            }
        } else {
            setFormula(number);
        }
    }, [number, calculateSubResult]);

    const clean = () => {
        setNumber('0');
        setPrevsNumber('0');
        lastOperation.current = undefined;
        originalNumber.current = '0';
        justCalculated.current = false;
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
        // Si acabamos de calcular y empezamos a escribir un nuevo número, empezar de cero
        if (justCalculated.current) {
            justCalculated.current = false;
            if (numberString === '.') {
                return setNumber('0.');
            }
            return setNumber(numberString);
        }

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
        let numberToSave = number;
        if (number.endsWith('.')) {
            numberToSave = number.slice(0, -1);
        }

        // Si acabamos de calcular un resultado, usar ese resultado como base
        if (justCalculated.current) {
            originalNumber.current = number;
            setPrevsNumber(number);
            justCalculated.current = false;
        }
        // Si ya hay una operación en curso, calcular el resultado primero
        else if (lastOperation.current && originalNumber.current !== '0') {
            const result = calculateSubResult();
            originalNumber.current = `${result}`;
            setPrevsNumber(`${result}`);
        } else {
            originalNumber.current = numberToSave;
            setPrevsNumber(numberToSave);
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
        setNumber(`${result}`);
        lastOperation.current = undefined;
        originalNumber.current = '0';
        setPrevsNumber('0');
        justCalculated.current = true; // Marcamos que acabamos de calcular
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
