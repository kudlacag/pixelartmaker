// declalre color 
let color;
// table 
let table = document.querySelector('#pixelCanvas');
// form id to connet the javascript
let sizePicker = document.querySelector('#sizePicker');
// Select width and height values from index.html
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

// pasing the height and width to the function
  makeGrid(height, width);

// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function (evt) {
    // preventing the default behave
    evt.preventDefault();
 
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove();
    makeGrid(height, width);
  
});


// gridmaker function

function makeGrid(height, width) {

// looping through height to make rows
for(let i = 0; i <= height; i++){
 let = row = table.insertRow(i);
   

//  nested loop for width to get column 
for(let x = 0; x <= width; x++){
 let cell = row.insertCell(x);
//  making the eventlistner adding to tr to make bgColor for boxes
 cell.addEventListener('click', function (e) {
 
  // color value 
  color = document.getElementById('colorPicker').value;
   cell.style.backgroundColor = color;

 });
}

}

}


