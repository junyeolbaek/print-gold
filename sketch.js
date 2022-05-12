//gold.

let value;
let img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11;
let img;

function preload() {
  img1 = loadImage("gold1.jpg");
  img2 = loadImage("gold2.jpg");
  img3 = loadImage("gold3.jpg");
  img4 = loadImage("gold4.jpg");
  img5 = loadImage("gold5.jpg");
  img6 = loadImage("gold6.jpg");
  img7 = loadImage("gold7.jpg");
  img8 = loadImage("gold8.jpg");
  img9 = loadImage("gold9.jpg");
  img10 = loadImage("gold10.jpg");
  img11 = loadImage("gold11.jpg");
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  img = img1;
  
  //DeviceOrientationEvent, DeviceMotionEvent
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    //ios 13 device
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        let button = createButton("click to access! <br> and refresh the page <br> and shake it");
        button.style('font-size', '36px');
        button.mousePressed(requsetAccess);
        button.center();
        throw error;
      })
      .then(() => {
        // on any subsequent visits
        permissionGranted = true;
      });
  } else {
    //non ios 13 device
    textSize(48);
    // text("non ios 13 device", 100, 100);
    permissionGranted = true;
  }
}


function requsetAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove();
}

function requsetAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove();
}

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
    if (!permissionGranted) {
    return;
  }
  if(value == 1){
    img = img1;
  }else if (value == 2){
    img = img2;
  }else if (value == 3){
    img = img3;
  }
  else if (value == 4){
    img = img4;
  }
  else if (value == 5){
    img = img5;
  }
  else if (value == 6){
    img = img6;
  }
  else if (value == 7){
    img = img7;
  }
  else if (value == 8){
    img = img8;
  }else if (value == 9){
    img = img9;
  }else if (value == 10){
    img = img10;
  }else if (value == 11){
    img = img11;
  }
  
  background(220);
  image (img,width/2,height/2,width,height);
  // console.log(value);
}

function deviceShaken(){
  value = int(random(1, 11));
}
