const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on("line", (line) => {
    let result = Fibonacci_numbers(line);
    console.log(result);


    rl.close(); // 필수!! close가 없으면 입력을 무한히 받는다.
});
rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
        process.exit();
})


function Fibonacci_numbers(n){
   if(n<=1){
      return n
   }
   
    return Fibonacci_numbers(n-1) + Fibonacci_numbers(n-2);

}
     
