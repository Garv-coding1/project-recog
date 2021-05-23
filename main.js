function setup () {
    canvas = createCanvas(300,300);
    canvas.position(620, 350);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/n60OTK43j/model.json", modelLoaded);
}

function draw () {
image(video, 0, 0, 300, 300);
classifier.classify(video,gotResult);
}

function modelLoaded () {
    console.log("The model has been initialized.");
}

function gotResult (error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("name_result_tag").innerHTML = results[0].label;
        multiply = results[0].confidence*100;
        decimal = multiply.toFixed(1) + "%";
        document.getElementById("object_accuracy_tag").innerHTML = decimal;
    }
}