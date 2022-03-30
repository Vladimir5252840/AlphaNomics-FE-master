export const normalizeNumber = (number) => number.toLocaleString();
export const roundNumber = (number, to) => {
  var num = number;
  if (!(Number(num) === num && num % 1 !== 0)) {
    to = 0;
  }
  return num.toLocaleString(undefined, {
    minimumFractionDigits: to,
    maximumFractionDigits: to,
  });
};

export function priceNumFormatter(num) {
  if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
  }else if(num > 1000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
  }else if(num < 900){
      return num; // if value < 1000, nothing to do
  }
}