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
            indice: 0,
            immagini: 
            [
                {
                    id:1,
                    immagine: "./assets/img/img_02.jpg",
                    descrizione: "Immagine 1",
                },
                {
                    id:2,
                    immagine: "./assets/img/img_03.jpg",
                    descrizione: "Immagine 2" 
                },
                {
                    id:3,
                    immagine: "./assets/img/img_04.jpg",
                    descrizione: "Immagine 3" 
                }
            ]
        },

        mounted()
        {
            this.attivaIntervallo();
        },


        methods:
        {
            nextPhoto()
            {
                this.indice++;
                if(this.indice == this.immagini.length)
                {
                    this.indice = 0;
                }
                console.clear();
                console.log(this.indice)
            },

            previousPhoto()
            {
                this.indice--;
                if(this.indice < 0)
                {
                    this.indice = this.immagini.length-1;
                }
                console.clear();
                console.log(this.indice)
            },

            selezionaFoto(id)
            {
                this.indice = id-1                
                console.clear();
                console.log(this.indice)
            },

            attivaIntervallo()
            {
                setInterval(() => {this.nextPhoto()}, 3000);
            }
        }
    }
);
















// ----- FINE :) -----