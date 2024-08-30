let num = 64646547;
let fibonacci_num;
let sequence = [0, 1];
let last;
let antepenult;

while (true) {
  last = sequence.length - 1;
  antepenult = last - 1;
  fibonacci_num = sequence[last] + sequence[antepenult];
  sequence[sequence.length] = fibonacci_num;

  // TEST
  if (fibonacci_num == num) {
    console.log("O número " + num + " está na sequência de Fibonacci");
    break;
  }
  if(fibonacci_num > num){
    console.log("O número " + num + " não está na sequência de Fibonacci");
    break;
  }
}
