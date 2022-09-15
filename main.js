var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult() = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "Take My Selfie"){
        console.log("Taking Selfie for collage---")
        speak();
    }
}