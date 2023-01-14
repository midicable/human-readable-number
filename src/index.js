module.exports = function toReadable (number) {
  let digitsMap = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    ]);
  
  let decimalsMapCase1 = new Map([
    [0, 'ten'],
    [1, 'eleven'],
    [2, 'twelve'],
    [3, 'thir'],
    [4, 'four'],
    [5, 'fif'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eigh'],
    [9, 'nine'],
    ]);
  
  let decimalsMapCase2 = new Map([
    [2, 'twen'],
    [3, 'thir'],
    [4, 'for'],
    [5, 'fif'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eigh'],
    [9, 'nine'],
  ]);
  
  let hundreds = Math.floor(number / 100);
  let decimals = Math.floor((number % 100) / 10);
  let digits = number % 10;
  let humanReadableNumber = '';

  if (!number) {
    return digitsMap.get(digits);
  }
  if (hundreds) {
    humanReadableNumber += digitsMap.get(hundreds) + ' hundred ';
  }
  if (decimals) {
    if (decimals == 1) {
      switch (digits) {
        case 0:
          humanReadableNumber += decimalsMapCase1.get(0);
          break;
        case 1:
          humanReadableNumber += decimalsMapCase1.get(1);
          break;
        case 2:
          humanReadableNumber += decimalsMapCase1.get(2);
          break;
        default:
          humanReadableNumber += decimalsMapCase1.get(digits) + 'teen';
          break;
      }
        return humanReadableNumber;
    } else {
        humanReadableNumber += decimalsMapCase2.get(decimals) + 'ty '
      }
    }
  if (digits) {
    humanReadableNumber += digitsMap.get(digits);
  } 
  return humanReadableNumber.trim();
}
