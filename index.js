function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        var img = document.createElement("img");
        img.onload = function() {
            ctx.drawImage(img, 100, 50, img.width / 4, img.height / 4);
        };
        img.src = 'images/gold.png'; 
        ctx.font = "48px serif";
        ctx.fillText("Hello world", 10, 50);
        //img.height = 10;
    }
}
window.addEventListener("load", draw);

function resizeCanvas() {
    var canvas = document.getElementById('canvas');
    var width = canvas.parentElement.offsetWidth; // Get the width of the canvas's parent element (the column)

    canvas.width = width;
    //canvas.height = 400;
}
  
// Resize the canvas when the window is resized
window.addEventListener('resize', resizeCanvas);

// Resize the canvas when the document is fully loaded
document.addEventListener('DOMContentLoaded', resizeCanvas);
  