console.log('Loaded!');

//Change the text of main-text
var element = document.getElementById('main-text');

element.innerHTML = "New Value";

//move the image
var img = document.getElementById('madi');
img.onClick = function () {
    madi.style.marginLeft = '100px';
};