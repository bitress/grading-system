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

    inputElement.addEventListener("change", function(event) {

        console.log(inputValues)
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue)) {
            inputValues.push(newValue);
        }
        updateAverage();
        console.log("Input value changed to: " + newValue);
    });

    form.appendChild(inputElement);
});

function updateAverage() {

    let input_length = inputValues.length;

    let i = 0;
    let sum = 0;
    let average = 0;

    while(i < input_length){
        sum += i;
        i++;
    }

    average = sum / input_length


    averageDisplay.textContent = average;

  
}
