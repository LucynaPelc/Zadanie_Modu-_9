
    function getRandomHexColor() {  
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    
    let intervalId;
    
    function changeBackGroundColor() {  
        document.body.style.backgroundColor = getRandomHexColor();
    }
    
    function startChangingColor() {
        intervalId = setInterval(changeBackGroundColor, 1000);
    }
    
    function stopChangingColor() {
        clearInterval(intervalId);
    }
    
    const startButton = document.querySelector('button[data-start]');
    const stopButton = document.querySelector('button[data-stop]');
    
    startButton.addEventListener('click', function() {
        startButton.disabled = true;
        stopButton.disabled = false;
        startChangingColor();
    });
    
    stopButton.addEventListener('click', function() {
        stopButton.disabled = true;
        startButton.disabled = false;
        stopChangingColor();
    });