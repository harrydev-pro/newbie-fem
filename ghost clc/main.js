const btn=document.querySelectorAll('.btn');
const equalbtn=document.querySelector('.equalbtn');
const screen=document.querySelector('.screen');
const deletelast=document.querySelector('.deletelast');
const clearbtn=document.querySelector('.clearbtn');


for(let i=0;i < btn.length;i++){
    btn[i].addEventListener('click',function() {

        let number=btn[i].getAttribute('data-num');
        screen.value+=number;
    });
}
clearbtn.addEventListener('click',function(){
    screen.value='';
});
equalbtn.addEventListener('click',function(){
    screen.value=eval(screen.value);
});
deletelast.addEventListener('click',function(){
    screen.value=screen.value.slice(onabort,-1);
});