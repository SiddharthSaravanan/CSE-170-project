/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let ddoptions = ["Dumbell","Barbell","Treadmill"];
let oppadding = ["16px 319px 16px 16px","16px 333.5px 16px 16px","16px 313.5px 16px 16px"];

function dropdownActivate() {
    document.getElementById("mydd").classList.toggle("show");
    if (document.getElementById("arr").innerHTML=="expand_more"){
        document.getElementById("arr").innerHTML = "expand_less";
    }
    else{
        document.getElementById("arr").innerHTML = "expand_more";
    }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dbtn')) {
        let dropdowns = document.getElementsByClassName("dd-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document.getElementById("arr").innerHTML = "expand_more";
            }
        }
    }
}

function changeField(i){
    let elt = document.getElementsByClassName("dbtn")[0]
    elt.innerHTML = ddoptions[i];
    elt.style.padding = oppadding[i];
}

function confirmPopUp(){
    window.confirm("Your Reservation\nHas Been Confirmed!");
    let elt = document.getElementById("newres");
    elt.style.display = "block";
}