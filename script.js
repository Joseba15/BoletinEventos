//1.1

const boton = document.querySelector('button');


boton.addEventListener('click', function () {
    console.log('Este mensaje esta impreso en consola');
})


//1.2

const enlace = document.querySelector('a');

enlace.addEventListener('mouseenter',function () {
    enlace.style.backgroundColor='gray';
})

//1.3

const parraf = document.querySelector('p');

document.body.addEventListener('mousemove',function (e) {
    let x=e.clientX;
    let y=e.clientY;

    parraf.innerHTML="Las coordenadas X son: "+x+" y las coordenadas Y son: "+y;
})



//2.1

// document.body.addEventListener('keydown',function (event) {
//     alert(event.key); 

// })




//3.1
const elemtUl = document.querySelector('ul');
const listaLi = document.querySelectorAll('li');

for (const li of listaLi) {
    li.addEventListener('click',function (e) {
        console.log(e.target.innerText);
    })
}

//3.2





//4.1
const botonEnv = document.querySelector('#env');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');


botonEnv.addEventListener('click',function () {
    
    if (nombre.value!="" || correo.value!="") {
        alert("Se han enviado los datos correctamente");
    }else{
        alert("Los datos son erroneos");
    }
})


//4.2


