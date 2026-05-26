






let content = document.querySelector('.content')

let showHideContent = ()=>{
    content.classList.toggle('hide');

    
    
} 





const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");
const form = document.getElementById("contactForm");



/* OPEN POPUP */
openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
});

/* CLOSE POPUP */
cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

/* CONFIRM SUBMIT */
confirmBtn.addEventListener("click", () => {

    popup.style.display = "none";

    alert("Form Submitted Successfully");

    form.submit();
});


AOS.init({
    duration: 1000, // values from 0 to 3000
    easing: 'ease', // default easing for AOS animations
  });

  





