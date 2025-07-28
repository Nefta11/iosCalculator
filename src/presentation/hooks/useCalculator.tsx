import { useState } from "react";

export const useCalculator = () => {

    const [number, setNumber] = useState('0');


    const clean = () => {
        setNumber('0');
    }

    //Borra el ultimo número ingresado
    const deleteOperation = () => {
        if (number.length === 1) {
            return setNumber('0');
        }

        const newNumber = number.slice(0, -1);
        setNumber(newNumber);
    }

    // Cambia el signo del número
    // Si el número es negativo, lo convierte en positivo y viceversa
    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }

        setNumber('-' + number);
    }

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

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
    }


    return {
        // Properties
        number,

        // Methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign
    }

}
