// for(let i=0; i<10; i++){
//     for(let j=9; j>i; j--){
//         document.write("_");
//     }
//     for(let j=0; j<=i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// const star = "☆";
const star = "*";
const space = "_";

// for(var i = 1 ; i <= 10 ; i = i + 1 ){
//     for(var j = 1 ; j <= 10 ; j = j + 1){
//         if(j <= (10 - i) ){   // 9-1 , 8-2
//             document.write(space);
//         } else {
//             document.write(star);
//         }
//     }    
//     document.write("<br>");
// }



/* 방식 2 */

var z = 9;

for(var i=1;i<=10;i=i+1){    
    // 별 한줄 10개 찍고 br(엔터) 하나 넣기 - 시작 //
    for(var j=1;j<=10;j++){
        /*
            _찍기,  별찍기
                                            * 찍는조건  z를 이용한 식으로 변경
                    1 2 3 4 5 6 7 8 9 *     j > 9       j > z;
                    1 2 3 4 5 6 7 8 * *     j > 8
                    1 2 3 4 5 6 7 * * *     j > 7
                    1 2 3 4 5 6 * * * *     j > 6
                    1 2 3 4 5 * * * * *     j > 5
                    1 2 3 4 * * * * * *     j > 4
                    1 2 3 * * * * * * *     j > 3
                    1 2 * * * * * * * *     j > 2
                    1 * * * * * * * * *     j > 1
                    * * * * * * * * * *     j > 0
        */
        if(j > z){
            document.write(star);
        } else {
            document.write(space);
        }
    }
    z = z - 1;  // z 값을 1 감소
    document.write("<br>");
    // 별 한줄 10개 찍고 br(엔터) 하나 넣기 - 끝 //

}

