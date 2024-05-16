function imageChange(){
    const imageElement=document.getElementById("change-image");
    const min=1;
    const max=6;
    const mathElement = Math.round(Math.random()*(max-min)+(min));
    console.log(mathElement);

    switch (mathElement) {
        case (1):
            imageElement.src = "./img/home-img/head-slide-img-1.webp";
            break;

        case (2):
            imageElement.src = "./img/home-img/slide-head-img-2.webp";
            break;

        case (3):
            imageElement.src = "./img/home-img/slide-head-img-3.jpg";
            break;

        case (4):
            imageElement.src = "./img/home-img/slide-head-img-2.webp";
            break;

        case (5):
            imageElement.src = "./img/home-img/slide-head-img-3.jpg";
            break;

        case (6):
            imageElement.src = "./img/home-img/head-slide-img-1.webp";
            break;
    }

}

