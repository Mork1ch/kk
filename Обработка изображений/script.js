//1 задание

var num = 0;

var imgslide = new Array();
imgslide[0] = new Image();
imgslide[1] = new Image();
imgslide[2] = new Image();
imgslide[3] = new Image();
imgslide[4] = new Image();
imgslide[0].src = "/IMG_1.JPG";
imgslide[1].src = "/IMG_2.JPG";
imgslide[2].src = "/IMG_3.JPG";
imgslide[3].src = "IMG_4.JPG";
imgslide[4].src = "/IMG_5.JPG";

function move(n) {

    document.images[0].src = imgslide[num].src

    if (n == 1) {

        num++
        if (num == 5)
            num = 0;

    } else {
        num--
        if (num == -1)
            num = 4;

    }
}


//3 задание

var timerId = setInterval(() => change(), 1000);

function change() {

    document.images[2].src = imgslide[num].src

    num++
    if (num == 5)
        num = 0;

}