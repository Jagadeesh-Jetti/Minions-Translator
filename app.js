var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");


var server = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return server + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("server error has occured, please try again after 10 min")
}


function clickHandler() {
    var inputText = txtInput.value; 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText; 
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)