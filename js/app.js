
function pingranet(){
    const ramdom = Math.round(Math.random()*10000);
    return ramdom
}

function getpin(){
    const pin = pingranet();
    const pinSting = pin + '';
    if(pinSting.length == 4){
        return pin;
    }else{
        return getpin();
    }
}

document.getElementById('randomButton').addEventListener('click', function(){
    const pint = getpin();
    
    const getpinn = document.getElementById('remdominput');
    getpinn.value = pint;
   

})


document.getElementById('buttons').addEventListener('click', function(even){
    const number = even.target.innerText;
    const inputValu = document.getElementById('inputS');
    const valos = inputValu.value;

    if(isNaN(number)){
        if(number == 'C'){
            inputValu.value= ' ';
        }else if(number == '<'){
            const dalet = valos.split('');
            dalet.pop();
            const remine = dalet.join('');
            inputValu.value = remine;
        }
    }else{        
        const getis = valos + number;
        inputValu.value = getis
    }
});

document.getElementById('submit').addEventListener('click', function(){
    const ramom = document.getElementById('inputS');
    
    const wtight = document.getElementById('remdominput');
    const wrong = document.getElementById('wrong');
    const right = document.getElementById('right');

    console.log(ramom, wtight);
    if(ramom.value == wtight.value){
        right.style.display = 'block';
        wrong.style.display = 'none';
    }else{
        right.style.display = 'none';
        wrong.style.display = 'block';
    }

    ramom.value = ''
    wtight.value = ''
})