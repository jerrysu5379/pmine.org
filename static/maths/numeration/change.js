var isValueSelected = false;
var digit = 0;
var rawNumber = "0";
var number = 0;

var char2 = ["0", "1"]
var char3 = ["0", "1", "2"]
var char8 = ["0", "1", "2", "3", "4", "5", "6", "7"]
var char10 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var char16 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
var char32 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"]

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("digit").addEventListener("input", changeDigit);
    document.getElementById("num").addEventListener("input", changeNumber);
})

function changeDigit() {
    digit = document.getElementById("digit").value
    if (digit == 0) {
        isValueSelected = false;
    } else {
        isValueSelected = true;
    }
    change();
}

function changeNumber() {
    rawNumberBefore = document.getElementById("num").value;
    rawNumberBefore = rawNumberBefore.toUpperCase();
    for (let i = 0; i < rawNumberBefore.length; i++) {
        if (!char32.slice(0, digit).includes(rawNumberBefore[i]) && (rawNumberBefore[i] != ".") && !(i == 0 && rawNumberBefore[i] == "-")) {
            rawNumberBefore = rawNumberBefore.slice(0, i) + rawNumberBefore.slice(i + 1);
            i--; 
            console.log(rawNumberBefore) 
        }
    }
    rawNumber = rawNumberBefore;
    document.getElementById("num").value = rawNumberBefore;
    if (rawNumber == "") {
        rawNumber == 0
    }
    change();
}

function change() {
    digit = document.getElementById("digit").value;
    out = document.getElementById("digitout").value;
    number = document.getElementById("num").value;
    fetch(`https://api.pmine.org/num/change/${number}/${digit}/${out}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status == 0) {
                var result = data.number; 
                console.log(document.getElementById("result")) 
                document.getElementById("result").innerHTML = result
            } else { 
                document.getElementById("result").innerHTML = "number error, error code: " + data.status 
            }
        })
} 
