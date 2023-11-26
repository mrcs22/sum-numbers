function getArithmeticProgression(multiple, number) {
    const multiplesAmount = Math.floor((number - 1) / multiple);

    const result = multiple * (multiplesAmount * (multiplesAmount + 1)) / 2;
    return result;
}

function sumMultiplesOfThreeAndFiveUpToValue(value) {
    const multiplesOfFiveSum = getArithmeticProgression(5, value);
    const multiplesOfThreeSum = getArithmeticProgression(3, value);
    const multiplesOfFifteenSum = getArithmeticProgression(15, value);

    return multiplesOfFiveSum + multiplesOfThreeSum - multiplesOfFifteenSum;
}

function calculateFromWeb() {
    const inputNumber = document.getElementById("inputNumber").value;
    const output = document.getElementById("output");

    if (inputNumber.trim() === "") {
        alert("É preciso digitar um número");
        output.value = '0'
        return;
    }

    const parsedInput = parseFloat(inputNumber);

    if (isNaN(parsedInput) || !Number.isInteger(parsedInput)) {
        alert("Digite um número inteiro válido");
        output.value = '0'
        return;
    }

    if (parsedInput < 0) {
        alert("Digite um inteiro positivo.");
        output.value = '0'
        return;
    }

    output.value = sumMultiplesOfThreeAndFiveUpToValue(parsedInput)
}



function calculateFromTerminal(inputNumber) {
    const output = {};

    if (inputNumber?.trim() === "" || !/^\d+$/.test(inputNumber?.trim())) {
        console.log("É preciso digitar um número inteiro e positivo");
        output.value = '0';
        return output;
    }

    const parsedInput = parseInt(inputNumber);
 
    output.value = sumMultiplesOfThreeAndFiveUpToValue(parsedInput)
    return output;
}


const isRunningFromNode = typeof process !== 'undefined'

if (isRunningFromNode) {
    if (process.argv.length < 3) {
        console.log("Por favor, forneça um número como argumento.");
    } else {
        const inputNumber = process.argv[2];

        const result = calculateFromTerminal(inputNumber);
        console.log("Resultado:", result.value);
    }
}
