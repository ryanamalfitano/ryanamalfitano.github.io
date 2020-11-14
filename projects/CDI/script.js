// Build model list.
var modelList = [];
modelList["audi"] = ["TT RS", "RS 7", "A6 allroad"];
modelList["bmw"] = ["X4", "330e", "650 Gran Coupe"];
modelList["infiniti"] = ["Q50", "QX80", "Q70L"];
modelList["mercedesbenz"] = ["ML (All Wheel Drive)", "AMG C 43", "AMG CLA 35"];
modelList["subaru"] = ["WRX", "Impreza", "Legacy"];
modelList["volkswagen"] = ["Golf 2.5l", "Beetle", "Jetta"];
modelList["volvo"] = ["V40 Cross Country", "S60 Hybrid", "XC90"];

// Do this when the page is ready.
window.onload = function () {
    // Add mobile menu click listener to the menu button.
    document.querySelector("body > header > div > button.menu > a").addEventListener("click", toggleMenu);

    // Add change listener to search form's make field to enable the model field.
    var makeField = document.querySelector("#form-search-make");
    makeField.addEventListener("change", function() {populateModelList(makeField.value)});

    // Reset the search form.
    let searchInputs = document.querySelectorAll("#form-search select");
    for (let i = 0; i < searchInputs.length; i++)
        searchInputs[i].selectedIndex = 0;
    // Make sure the model field is disabled again.
    document.querySelector("#form-search-model").setAttribute("disabled", "");
}

// Function to create model list options and update the model field.
function populateModelList(make) {
    let modelField = document.querySelector("#form-search-model");
    modelField.removeAttribute("disabled")
    let modelOptions = "<option selected disabled>Select Model</option>";
    for (let i = 0; i < modelList[make].length; i++) {
        modelOptions += "<option value='" + modelList[make][i] + "'>" + modelList[make][i] + "</option>";
    }

    modelField.innerHTML = modelOptions;
}

// Function to toggle the mobile menu.
function toggleMenu(e) {
    e.preventDefault();
    let menu = document.querySelector("body > header > div > ul");
    menu.classList.toggle("active");
}