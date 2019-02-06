const submitButton = document.querySelector('.submitButton');
let inputText =document.querySelector('.inputText');
// const render = (res)=>{
//     console.log(res);
    
// }
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    textValue=inputText.value;
    console.log(inputText.value);
    fetch('POST','/food', textValue,(res)=>{
        console.log(res);
    } )
})
