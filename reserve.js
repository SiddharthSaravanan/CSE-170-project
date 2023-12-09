
let ddoptions = ["Dumbbell","Barbell","Treadmill"];
let oppadding = ["16px 307px 16px 16px","16px 333.5px 16px 16px","16px 313.5px 16px 16px"];
let item_sel= false;

function dropdownActivate() {
    document.getElementById("mydd").classList.toggle("show");
    if (document.getElementById("arr").innerHTML=="expand_more"){
        document.getElementById("arr").innerHTML = "expand_less";
    }
    else{
        document.getElementById("arr").innerHTML = "expand_more";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dbtn')) {
        let dds = document.getElementsByClassName("dd-content");
        let i;
        for (i = 0; i < dds.length; i++) {
            let opendd = dds[i];
            if (opendd.classList.contains('show')) {
                opendd.classList.remove('show');
                document.getElementById("arr").innerHTML = "expand_more";
            }
        }
    }
}

function changeField(i){
    let elt = document.getElementsByClassName("dbtn")[0]
    elt.innerHTML = ddoptions[i];
    elt.style.padding = oppadding[i];
    item_sel=true;
}

function confirmPopUp(){
    if (item_sel==false){
        alert("Please select the equipment type.");
        return;
    }
    if (checkDate()==false){
        alert("Please enter a date.");
        return;
    }
    window.confirm("Your Reservation\nHas Been Confirmed!");
    let elt = document.getElementById("newres");
    elt.style.display = "block";
}

function showAvlbTimes(){
    console.log("here");
    let arr = document.getElementsByClassName("avlb-times");
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        console.log(i);
        arr[i].style.display = "block";
    }
    console.log("here2");
}

function checkDate(){
    let date_elt = document.getElementById("date_").value;
    return (date_elt !== "");
}

function highlight(i){
    let elt = document.getElementsByClassName("timebtn")[i];
    elt.style.backgroundColor = "#2274a5";
    elt = document.getElementsByClassName("timebtn")[1-i];
    elt.style.backgroundColor = "#d9d9d9";
}
