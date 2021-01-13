var sizeObject = {
    "Small": {},
    "Medium": {},
    "Large": {},
    "X-Large": {}
}

window.onload = function(){
    var sizeSel = document.getElementById("size");
    for (var x in this.sizeObject) {
        sizeSel.options[sizeSel.options.length] = new Option(x, x);
      }
}
