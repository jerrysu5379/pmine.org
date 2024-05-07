function recalcheight(event) { 
    // console.log(event.target) 
    var textField = event.target;
    if (textField.tagName.toLowerCase() == "textarea") {
        alloc(textField);
    }
}

function alloc() {
    let textFields = document.querySelectorAll("textarea");
    textFields.forEach(function (textField) {
        textField.style.height = "1px";
        textField.style.height = (textField.scrollHeight + 10) + "px"; 
    });
} 

document.addEventListener("input", recalcheight); 
