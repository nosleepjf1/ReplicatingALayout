
function slide(){
    if(!document.getElementById("slideBlock").className) {
        document.getElementById("slideBlock").style.display = "block";
        document.getElementById("slideBlock").className += "slideAnimation";
        document.getElementById("slideBlock").style.left = "75%";
    }

}

function CloseSlider(){
    document.getElementById("slideBlock").style.display = "none";
    document.getElementById("slideBlock").style.left = "100%";
    document.getElementById("slideBlock").removeAttribute("class");
}