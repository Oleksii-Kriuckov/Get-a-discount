let button = document.querySelector("button");
let widthElem = parseInt(window.getComputedStyle(button)["width"]);
let heightElem = parseInt(window.getComputedStyle(button)["height"]);
let widthWindow = innerWidth, heightWindow = innerHeight, paramLeft, paramTop, counterX = 0, counterY = 0;

button.onmouseover = function (e) {
    paramLeft = parseInt(window.getComputedStyle(button)["left"]);
    paramTop = parseInt(window.getComputedStyle(button)["top"]);

    const moveX = (x) => {
        button.style.left = e.pageX + x +"px";
    }
    const moveY = (y) => {
        button.style.top = e.pageY + y +"px";
    }

    if (e.offsetX<widthElem/2) {
        if (e.pageX<(widthWindow-(widthElem+50))) {
            moveX(50);
        } else {
            moveX(-(widthElem+50));
        }
    } else if (e.offsetX>widthElem/2) {
        if (e.pageX>(widthElem+50)) {
            moveX(-(widthElem +50));
        } else {
            moveX(50);
        }   
    }

    if (e.offsetY<heightElem/2) {
        if (e.pageY<heightWindow-(heightElem+50)) {
            moveY(50);
        } else {
            moveY(-(heightElem+50));
        }
    } else if (e.offsetY>heightElem/2) {
        if (e.pageY>(heightElem+50)) {
            moveY(-(heightElem+50))
        } else {
            moveY(50);
        }
        
    }
}