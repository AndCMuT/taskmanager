const n = parseInt(prompt());
let arr = [];
for (i = 0; i < n; i++) {
      arr.push(prompt().split(' '));
}
let sum = 0;
for (let j = 0; j < n; j++){
      for (let k = 0; k < n; k++) {
            sum = sum + parseInt(arr[j][k]);
      }
}
let average = sum / (n*n);
for (let j = 0; j < n; j++){
      for (let k = 0; k < n; k++) {
            if (arr[j][k] >= average) {
                  console.log(arr[j][k]);
            }
      }
}