canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="Red";
ctx.lineWidth=3;
ctx.arc(300,200,38,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouse_X= e.clientX-canvas.offsetLeft;
    mouse_Y=e.clientY-canvas.offsetTop;
    console.log("X = "+mouse_X+" and Y = "+mouse_Y);
    circle(mouse_X,mouse_Y);

}
function circle(mouse_X,mouse_Y)
{
    ctx.beginPath();
ctx.strokeStyle="Red";
ctx.lineWidth=3;
ctx.arc(mouse_X,mouse_Y,38,0,2*Math.PI);
ctx.stroke();
}