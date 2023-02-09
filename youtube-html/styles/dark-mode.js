const paragraphs = document.getElementsByTagName("p")



function lightMode() {
    document.body.style.backgroundColor = "white";
    document.querySelector("#sidebar").style.backgroundColor = "white";
    document.querySelector("#header").style.backgroundColor = "white";
    for (p of paragraphs) {
        p.style.color = "black";
    }
}

function darkMode() {
    document.body.style.backgroundColor = "rgb(18, 18, 18)";
    document.querySelector("#sidebar").style.backgroundColor = "rgb(18, 18, 18)";
    document.querySelector("#header").style.backgroundColor = "rgb(18, 18, 18)";
    for (p of paragraphs) {
        p.style.color = "white";
    }
}

function check() {
    if (document.getElementById("switch").checked == false) {
        lightMode();
    }
    else {
        darkMode();
    }
}
