let num = 0;

while(100 != num){
    num = prompt("숫자를 입력하세요 : ");
    num = parseInt(num);

    if(100 != num){
        document.write(num);
    }
}
