const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const box = document.querySelector('.box')
// const h1 = document.querySelector('h1')

function Add (){
    
  if (input.value != ''){
    const newEL = document.createElement('p')

    newEL.innerText = input.value

    box.appendChild(newEL)

    newEL.addEventListener('click', () =>{
        newEL.remove()
    })

    input.value = ''
  } else{
    alert('Будь ты человеком')
  }
}
btn.addEventListener('click', Add)
input.addEventListener('keypress', (e) => {
    if(e == 'Enter') {
        Add()
    }
})