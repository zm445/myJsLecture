var screenMessageBox;
var screenPlayerInfo;
var screenMonsterInfo;
var screenTurn;

var orc = new Monster("오크전사", 100, 10);
var elf = new Character("엠피스", 200, 30);

window.onload = function () {
    screenMessageBox = document.getElementById("screen_message_box");
    screenPlayerInfo = document.getElementById("screen_player_info");
    screenMonsterInfo = document.getElementById("screen_monster_info");
    screenTurn = document.getElementById("screen_turn");

    displayCharactersInfo();
    
    tv("전투 시작\n");
}




