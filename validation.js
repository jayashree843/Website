const form =document.getElementById('form');
const fname =document.getElementById('fname');
const email =document.getElementById('email');
const phno =document.getElementById('phno');
const Query =document.getElementById('Query');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateinputs();
});
function setError(element, message){
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

const isValidEmail=(emailvalue)=>{
    var atSymbol=emailvalue.indexOf('@');
    if(atSymbol<1) return false;
    var dot=emailvalue.lastIndexOf('.');
    if(dot<=atSymbol+3) return false;
    if(dot==emailvalue.length-1) return false;
    return true;
}
const validateinputs=()=>{
    const namevalue=name.value.trim();
    const emailvalue=email.value.trim();
    const phnovalue=phno.value.trim();
    const Queryvalue=Query.value.trim();
    
    //validate name
    if(namevalue==''){
        setError(fname,'username is required');
    }
    else if(fname.length<=2){
        setError(fname,'name min 3 character');
    }
    else{
        setSuccess(fname);
    }
    //validate email
    if(emailvalue==''){
        setError(email,'email is required');
    }
    else if(!isValidEmail(emailvalue)){
        setSuccess(email,'provide a valid email address');
    }
    else{
        setSuccess(email);
    }
}