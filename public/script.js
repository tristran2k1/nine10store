var shopProduct = document.querySelectorAll('.pro-container .pro')
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

           


for (const prod of shopProduct){
    prod.addEventListener('click', function(){
        window.localStorage.setItem('newImg', prod.querySelector('img').src);
        window.location.href = 'sproduct.html';
    })
}
if(MainImg!=null){
    MainImg.src = window.localStorage.getItem('newImg')
}
