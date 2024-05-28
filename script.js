let image = document.getElementById("signallight");
let image2 = document.getElementById("signallight2");
let images = ["assets/images/red_light.svg", "assets/images/green_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg"];
let images2 = ["assets/images/green_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg"];
let signal = document.getElementById("signal");
let signal2 = document.getElementById("signal2");
let trafficLights = ["assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/green_light.svg"];
let trafficLights2 = ["assets/images/red_light.svg", "assets/images/red_light.svg", "assets/images/green_light.svg", "assets/images/red_light.svg"];
stopCar()
let i = 0;
function updateImage() {
    image.src = images[i];
    image2.src = images2[i];
    signal.src = trafficLights[i];
    signal2.src = trafficLights2[i];
    i = (i + 1) % images.length;

    if ((image.src.endsWith("assets/images/red_light.svg"))) {
        stopCar();
    }

    if ((image.src.endsWith("assets/images/green_light.svg"))) {
        startAnimation()
    }
    else if ((image2.src.endsWith("assets/images/green_light.svg"))) {
        startAnimation1()
    }
    else if ((signal.src.endsWith("assets/images/green_light.svg"))) {
        startAnimation3()
    }
    else if ((signal2.src.endsWith("assets/images/green_light.svg"))) {
        startAnimation2()
    }
};

setInterval(updateImage, 3000);

function startAnimation() {
    car.style.animationPlayState = "running";
    car2.style.animationPlayState = "paused";
    policeCar.style.animationPlayState = "paused";
    carBrown.style.animationPlayState = "paused";
}
function startAnimation1() {
    car.style.animationPlayState = "paused";
    car2.style.animationPlayState = "running";
    policeCar.style.animationPlayState = "paused";
    carBrown.style.animationPlayState = "paused";
}
function startAnimation2() {
    car.style.animationPlayState = "paused";
    car2.style.animationPlayState = "paused";
    policeCar.style.animationPlayState = "running";
    carBrown.style.animationPlayState = "paused";
}
function startAnimation3() {
    car.style.animationPlayState = "paused";
    car2.style.animationPlayState = "paused";
    policeCar.style.animationPlayState = "paused";
    carBrown.style.animationPlayState = "running";
}
function stopCar() {
    car.style.animationPlayState = "paused";
    car2.style.animationPlayState = "paused";
    policeCar.style.animationPlayState = "paused";
    carBrown.style.animationPlayState = "paused";
}