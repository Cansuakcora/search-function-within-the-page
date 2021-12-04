//! BROWSER CHECK //!
// window.onload = function () {

//     var ua = window.navigator.userAgent;
//     var msie = ua.indexOf("MSIE");

//     if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
//     {
//         document.querySelector(".footer").classList.remove("flex-row-center");
//     }
// }
//! BROWSER CHECK //!



//***********************/ search button ***************//
function myFunction() {
    // Declare variables
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector(".myUL");
    li = ul.getElementsByClassName('myli');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//********************** */ search button ***************//