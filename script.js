// select the button
let r = 0;
const button = document.querySelectorAll('.btn');
const dis = document.querySelector('#screen');
// const butt_1 = document.querySelector('#but1');
// const butt_2 = document.querySelector('#but2');
// const butt_3 = document.querySelector('#but3');
// const butt_4 = document.querySelector('#but4');
// const butt_5 = document.querySelector('#but5');
// const butt_6 = document.querySelector('#but6');
// const cont = getComputedStyle(dis,":before").content;
// Events 
console.log(typeof button);



    for(let i= 0; i < button.length ; i++){

        button[i].addEventListener('click',function(){
        
            dis.setAttribute("data-content",`${r += 1}`);
            
        }
        )
    }

// button.addEventListener('click',function(){
//     console.log('Resultat');
// })
// butt1.addEventListener('click',function(){
// })
// butt_.addEventListener('click',function(event){
//     for (let i = 0; i < butt_.length; i++) {
//         console.log('Resultat',event.target.innerHTML);  
//     }
    // console.log(butt_1.innerHTML);
    // console.log(typeof cont);
    // console.log('The result is', cont);
    // let b = Math.floor(cont);
    // let result = b + 1;
    // console.log( result.toString());  
    // console.log(typeof result);
    // console.log('Réponse',result);
//     dis.setAttribute("data-content",`${r += 1}`);
// })