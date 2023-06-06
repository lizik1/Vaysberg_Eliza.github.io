 // При нажатии на "Показать еще", появляются все card
 const btn = document.querySelector('.btn');
 const cards = Array.from(document.querySelectorAll('.card'));
 
 
 window.addEventListener('resize', event => {
     if (event.target.window.innerWidth > 989) response1();
     if (event.target.window.innerWidth <= 989 && event.target.window.innerWidth > 659) response2();
     if (event.target.window.innerWidth <= 659) response3();
 })
 
 function openCatalog() {
     btn.addEventListener('click', () => {
         cards.forEach(item => item.classList.remove('hidden'));
         btn.classList.add('hidden');
     })
 }
 
 function response1() {
     if (window.innerWidth > 989) {
 
         cards.forEach((item, index) => {
             item.classList.add('hidden')
             if (index <= 2) {
                 item.classList.remove('hidden')
             } else if (index > 2) {
                 btn.classList.remove('hidden');
             }
             openCatalog()
         })
     }
 }
 response1()
 
 
 function response2() {
     if (window.innerWidth <= 989 && window.innerWidth > 659) {
 
         cards.forEach((item, index) => {
             item.classList.add('hidden')
             if (index <= 1) {
                 item.classList.remove('hidden')
             } else if (index > 1) {
                 btn.classList.remove('hidden');
             }
             openCatalog()
         })
     }
 }
 response2()
 
 
 function response3() {
     if (window.innerWidth <= 659) {
 
         cards.forEach((item, index) => {
             item.classList.add('hidden')
             if (index <= 0) {
                 item.classList.remove('hidden')
             } else if (index > 0) {
                 btn.classList.remove('hidden');
             }
             openCatalog()
         })
     }
 }
 response3()


// top-gradient

 var granimInstance = new Granim({
    element: '.top__img',
    direction: 'diagonal',
    customDirection: {
        x0: '10px',
        y0: '300px',
        x1: '90%',
        y1: '0px'
      },
    elToSetClassOn: '.top__img_gradient',
    // opacity: [1, 1, 1],
    isPausedWhenNotInView: true,
    image : {
        source: './img/home-header-bg.jpg',
        blendingMode: 'multiply',
        stretchMode: ['stretch', 'stretch-if-smaller'],
        position: ['center', 'center'],
        
    },
    states : {
        "default-state": {
            gradients: [
                ['rgba(186, 185, 190, .73)', 'rgba(178, 226, 229, .7)', 'rgba(13, 111, 124, 1)'],
                ['rgba(186, 185, 190, .73)', 'rgba(172, 187, 77, .7)', 'rgba(54, 185, 169, 1)'],
                ['rgba(186, 185, 190, .73)', 'rgba(77, 187, 167, .7)', 'rgba(2, 35, 84, 1)']
            ],
            transitionSpeed: 7000
        }
    }
});