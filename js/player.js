// Canvas that will use the Anime4K lib to upscale the video to 4K
function toggleCanvas() {
    const canvas = document.querySelector('canvas');
    canvas.style.display = canvas.style.display === 'none' ? '' : 'none';
    const button = document.querySelector('button');
    button.textContent = canvas.style.display === 'none' ? 'Enable Anime4K' : 'Disable Anime4K';
}

// Function to select video from html
function onSelectFile(filePath) {
    fetch(filePath)
        .then(response => response.blob())
        .then(blob => {
            var reader = new FileReader();
            reader.onload = function (e) {
                let src = e.target.result;
                changeVideo(src);
            };
            reader.readAsDataURL(blob);
        });
}

// Function to change video source
function changeVideo(src) {
    const player0 = document.getElementById('player0');
    player0.src = src;
    player0.play();
}