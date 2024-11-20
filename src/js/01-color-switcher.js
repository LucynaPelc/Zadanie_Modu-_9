function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
       
function changeBackGroundColor () {
    document.body.style.backgroundColor = getRandomHexColor();
    setInterval(changeBackGroundColor, 1000); 

function stopChangeBackGroundColor()  {
    clearInterval(changeBackGroundColor) ;
}}

{/* <button type="button" data-start>Start</button>
    <button type="button" data-stop>Stop</button> */}

    const startButton = document.querySelector('button[data-start]');
        startButton.addEventListener('click', function() {
        startButton.disabled = true;
        document.querySelector('button[data-stop]'); stopButton.disabled = false;
        changeBackGroundColor();
    });   
    const stopButton = document.querySelector('button[data-stop]');
        stopButton.addEventListener('click', function() {         
        stopButton.disabled = true;
        document.querySelector('button[data-start]'); startButton.disabled = false;   
        changeBackGroundColor(); 
    });    
    
