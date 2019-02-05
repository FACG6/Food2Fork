const submitButton = document.querySelector(".submit");
const input = document.querySelector('.input').value
const render = (res)=>{
    console.log(res);
    
}
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch('GET','/food', input, render )
})
