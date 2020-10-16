
const grid = document.querySelector('#grid-div');
const rainbow = document.querySelector('#rainbow');
const shading = document.querySelector('#shading');
const colorpicker = document.querySelector('#colorpicker');
let colors = [];
let selectedColor = "rgb(56,56,56)";
///// create grid //////

const addForm = document.forms['add-grid'];
addForm.addEventListener('submit', function(e){
	e.preventDefault();
	grid.innerHTML = '';

	const value = addForm.querySelector('input[type="text"]').value;
	
	if (value !== "" && value > 0 && value <= 50) {

		//set grid layout
		grid.style.setProperty('grid-template-columns', 'repeat(' + value + ', 1fr)');
		boxLength = 460 / value;
		//create elements
		for (var i = 0; i < value*value; i++)
		{
			const box = document.createElement('div');
			box.style.width = boxLength + "px";
			box.style.height = boxLength + "px";

			//add classes
			box.classList.add('box');

			//append to dom
			grid.appendChild(box);
		}
		hoverBoxes();
	}

	addForm.reset();


});


function hoverBoxes() {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach(function(box){
		var shade = 0.2;
		box.addEventListener('mouseover', function(e) {
			box.style.backgroundColor = selectedColor;


			if (rainbow.checked) {
				for (let i = 0; i < 3; i++)
				{
					colors[i] = Math.floor(Math.random() * 256); 
				};
				box.style.backgroundColor = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
			}
			 if (shading.checked)
			{
				// box.style.backgroundColor = "rgba(56,56,56," + shade + ")";
				box.style.backgroundColor = box.style.backgroundColor.slice(0, -1) + "," + shade + ")";
				shade += 0.2;
			}	
		});
}


function update(picker) {
	selectedColor = picker.toRGBString();
}