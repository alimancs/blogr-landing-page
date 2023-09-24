const ButtonState = {
    connect:["off", "rotate"],
    hamMenu:["off", "change", "icon-close.svg", "icon-hamburger.svg"],
}
function displayElement(button, element, displaytype, icon) {
    const item = document.querySelector(element);
    const theicon = document.querySelector(icon);
    if (ButtonState[button][0]==="off") {
        item.style.display = displaytype;
        ButtonState[button][0] = "on";
        if(ButtonState[button][1]==="rotate") {
            theicon.style.rotate = "180deg";
        } else if (ButtonState[button][1]==="change") {
            theicon.src = ButtonState[button][2];
        }
    } else if (ButtonState[button][0]==="on") {
        item.style.display = "none";
        ButtonState[button][0] = "off";
        if(ButtonState[button][1]==="rotate") {
            theicon.style.rotate = "360deg";
        } else if (ButtonState[button][1]==="change") {
            theicon.src = ButtonState[button][3];
        }
    }
}