var random = Math.floor(Math.random() * 100) + 1;

document.write("<div id='cat_flex_row_area'>");
for(var i = 1 ; i <= random ; i++ ) {
    document.write("<div class='cat_flex_box'>");
    document.write("<img class='cat' src='cat.jpg'>");
    document.write("<p class='cat_number'>" + i + "</p>");
    document.write("</div>");
}
document.write("</div>");