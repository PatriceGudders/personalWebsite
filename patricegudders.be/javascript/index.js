// Functies die worden uitgevoerd bij het openen en sluiten van "credits"
function openCredits() {
    document.getElementById("sec_credits").style.transform = "translateX(0%)"; //Credits schuift rechts in beeld over homepage
    document.getElementById("sec_credits").style.transitionDuration = "2s";
}

function sluitCredits() {
    document.getElementById("sec_credits").style.transform = "translateX(100%)"; //Credits schuift rechts uit beeld
    document.getElementById("sec_credits").style.transitionDuration = "2s";
}

function vervaagHomepage() {
    document.getElementById("homepage").style.opacity = "0.6"; //Homepage wordt vervaagd
    document.getElementById("sec_credits").style.opacity = "1"; //Credits blijft helder
}

function resetHomepage() {
    document.getElementById("homepage").style.opacity = "1"; //Homepage terug helder
    document.getElementById("hoofding").style.opacity = "0.9"; //Header terugzetten op licht doorzichtbaar
}



// Functie voor fade-in/out van elements tijdens scrollen
function weergave() {
    var weergave = document.querySelectorAll(".weergave");
    for (var i = 0; i < weergave.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = weergave[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            weergave[i].classList.add("actief");
        } else {
            weergave[i].classList.remove("actief");
        }
    }
}

window.addEventListener("scroll", weergave);

// Scrolpositie nagaan bij laden pagina
weergave();




/* Onvolledige code om eventueel tijdens scrollen geleidelijk header van border te verdikken volgens plaats op pagina
function verdikBorderHeader() {
    document.getElementById("hoofding").style.borderBottomWidth = "2px";
}
*/