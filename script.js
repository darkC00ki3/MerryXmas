function displayIP(ipData) {
    const ip = ipData.ip;
    const locationDiv = document.getElementById("location");
    const greetingDiv = document.getElementById("greeting");

    // Add a hacking sound effect for added impact
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();

    // Simulate some glitch text animation
    if (locationDiv && greetingDiv) {
        locationDiv.innerHTML = `You are visiting from IP Address: <a href="https://ipinfo.io/${ip}" target="_blank" style="color: #00ff00;">${ip}</a>`;
        greetingDiv.innerHTML = "Merry Christmas!";
        
        // Trigger a 'glitch' animation on the greeting
        greetingDiv.classList.add("glitch");
        
        // Add the virus flicker effect
        greetingDiv.classList.add("virus-effect");
        locationDiv.classList.add("virus-effect");

        // Add a Christmas snowfall effect
        createSnowfallEffect();
    }
}

function errorHandler(error) {
    const locationDiv = document.getElementById("location");
    
    if (locationDiv) {
        locationDiv.innerHTML = "Sorry, we couldn't fetch your IP address.";
    }

    // Log the error for debugging purposes
    console.error("Error fetching IP address:", error);
}

// Get the user's IP address using an external API
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(displayIP)
    .catch(errorHandler);

// Matrix-like effect
function createMatrixEffect() {
    const matrixBackground = document.createElement("div");
    matrixBackground.classList.add("matrix-background");
    document.body.appendChild(matrixBackground);

    for (let i = 0; i < 100; i++) {
        const matrix = document.createElement("div");
        matrix.classList.add("matrix");
        matrix.innerText = Math.random().toString(36).substring(2, 7);
        matrix.style.left = `${Math.random() * 100}%`;
        matrix.style.animationDuration = `${Math.random() * 10 + 5}s`;
        matrixBackground.appendChild(matrix);
    }
}

// Christmas Snowfall Effect
function createSnowfallEffect() {
    const snowflakes = 50;
    for (let i = 0; i < snowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(snowflake);
    }
}

// Call the matrix effect function on load
createMatrixEffect();

// Add static noise background
function addStaticNoise() {
    const staticBackground = document.createElement('div');
    staticBackground.classList.add('static-background');
    document.body.appendChild(staticBackground);
}

addStaticNoise();

// Add terminal-like input
function createTerminalInput() {
    const terminal = document.createElement('div');
    terminal.style.fontFamily = 'monospace';
    terminal.style.color = '#00ff00';
    terminal.style.position = 'absolute';
    terminal.style.bottom = '20px';
    terminal.style.left = '20px';
    document.body.appendChild(terminal);

    const commands = ['chrome history', 'cat password.txt', 'ping google.com','site visited','saved password'];
    setInterval(() => {
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        terminal.innerHTML = `<span>${randomCommand}</span>`;
    }, 2000);
}

createTerminalInput();


// Show file transfer message with hacking effect
function showFileTransferMessage() {
    const message = document.createElement("div");
    message.classList.add("transfer-message");
    message.innerHTML = "All files successfully transferred!";
    document.body.appendChild(message);

    // Apply virus effect for added realism
    message.classList.add("virus-effect");

    // Remove the message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000); // Removes the message after 5 seconds
}


// Call this function after the IP display and snowfall effect are ready
setTimeout(showFileTransferMessage, 3000); // Show after 3 seconds
// Show loading bar before showing file transfer message
function showLoadingBar() {
    const loadingBarDiv = document.createElement("div");
    loadingBarDiv.classList.add("loading-bar");
    document.body.appendChild(loadingBarDiv);

    // Simulate the hacker-style fast loading
    setTimeout(() => {
        loadingBarDiv.style.width = "100%"; // Fill the bar quickly
    }, 0); // Instant increase to simulate fast loading

    // Show the success message after loading is done
    setTimeout(() => {
        loadingBarDiv.remove();
        showFileTransferMessage(); // Call the message after the loading bar disappears
    }, 2000); // Loading bar lasts for 2 seconds
}

// Show the file transfer success message
function showFileTransferMessage() {
    const message = document.createElement("div");
    message.classList.add("transfer-message");
    message.innerHTML = "All files successfully transferred!";
    document.body.appendChild(message);

    // Apply virus effect for added realism
    message.classList.add("virus-effect");
}

// Call the loading bar function and file transfer message after 1 second
setTimeout(showLoadingBar, 1000); // Show after 1 second delay
