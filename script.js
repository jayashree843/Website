$('.testimonial-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
});

/*const form =document.getElementById('form');
const fname =document.getElementById('fname');
const email =document.getElementById('email');
const phno =document.getElementById('phno');
const Query =document.getElementById('Query');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateinputs();
});
const setError=(element, message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error;');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail=email=>{
    const re=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
    return re.test(String(email).toLowerCase());
}
const validateinputs=()=>{
    const namevalue=name.value.trim();
    const emailvalue=email.value.trim();
    const phnovalue=phno.value.trim();
    const Queryvalue=Query.value.trim();

    if(namevalue===''){
        setError(fname,'username is required');
    }
    else{
        setSuccess(fname);
    }
    if(emailvalue==''){
        setError(email,'email is required');
    }
    else if(!isValidEmail(emailvalue)){
        setSuccess(email,'provide a valid email address');
    }
    else{
        setSuccess(email);
    }
}*/
