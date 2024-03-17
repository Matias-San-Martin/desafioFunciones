pintar = function s(color = 'green') {
    document.getElementById('ele1').style.backgroundColor = color;
}

document.getElementById('ele1').addEventListener('click',function () {
    pintar('yellow');
});


pintar()