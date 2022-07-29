function myFieldID1() {
    if (document.getElementById("fieldID").value === "") {
        document.getElementById("fieldID").style.border="1px solid red";
        document.getElementById("errorMessField").innerHTML = "Field ID can not be null";
        document.getElementById("errorMessField").style.color = "red";
    }
}
function myFieldID2() {
    document.getElementById("errorMessFieldName").innerHTML = "";
    document.getElementById("fieldID").style.border="";
}

function myFieldName1() {
    if (document.getElementById("fieldName").value === "") {
        document.getElementById("fieldName").style.border="1px solid red";
        document.getElementById("errorMessFieldName").innerHTML = "Field Name can not be null";
        document.getElementById("errorMessFieldName").style.color = "red";
    }
}
function myFieldName2() {
    document.getElementById("errorMessFieldName").innerHTML = "";
    document.getElementById("fieldName").style.border="";
}


const addField = document.querySelector(".addField");
function checkField(fieldInvalid) {
    if(fieldInvalid.includes("fieldInvalid")) {
        addField.click();
    }
}
