const on = () => {
    document.querySelector('#myimage').src='img/bulb on.png';
    document.querySelector('#btn-show').innerHTML = ' You just Trun on the blub 💡'
    
}

const off = () => {
    document.querySelector('#myimage').src='img/bulb off.png';
    document.querySelector('#btn-show').innerHTML = ' You just Trun off the bulb 💡'
}


btn1.addEventListener('click', on );
btn2.addEventListener('click', off );


