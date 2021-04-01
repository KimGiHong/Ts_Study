interface TV {
    turnOn(): boolean; // 잘 켜졌는지의 여부
    turnOff(): void; // 아무것도 적지않으면 기본값 void
}

const myTV: TV = {
    turnOn(){
        return true;  // return값이 무조건 boolean타입이 되어야 한다.
    },
    turnOff(){

    }
}

function tryTurnOn(tv: TV){
    tv.turnOn();
}

interface Cell {  //인터페이스는 행위가 없고 이 3가지 속성 즉 데이터를 담고있어야 한다.
    row: number;
    col: number;
    piece?: Piece; // 옵션을 한 속성
}
// 인터페이스를 기반으로 코드를 작성하면 좋은점
// 인터페이스를 사용하는것을 클라이언트

interface SignUp {
    email: string;
    id: string;
    password: string;
}

function ajaxSignUp(data: SignUp) {

}
// ajaxSignUp({
//     email
// });

interface Piece {
    move(from: Cell, to: Cell): boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for(let col = 0; col < 3; col++){
            cells.push({ row, col });
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell){
        return true;
    }
}
