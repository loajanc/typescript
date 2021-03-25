// function squareOf(n:number) {
//   return n * n;
// }

// console.log(squareOf(2));
// // console.log(squareOf('n')); 정상작동 :: 에러남

//type 별칭
type Color = 'red';
let x = Math.random() < .5;
if(x) {
  type Color = 'blue';
  let b : Color = 'blue';
  console.log(b);
} else {
  let c : Color = 'red';
  console.log(c);
}
// let d : Color = 'blue'; - 에러가 발생한다.
// console.log(d);


//typescript union, intersection
{
  type Cat = {name: string, purrs: boolean};
  type Dog = {name: string, barks: boolean, wags: boolean};
  type CatOrDogOrBoth = Cat | Dog;
  type CatAndDog = Cat & Dog;

  // Cat
  let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
  }

  // Dog
  a = {
    name: 'Domino',
    barks: true,
    wags: true
  }

  // 둘 다
  a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
  }

  //
  let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
  }

}