var speechrecognition = window.webkitSpeechRecognition ;
var recognition = new speechrecognition ;
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie");
        speak();   
    }

}

function speak(){
    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5s";
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
    takesnapshot();
    save();
     },5000);
}
camera = document.getElementById("camera"); 
Webcam.set({ 
    width:360, 
    height:250, 
    image_format : 'png', 
    png_quality:90 });


function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image");
    link.href = image;
    link.click();

}