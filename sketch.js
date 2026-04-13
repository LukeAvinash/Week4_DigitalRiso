/*
I'm gonna be honest, there was no thought process behind this. All I did was change colors and reposition the elements,
mostly through trial and error.

The only interesting thing I did was changing the yellow wave into some "sun" like object, but that was also done by
playing around with the values, not knowing what I truly did.
*/

function setup() {
    createCanvas(512, 512);
    frameRate(100);
    noFill();
}

function draw() {
    background (50, 61, 92);

    // background
    stroke(0);
    var standardDeviation = 400;
    for (var i = 0; i < 5000; i++) {
        var backDist = randomGaussian(0, standardDeviation);
        var b = createVector(backDist, random(-height, height));
        point(b.x, b.y);
    }

    // circle
    stroke(227, 28, 35);
    translate(width / 5, height / 4);
    for (var i = 0; i < 5000; i++) {
        var cirDist = (max(random(0, 1), random(0, 1)) * width) / 10;
        var angle = random(0, PI * 2);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }

    // top line
    stroke(168, 153, 207);
    for (var i = 0; i < 500; i++) {
        var lineX = random(80, 350);
        var lineY = random(20 - 10, 20 + 10);
        point(lineX, lineY);
    }

    // bottom line
    for (var i = 0; i < 2000; i++) {
        var lineX = random(80, 350);
        var lineY = random(320 - 10, 320 + 10);
        point(lineX, lineY);
    }

    // left & right lines
    for (var i = 0; i < 1000; i++) {
        var leftLineX = random(90 - 10, 90 + 10);
        var leftLineY = max(random(10, 330), random(10, 330));
        point(leftLineX, leftLineY);

        var rightLineX = random(340 - 10, 340 + 10);
        var rightLineY = max(random(10, 330), random(10, 330));
        point(rightLineX, rightLineY);
    }

    // square
    stroke(36, 157, 148);
    for (var i = 0; i < 5000; i++) {
        var sqX = random(50, 150);
        var sqY = random(250, 300);
        push();
        rotate(-PI / 5);
        point(sqX, sqY);
        pop();
    }

    // square shadow
    stroke(126, 145, 115);
    for (var i = 0; i < 5000; i++) {
        var sqBX = min(random(50, 100), random(100, 500));
        var sqBY = max(random(100, 20), random(1, 30));
        push();
        rotate(-PI / 0);
        point(sqBX, sqBY);
        pop();
    }

    // wave black
    push();
    stroke(0);
    translate(0, height / 2 + 10);
    var amp = 20;
    for (var i = 0; i < 2000; i++) {
        var waveX = random(0, width);
        var waveY = cos((waveX / width) * PI * 6) * amp;
        waveY += random(-15, 15);
        point(waveX, waveY);
    }
    pop();

    // wave yellow (sun)
    push();
    stroke(255, 213, 0);
    translate(0, height / 2);
    var amp = 5
    for (var i = 0; i < 5000; i++) {
        var waveX = random(0, width);
        var waveY = cos((waveX / width) * PI * 6) * amp;
        waveY += random(2  , 3);
        rotate(-PI / 10);
        point(waveX, waveY);
    }
    pop();
}
