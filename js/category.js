function myCategoryID1() {
    if (document.getElementById("catagoryID").value === "") {
        document.getElementById("catagoryID").style.border="1px solid red";
        document.getElementById("errorMess").innerHTML = "Category ID can not be null";
        document.getElementById("errorMess").style.color = "red";
    }
}
function myCategoryID2() {
    document.getElementById("errorMess").innerHTML = "";
    document.getElementById("catagoryID").style.border="";
}
function myCategoryName1() {
    if (document.getElementById("categoryName").value === "") {
        document.getElementById("categoryName").style.border="1px solid red";
        document.getElementById("errorMess1").innerHTML = "Category Name can not be null";
        document.getElementById("errorMess1").style.color = "red";
    }
}
function myCategoryName2() {
    document.getElementById("errorMess1").innerHTML = "";
    document.getElementById("categoryName").style.border="";
}
const addCate = document.querySelector(".addCate");
function checkCate(cateInvalid) {
    if(cateInvalid.includes("cateInvalid")) {
        addCate.click();
    }
}