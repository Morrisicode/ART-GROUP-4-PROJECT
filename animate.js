const elements = document.querySelectorAll(
'.section-title, .card-animation, .image-reveal, .text-left, .text-right, .zoom-rotate, .blur-fade'
);

window.addEventListener('scroll', () => {

    elements.forEach((element) => {

        const position = element.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if(position < screenPosition){

            element.classList.add('active');

        }

    });

});