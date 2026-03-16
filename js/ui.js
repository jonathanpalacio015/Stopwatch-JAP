
function pad(n,size){
let s=n+""
while(s.length<size) s="0"+s
return s
}

const horasEl=document.getElementById("horas")
const minutosEl=document.getElementById("minutos")
const segundosEl=document.getElementById("segundos")
const milisegundosEl=document.getElementById("milisegundos")

const btnIniciar=document.getElementById("btnIniciar")
const btnDetener=document.getElementById("btnDetener")
const btnReiniciar=document.getElementById("btnReiniciar")

const cronometro=new Stopwatch((t)=>{
horasEl.textContent=pad(t.horas,2)
minutosEl.textContent=pad(t.minutos,2)
segundosEl.textContent=pad(t.segundos,2)
milisegundosEl.textContent=pad(t.milisegundos,3)
})

btnIniciar.addEventListener("click",()=>cronometro.start())
btnDetener.addEventListener("click",()=>cronometro.stop())
btnReiniciar.addEventListener("click",()=>cronometro.reset())
