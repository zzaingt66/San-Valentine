document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('background-music');

    // Set default volume and loop
    audio.volume = 0.5;
    audio.loop = true;

    audio.play().catch(error => {
        console.log('Autoplay was prevented. User interaction needed.');
    });
});
