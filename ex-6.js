let height = undefined;
let result;
const checkValue = (val) => val ?? "Height is not defined";

result = checkValue(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
