const button = document.querySelector(".button");
button.style.fontSize = "24px";
button.style.textAlign = "center";
console.log(button.style);



function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
       
function changeBackGroundColor () {

    document.body.style.backgroundColour = getRandomHexColor();
    setTimeout(changeBackGroundColor, 1000);
    console.log(changeBackGroundColor);
}

{/* <button type="button" data-start>Start</button>
    <button type="button" data-stop>Stop</button> */}

    const startButton = document.querySelector('button[data-start="start"]');
        button.addIventListener('click', function() {
        this.disabled = true;
        document.querySelector('button[data-stop="stop"]'); disabled = false;
        changeBackGroundColor();
    });   
console.log(startButton.dataset.start);
  
    const stopButton = document.querySelector('button[data-stop="staop"]');
        button.addIventListener('click', function() {
        this.disabled = true;
        document.querySelector('button[data-start="start"]'); disabled = false;
        changeBackGroundColor();
    });   
console.log(stopButton.dataset.stop);
    
