// creo una variabile(array) con dentro gli indirizzi delle img
let images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

    
//* porto gli elementi dell'array nell html

    //*recupero il parent dove voglio mettere gli array
    let carouselBox = document.querySelector(`.carousel_box`);
    //*{recupero il parent dove voglio mettere gli array}
    let imgBox = document.querySelector(`.img_box`);

//? creo un ciclo per selezionare ogn elemento presente nell'array partendo da 0
    for(let i = 0 ; i < images.length ; i++){
        //*creo l'elemento img 
        let newImg = document.createElement(`img`);
        //*{creo l'elemento img }
        let newImgBox = document.createElement(`img`);

        //*cambio l'attributo di newImg (`img`) per ogni elemento dentro l'array
        newImg.setAttribute(`src` , images[i]);
        //*{cambio l'attributo di newImg (`img`) per ogni elemento dentro l'array}
        newImgBox.setAttribute(`src` , images[i]);

        //*aggiungo la classe d-none ad ogni elemento newImg per non farlo vedere e la classe w-100 ( per la larghezza)
        newImg.classList.add(`w-100` , `d-none` , `my_corousel`);
        //*{aggiungo la classe mini_img}
        newImgBox.classList.add(`mini_img`);
       
        //*porto l'elemento creato come figlio di (.carousel_box )
        carouselBox.append(newImg);
        //*porto l'elemento creato come figlio di (.carousel_box )
        imgBox.append(newImgBox);
      
    }
    //? creo una variabile di partenza
    let activeElement = 0 ;
    
    //? associo alla var imglist i figli di carouselBox cioè le img create , per avrere la lista 
    let imgList=carouselBox.children
    //? associo alla var imglist i figli di carouselBox cioè le img create , per avrere la lista 
    let imgListBox=imgBox.children
    console.log(imgListBox)

    //*alla var di partenza rimuovo il d-none e aggiungo la classe active per farla vedere
    imgList[activeElement].classList.add('active');
    imgList[activeElement].classList.remove('d-none');
    //*{alla var di partenza aggiungo la classe 'img_visibility' per farla risaltare}
    imgListBox[activeElement].classList.add('img_visibility');
    
    
    //!quando premo un btn

    //!prendo il btn next
    let btnNext=document.querySelector(`.btn_next`);

    //!prendo il btn previus
    let btnPrevius=document.querySelector(`.btn_previus`);

    //!quando il btnNext viene clicato fai partire la funzione 
    btnNext.addEventListener(`click` , function(){

        //! al click rimoviamo la classe active e d-block solo per un elemto dell'array
        //*dalla variabile di partenza rimuovo l'active e aggiungo la classe d-none per non farla vedere
        imgList[activeElement].classList.remove('active');
        imgList[activeElement].classList.add('d-none');
        //*{dalla variabile di partenza rimuovo la classe img_visibility }
        imgListBox[activeElement].classList.remove('img_visibility');
        

        //*incremento il valore di 1 
        activeElement++;

         //* se active elemente ha rigiunto la lunghezza dell'array allora torna a 0
         if(activeElement === imgList.length){
            activeElement=0;
        } 

        //*al nuovo valore rimuovo il d-none e aggiungo la classe active per farla vedere
        imgList[activeElement].classList.remove('d-none');
        imgList[activeElement].classList.add('active');
         //*{dalla variabile di partenza rimuovo la classe img_visibility }
         imgListBox[activeElement].classList.add('img_visibility');

       

        console.log(activeElement);

    })
    
    //!quando il btnprevius viene clicato fai partire la funzione 
    btnPrevius.addEventListener(`click` , function(){

        //! al click rimoviamo la classe active e d-block solo per un elemto dell'array
        //*dalla variabile di partenza rimuovo l'active e aggiungo la classe d-none per non farla vedere
        imgList[activeElement].classList.remove('active');
        imgList[activeElement].classList.add('d-none');
        //*{dalla variabile di partenza rimuovo la classe img_visibility }
        imgListBox[activeElement].classList.remove('img_visibility');

        //*decremento il valore di 1 
        activeElement --;

        //* se active elemente ha rigiunto la lunghezza dell'array allora torna a 0
        if(activeElement === -1){
            activeElement= imgList.length-1;
        }

        //*al nuovo valore rimuovo il d-none e aggiungo la classe active per farla vedere
        imgList[activeElement].classList.remove('d-none');
        imgList[activeElement].classList.add('active');
        //*{dalla variabile di partenza rimuovo la classe img_visibility }
        imgListBox[activeElement].classList.add('img_visibility');


        console.log(activeElement);

    })





    //? aggiungiamo una time function

    let clock = setInterval(function(){
         //! al click rimoviamo la classe active e d-block solo per un elemto dell'array
        //*dalla variabile di partenza rimuovo l'active e aggiungo la classe d-none per non farla vedere
        imgList[activeElement].classList.remove('active');
        imgList[activeElement].classList.add('d-none');
        //*{dalla variabile di partenza rimuovo la classe img_visibility }
        imgListBox[activeElement].classList.remove('img_visibility');
        

        //*incremento il valore di 1 
        activeElement++;

         //* se active elemente ha rigiunto la lunghezza dell'array allora torna a 0
         if(activeElement === imgList.length){
            activeElement=0;
        } 

        //*al nuovo valore rimuovo il d-none e aggiungo la classe active per farla vedere
        imgList[activeElement].classList.remove('d-none');
        imgList[activeElement].classList.add('active');
         //*{dalla variabile di partenza rimuovo la classe img_visibility }
         imgListBox[activeElement].classList.add('img_visibility');

       

    } , 3000)


    