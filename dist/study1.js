"use strict";
// function squareOf(n:number) {
//   return n * n;
// }
var x = Math.random() < .5;
if (x) {
    var b = 'blue';
    console.log(b);
}
else {
    var c = 'red';
    console.log(c);
}
// let d : Color = 'blue'; - 에러가 발생한다.
// console.log(d);
//typescript union, intersection
{
    // Cat
    var a = {
        name: 'Bonkers',
        purrs: true
    };
    // Dog
    a = {
        name: 'Domino',
        barks: true,
        wags: true
    };
    // 둘 다
    a = {
        name: 'Donkers',
        barks: true,
        purrs: true,
        wags: true
    };
    //
    var b = {
        name: 'Domino',
        barks: true,
        purrs: true,
        wags: true
    };
}
//# sourceMappingURL=study1.js.map