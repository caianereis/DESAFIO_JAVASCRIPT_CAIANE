let carouselArr = [];

class Carousel {

    static _size;
    static _sequence;
    static _interval;

    constructor(Image, Title, Url){
        this.Image = Image;
        this.Title = Title;
        this.Url = Url;
    }
    
    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        document.getElementById("carousel").style.backgroundImage = "url('img/" + carouselArr[Carousel._sequence].Image + "')";
        document.getElementById("carousel").style.backgroundSize = "cover";
        document.getElementById("carousel").style.backgroundPosition = "center";
        document.getElementById("carousel-title").innerHTML = "<a href='" + carouselArr[Carousel._sequence].Url + "'>" + carouselArr[Carousel._sequence].Title + "</a>";
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
};