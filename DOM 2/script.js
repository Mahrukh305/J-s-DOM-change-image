let image = document.getElementById("picture");

let firstImage = true;

function changeImage(){

    if(firstImage){

        image.src = "pinkteddy.jpg";

        firstImage = false;

    }

    else{

        image.src = "pinkflower.jpg";

        firstImage = true;

    }

}