// JAVASCRIPT //

console.log("YDD");

/*
Slider:
-Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider
 che permettono di andare avanti e indietro tra le immagini
*/


var app = new Vue
(
    {
        el: '#root',
        data: 
        {
            immagini: 
            [
                "./assets/img/img_01.jpg",
                "./assets/img/img_02.jpg",
                "./assets/img/img_03.jpg",
                "./assets/img/img_04.jpg"
            ],
            i: 0
        },
        methods:
        {
            nextPhoto: function()
            {
                this.i++;
            }
        }
    }
);


















// ----- FINE :) -----