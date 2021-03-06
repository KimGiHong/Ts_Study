var score1 = 0; // var : 함수단위의 스코프
/* 
안에서 선언한 함수를 밖에서 호출할때 불가능하다. 함수안에서만 가능 하지만 밖에서 함수를 선언했을 때 안에서 호출시 오류는 뜨지 않는다.
if문,for문 안에서 선언하여도 상관없이 호출가능하다. 
var는 블록단위가 아닌 함수 단위 이다.
*/

// function outer() {
//     if(true) {
//         var score = 0;
//     }

//     for(var i = 0; i < 3; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000)
//     }
//     console.log(score);
// }
// outer();

let score2 = 200; // let : 블록단위의 스코프
/*
let은 블록단위의 스코프이다. 따라서 if문안에서 선언시 if문 밖에서는 호출이 불가능하다.
또 ts로 컴파일할때도 오류가 나게 된다.
*/

// function outer() { 
//     if(true) {
//         let score;
//         score = 30;
//         // score = "30";
//     };

//     for (let i = 0; i < 3; i++) {
//         setTimeout(function() {
//             console.log(i);
//         },1000)
//     }
    /*
    숫자형으로 할당했을때는 큰 문제가 생기지 않는다,왜냐면 score는 숫자형이라는 것을 이미 알고있기 때문이다.하지만 문자형을 대입할 경우 오류가 발생한다.
    타입스크립트에서는 한번 초기 값을 할당을 하고 변수를 선언할 경우 그 값의 타입으로 이 변수의 타입이 지정되게한다.
    그리고 변수에 값을 지정해주지 않을때는 any타입을 가지게 된다. 어떠한 값을 가질 수 있는 변수가 되게 된다.
    변수의 값을 특정한 타입으로 정해주고 싶다면 타입 어노테이션을 줄 수 있다. ex) let score: number; 이렇게 될 시 숫자형 말고 다른 값을 줄 시 오류가 발생하게 된다.

    for문에서 let은 각각 순회 될때마다 다른 공간을 가질 수 있다.
    */
// }
// outer();

const defaultScore = 0; // const : 선언시 초기 값을 무조건 채워줘야한다.

function outer() {
    if(true) {
        const score = 100;
        //score = 30; // 다시 선언하게 되면 오류가 뜬다.
    };
    //console.log(score); //let과 마찬가지로 블록 밖에서는 호출이 불가능하다.
}