// {
//   function* createFibonacciGenerator(): IterableIterator<number> { // es2016에서 사용가능
//     let a = 0;
//     let b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a+b];
//     }
//   }
//   let fibonacciGenerator = createFibonacciGenerator();
//   fibonacciGenerator.next();
//   fibonacciGenerator.next();
//   fibonacciGenerator.next();
//   fibonacciGenerator.next();
//   fibonacciGenerator.next();
// }

