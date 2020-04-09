const inputRef = document.querySelector('input#validation-input');
console.log(inputRef)
inputRef.classList.add('validation-input')

const x = event => {
    inputRef.classList.remove('validation-input')
    inputRef.classList.add('valid')
    if (event.target.value.length > inputRef.dataset.length){
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    } else{
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
    }
}
inputRef.addEventListener('focus', x)
inputRef.addEventListener('blur', x)












// Если нужно посчитать количество введенных символов
// const resultHendler = event => {
//     console.log(event.target.value.length)
// }
// inputRef.addEventListener('change', resultHendler)



// Если не выносить в отдельную переменную, а сделать присвоение событий с функциями
// inputRef.addEventListener('focus', event =>{
//     inputRef.classList.remove('validation-input')
//     inputRef.classList.add('valid')
// })

// inputRef.addEventListener('blur', event => {
//     if (event.target.value.length > inputRef.dataset.length){
//         inputRef.classList.remove('valid')
//         inputRef.classList.add('invalid')
//     } else{
//         inputRef.classList.remove('invalid')
//         inputRef.classList.add('valid')
//     }
// })





















