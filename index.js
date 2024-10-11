let text=document.getElementById('text');
let leaf=document.getElementById('leaf');
let hill1=document.getElementById('hill1');
let hill4=document.getElementById('hill4');
let hill5=document.getElementById('hill5');

window.addEventListener('scroll', ()=> {
    let value=window.scrollY;

    text.style.marginTop=value*2.5+'px'; //will increase the valur of top margin by 2.5px whn we scroll in y axis
    leaf.style.top=value*-1.5+'px';//will decerase the value of top margin by -1.5px when we scroll in y aixs
    leaf.style.left=value*1.5+'px';//will incresae the valur of left margin by 1.5px when we scroll in y axis
    hill5.style.left=value*1.5+'px';
    hill4.style.left=value*-1.5+'px';
    hill1.style.top=value*1.5+'px';
});