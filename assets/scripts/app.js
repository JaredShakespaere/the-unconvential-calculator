const defaultResult = 0;
let currentResult = 0;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An error' + 'occured!';

outputResult(currentResult, errorMessage);
