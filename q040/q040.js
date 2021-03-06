let com = new Array(6);
let me = [12, 21, 36, 43, 8, 32];

// 중복없이 랜덤숫자(1~45) 6개 com 배열에 넣기
for(let i=0; i<com.length; i++) {
    com[i] = Math.floor(Math.random() * 45) + 1;
    for(let j=0; j<i; j++){
        if(com[i] == com[j]) {
            i--;
        }
    }
}

// 컴퓨터의 6개의 숫자와 내 숫자를 비교 후 일치한 만큼 변수(count)에 누적시키기
let count = 0;
for(let i=0; i<com.length; i++){
    for(let j=0; j<me.length; j++){
        if(com[i] == me[j]) {
            count++;
        }
    }
}

// 컴퓨터 랜덤숫자 6개 출력
dw("컴퓨터: ");
for(let i=0; i<com.length; i++){
    dw(com[i] + " ");
}
br();

// 내 랜덤숫자 6개 출력
dw("나: &nbsp&nbsp&nbsp&nbsp&nbsp");
for(let i=0; i<me.length; i++){
    dw(me[i] + " ");
}
br();

// 몇개가 일치하는지 출력
dw(count + "개 일치");
br();

// 등수 출력
if(count == 3){
    dw("5등입니다");
} else if(count == 4) {
    dw("4등입니다.");
} else if(count == 5) {
    dw("3등입니다.");
} else if(count == 6){
    dw("1등입니다.");
}
