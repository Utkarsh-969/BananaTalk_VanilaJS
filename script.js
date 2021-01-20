var inputval = document.querySelector("#translate-input");
var outval = document.querySelector("#translate-output");
var btnclick = document.querySelector("#btn-click");
let serverUrL = "https://api.funtranslations.com/translate/minion.json";

function erroHandler(err){
    alert("URl not working "+err);
}


function getUrl(text)
{
    let encodeUri = encodeURI(text);
    return `${serverUrL}?text=${encodeUri}`;
}

function evenHandel(event){
    fetch(getUrl(inputval.value))
    .then(response=>response.json())
    .then(value => {
        outval.innerText = value.contents.translated
    })
    .catch(erroHandler)
}

btnclick.addEventListener("click",evenHandel);

