let inputDetails = document.querySelector('.entered-list')
const addButton = document.querySelector('.add-list')
const display = document.querySelector('.display')
const taskDiv = document.querySelector('.tasks')
// const deleteButton = document.querySelectorAll('.bx bxs-x-circle')


addButton.addEventListener('click', (e) => { 
    if ( inputDetails.value.length === 0){
    alert ("Please Enter a Task")
    } 
    else {
    let icons = `
    <i id = "check" class='bx bx-checkbox''></i>
    <i id = 'del' class='bx bxs-x-circle'></i>`

    const text = inputDetails.value

    let p = document.createElement("p")
    p.innerHTML = `${text}` 

    const IconSpan = document.createElement("span")
    IconSpan.setAttribute("class","item-btn")
    IconSpan.innerHTML = `${icons}`

    const item = document.createElement("div")
    item.setAttribute("class","item")
    item.appendChild(p)
    item.appendChild(IconSpan)

    taskDiv.appendChild(item)

    document.querySelector('.entered-list').value = ""
    }

    let clear = document.querySelectorAll('#del')
    for (let i = 0; i < clear.length; i++){
        clear[i].onclick = function () {
            this.parentElement.parentElement.remove()
        }
    }

    let check = document.querySelectorAll('#check')
    for (let i = 0; i < check.length; i++){
        check[i].onclick = function () {
            if (this.classList.toggle('bxs-checkbox-checked')){
                this.parentElement.parentElement.style.background = 'green';
                this.parentElement.parentElement.style.color = 'white';
                this.style.color = 'white'
                this.nextElementSibling.style.color = 'white'
            }
            else {
                this.parentElement.parentElement.style.background = 'white';
                this.parentElement.parentElement.style.color = 'black';
                this.style.color = 'rgba(8, 6, 133)'
                this.nextElementSibling.style.color = 'rgba(8, 6, 133)'
            }
        }
    }

})

// const format = (text) => {
    //     return `
    //             <div class ="item">
    //                  <p>${text}</p>
    //                 <div class = "item-btn">
    //                     <i class='bx bxs-edit'></i>
    //                     <i class='bx bxs-x-circle'></i>
    //                 </div>
    //             </div>
    //             `
    // }

    // const text = inputDetails.value
    // // const check = format(text)
    // // taskDiv.innerHTML += check
    // // console.log(check)
    


//  let del = document.querySelectorAll('.bx bxs-x-circle')
//  for (let i = 0; i < del.length; i++){
//     del[i].addEventListener('click',() =>{
//         del[i].parentElement.remove()
//     })
//  }

// addButton.addEventListener('click',(e) =>{
//     if (inputDetails.value != "") {
//         e.preventDefault()
//         const myItem = document.createElement('div')
//         myItem.innerHTML = inputDetails.value
//         taskDiv.appendChild(myItem)
//     }
// })

/* <i class='bx bx-checkbox'></i>
<i class='bx bxs-checkbox-checked' ></i> */