// select the button
let r = 0;
const button = document.querySelectorAll('.btn');
const dis = document.querySelector('#screen');
console.log(typeof button);

    for(let i= 0; i < button.length ; i++){

        button[i].addEventListener('click',function(){
        
            dis.setAttribute("data-content",`${r += 1}`);
            
        }
        )
    }
const menu = document.createElement('div');
menu.innerHTML = `<div class="sideBar"> Card <\div>`;
document.body.appendChild(menu);

// const btnClick = document.querySelector('.pseudo');
// console.log(btnClick);

// btnClick.addEventListener('click',function(){
//     console.log('My answer.');
//     btnClick.target.classList.toggle("sideBar");
// })
let btnClick = document.querySelector('.pseudo');
btnClick.addEventListener('click',function() {
    let x = document.querySelector('.sideBar');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }

});
// menu.style.border = "1px solid black";
// menu.style.backgroundColor = "brown";
// menu.style.height = "200px"
// menu.style

