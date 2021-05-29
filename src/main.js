
const makeBold = () => {
   document.getElementById("text-area").style.fontWeight = "bold";
}

const makeItalic = () => {
   document.getElementById("text-area").style.fontStyle = "italic";
}

const makeUpper = () => {
   document.getElementById("text-area").style.textTransform = "uppercase";
}

const makeLower = () => {
   document.getElementById("text-area").style.textTransform = "lowercase";
}

const capitalizeIt = () => {
   document.getElementById("text-area").style.textTransform = "capitalize";
}

const alignLeft = () => {
   document.getElementById("text-area").style.textAlign = "left";
}

const alignRight = () => {
   document.getElementById("text-area").style.textAlign = "right";
}

const alignCenter = () => {
   document.getElementById("text-area").style.textAlign = "center";
}

const justifyText = () => {
   document.getElementById("text-area").style.textAlign = "justify";
}

const resetStyle = () => {
   document.getElementById("text-area").style.fontWeight = "normal";
   document.getElementById("text-area").style.fontStyle = "normal";
   document.getElementById("text-area").style.textAlign = "left";
   document.getElementById("text-area").style.textTransform = "lowercase";
}

const removeAllText = () => {
   document.getElementById("text-area").value = "";
}