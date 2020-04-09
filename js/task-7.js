const input = document.getElementById("font-size-slider");
const span = document.getElementById("text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}









// const inputRef = document.getElementById('font-size-control');
// console.log(inputRef)

// const spanRef = document.getElementById('text');
// console.log(spanRef)

// // spanRef.innerHTML = inputRef.value

// // inputRef.addEventListener('input', event => {

// //     spanRef.classList.add('fontSize')


// //     console.log(event.target.value)
// // })