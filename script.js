let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let random=getRandomColor();
    h3.innerText=random;
    let div=document.querySelector(".color-box");
    div.style.backgroundColor=random;
    
});
function getRandomColor()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}

