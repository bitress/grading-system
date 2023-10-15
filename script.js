let addSubjectButton = document.getElementById("add_subject_button");
let inputValues = [];
let averageDisplay = document.getElementById("average");  

addSubjectButton.addEventListener("click", function(){
    let form = document.getElementById("grade_form");

    let inputElement = document.createElement("input");
    inputElement.type = "number";
    inputElement.className = "grade_input";
    inputElement.value = 0;
    inputElement.placeholder = "Enter a grade";

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove Subject";


    inputElement.addEventListener("change", function(event) {
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue)) {
            // Find the index of the current input element in the form
            const index = Array.from(form.children).indexOf(event.target);
            if (index !== -1) {
                inputValues[index] = newValue; // Update the value in the array
            }
        }
        updateAverage();
    });

    form.appendChild(inputElement);
});

function updateAverage() {
    let input_length = inputValues.length;

    let i = 0;
    let sum = 0;
    let average = 0;

    while (i < input_length){
        sum += inputValues[i];
        i++;
    }

    average = sum / input_length;

    averageDisplay.textContent = average;
}
