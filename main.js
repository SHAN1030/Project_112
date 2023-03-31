function check()
{
    image = document.getElementById("Captured_image");
    classifier.classify(image,gotresult);
    
}

Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
    });

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById('result').innerHTML = '<img id = "Captured_image" src = "'+data_uri+'">';
    });
    }
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1 = "The prediction is " + prediction_1;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Ky6ABJJhe/model.json",modelReady);  
function modelReady(){
        console.log("MODEL IS LOADED!!");
    }
    function gotresult(error,result){
        if(error){
            console.log(error);
        }
        else{
            console.log(result);
            document.getElementById("gesture_emotion_name").innerHTML = result[0].label;
            prediction_1 = result[0].label;
            speak();
            if(result[0].label == "BEST"){
                document.getElementById("update_gesture").innerHTML = "&#128077;";
            }
            if(result[0].label == "BAD"){
                document.getElementById("update_gesture").innerHTML = "&#128078;";
            }
            if(result[0].label == "STOP"){
                document.getElementById("update_gesture").innerHTML = "&#9995;";
            }
            if(result[0].label == "VICTORY"){
                document.getElementById("update_gesture").innerHTML = "&#9996;";
            }
            if(result[0].label == "AMAZING"){
                document.getElementById("update_gesture").innerHTML = "&#128076;";
            }   
        }
    }
    