const imagem1 = document.querySelector('#nameP1');
const imagem2 = document.querySelector('#nameP2');
const imagem3 = document.querySelector('#nameP3');
const imagem4 = document.querySelector('#nameP4');
const nomePersonagem1 = document.getElementById('nomePersonagem1');
const nomePersonagem2 = document.getElementById('nomePersonagem2');
const nomePersonagem3 = document.getElementById('nomePersonagem3');
const nomePersonagem4 = document.getElementById('nomePersonagem4');

let nomePersonagem;

informaPersonagem1 = () => { 
    let aleatorio = Math.floor(Math.random() * 671);
  
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET', 
        headers : {
            Accept: 'application/json' , 
        "Content-type" : 'application/json' }
    }).then((response) =>  response.json() ).then((data)  => { 
        imagem1.src = data.image; 
        nomePersonagem = data.name;
        nomePersonagem1.innerHTML  = data.name;
    });
}

informaPersonagem2 = () => { 
    let aleatorio = Math.floor(Math.random() * 671);
  
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET', 
        headers : {
            Accept: 'application/json' , 
        "Content-type" : 'application/json' }
    }).then((response) =>  response.json() ).then((data)  => { 
        imagem2.src = data.image; 
        nomePersonagem = data.name;
        nomePersonagem2.innerHTML  = data.name;
    });
}

informaPersonagem3 = () => { 
    let aleatorio = Math.floor(Math.random() * 671);
  
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET', 
        headers : {
            Accept: 'application/json' , 
        "Content-type" : 'application/json' }
    }).then((response) =>  response.json() ).then((data)  => { 
        imagem3.src = data.image; 
        nomePersonagem = data.name;
        nomePersonagem3.innerHTML  = data.name;
    });
}

informaPersonagem4 = () => { 
    let aleatorio = Math.floor(Math.random() * 671);
  
    return fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
        method: 'GET', 
        headers : {
            Accept: 'application/json' , 
        "Content-type" : 'application/json' }
    }).then((response) =>  response.json() ).then((data)  => { 
        imagem4.src = data.image; 
        nomePersonagem = data.name;
        nomePersonagem4.innerHTML  = data.name;
    });
}




 informaPersonagem1();
 informaPersonagem2();
 informaPersonagem3();
 informaPersonagem4();