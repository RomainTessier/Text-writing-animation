function main(){
    textEffect("ispsum lorem dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");
}

main();

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

async function textEffect(text){
    const root = document.getElementById("home");
    let currentText = '';
    const textComponent = document.createElement("p");
    const square = document.createElement("span");
    square.classList.add("square");

    for(let i = 0; i < text.length; i++){

        textComponent.textContent = currentText + text[i];
        
        root.appendChild(textComponent);
        currentText += text[i];

        await sleep(10);
    }
    textComponent.appendChild(square);
}