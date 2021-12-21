let ran = Math.floor(Math.random() * 10) + 1;

document.write("랜덤값: " + ran + "<br>");

for(let i=1; i<11; i++){
    if(i == ran){
        break;
    }
    document.write(i + " ");   
}