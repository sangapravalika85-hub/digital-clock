function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    // Add 0 before single digit numbers

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");


    // Create time format

    const currentTime = hours + ":" + minutes + ":" + seconds;


    // Display time

    document.getElementById("clock").textContent = currentTime;
}


// Update clock every second

setInterval(updateClock, 1000);


// Run immediately

updateClock();