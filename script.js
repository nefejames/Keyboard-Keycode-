window.addEventListener("keydown", getKeyCode);

function getKeyCode(e){
    console.log(e.key);
    console.log(e);
    const keyCodes = e.keyCode;
    const key = e.key;
    const h3 = document.getElementById("keyCode");
    const keyPressed = document.getElementById("keyPressed");

    h3.textContent = keyCodes;
    keyPressed.textContent = key;

}