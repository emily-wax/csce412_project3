
function style_change(){
    var css = document.getElementById("style").href;
    console.log(style.href);
    if(css.match("style1.css")){
        document.getElementById("style").href = "style2.css";
        localStorage.setItem("style", "style2.css");
    } else {
        document.getElementById("style").href = "style1.css";
        localStorage.setItem("style", "style1.css");
    }
}

window.onload = function () {
    if(localStorage.getItem("style") == null) {
        document.getElementById("style").href = "style1.css";
    } else {
        document.getElementById("style").href = localStorage.getItem("style");
    }
}