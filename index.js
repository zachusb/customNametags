
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        var img = document.createElement("img");
        img.onload = function() {
            ctx.drawImage(img, 35, 100, img.width * .8, img.height * .8);
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




var colorThumbails = [
    { fileName: "0.jpg", description: "Gold - Black Text", price: 0 },
    { fileName: "1.jpg", description: "Silver - Black Text", price: 0 },
    { fileName: "2.jpg", description: "Copper - Black Text", price: 0 },
    { fileName: "3.jpg", description: "Pewter - White Text", price: 0 },
    { fileName: "4.jpg", description: "Charcoal - White Text", price: 0 },
    { fileName: "5.jpg", description: "Gold - Green Text", price: 0 },
    { fileName: "6.jpg", description: "Black Marble - White Text", price: 0 },
    { fileName: "7.png", description: "Red Marble - Gold Text", price: 0 },
    { fileName: "8.png", description: "Green Marble - Gold Text", price: 0 },
    { fileName: "9.jpg", description: "Black - Gold Text", price: 0 },
    { fileName: "10.jpg", description: "Black - White Text", price: 0 },
    { fileName: "11.jpg", description: "White - Black Text", price: 0 },
    { fileName: "12.jpg", description: "White - Red Text", price: 0 },
    { fileName: "13.jpg", description: "Whtie - Blue Text", price: 0 },
    { fileName: "14.jpg", description: "White - Green Text", price: 0 },
    { fileName: "15.png", description: "Almond - Black Text", price: 0 },
    { fileName: "16.png", description: "Yellow - Black Text", price: 0 },
    { fileName: "17.png", description: "Brown - White Text", price: 0 },
    { fileName: "18.png", description: "Blue - White Text", price: 0 },
    { fileName: "19.png", description: "Burgundy - White Text", price: 0 },
    { fileName: "20.png", description: "Green - White Text", price: 0 },
    { fileName: "21.png", description: "Red - White Text", price: 0 },
    { fileName: "22.png", description: "Teal - White Text", price: 0 },
];

var backingThumbails = [
    { fileName: "0.jpg", description: "No Backing", price: 0 },
    { fileName: "1.jpg", description: "Adhesive Tape", price: 0 },
    { fileName: "2.jpg", description: "Fabric Pins", price: 2 },
    { fileName: "3.jpg", description: "Velcro", price: 2.5 },
    { fileName: "4.jpg", description: "Cubicle Hanger", price: 3.5 },
];

function getImages(folder, parentClass, imageArray){
    var parent = document.getElementById(parentClass);
    imageArray.forEach(element => {
        var thumbnail = document.createElement("img");
        thumbnail.width = 80;
        thumbnail.src = 'images/' + folder + '/' + element.fileName;
        parent.appendChild(thumbnail);
        thumbnail.classList.add('m-2');
        thumbnail.classList.add('color-thumbnail');
        thumbnail.setAttribute('data-bs-toggle', 'tooltip');
        thumbnail.setAttribute('data-bs-placement', 'bottom');
        if(element.price > 0){
            thumbnail.setAttribute('data-bs-title', element.description + " $" + element.price);
        }
        else{
            thumbnail.setAttribute('data-bs-title', element.description);
        }
    });
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

}

getImages('colorTabs', 'color-selection', colorThumbails);
getImages('backings', 'backing-selection', backingThumbails);

var customizeButton = document.getElementById("customize-button");
var engravingButton = document.getElementById("engraving-button");
var customizeTab = document.getElementById("customize-tab");
var engravingTab = document.getElementById("engraving-tab");
customizeButton.addEventListener("click", function(){
    customizeButton.classList.add('btn-tab-active');
    engravingButton.classList.remove('btn-tab-active');
    customizeTab.classList.add('visible');
    customizeTab.classList.remove('hidden');
    engravingTab.classList.add('hidden');
    engravingTab.classList.remove('visible');
});

engravingButton.addEventListener("click", function(){
    customizeButton.classList.remove('btn-tab-active');
    engravingButton.classList.add('btn-tab-active');
    customizeTab.classList.add('hidden');
    customizeTab.classList.remove('visible');
    engravingTab.classList.add('visible');
    engravingTab.classList.remove('hidden');
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all dropdown buttons
    var dropdownButtons = document.querySelectorAll('.dropdown-toggle');
  
    dropdownButtons.forEach(function(dropdownButton) {
      // Find the dropdown menu related to this button
      var dropdownMenu = dropdownButton.nextElementSibling;
  
      // Set click event for each dropdown button to toggle animation
      dropdownButton.addEventListener('click', function() {
        if (!dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.add('show');
          setTimeout(function() {
            dropdownMenu.classList.remove('show');
          }, 500); // Match the duration of the CSS transition
        }
      });
  
      // Find all dropdown items within this dropdown
      var dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
          // Get the text of the clicked item
          var selectedItemText = this.textContent;
  
          // Update the dropdown button text
          dropdownButton.textContent = selectedItemText;
  
          // Manually hide the dropdown menu (useful for Bootstrap 5)
          dropdownMenu.classList.remove('show');
        });
      });
    });
});

var topLine = document.getElementById("top-line");
topLine.addEventListener("input", function(){
    
});