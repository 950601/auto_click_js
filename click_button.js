window.alert = function(str){
    return;
}
var confirm=function(){return 1}
var x = document.getElementsByClassName("bt");
var i;
for (i = 0; i < x.length; i++) {
    x[i].click();
}
