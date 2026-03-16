
class Stopwatch{

constructor(updateCallback){
this.startTime = 0
this.elapsed = 0
this.timer = null
this.updateCallback = updateCallback
}

start(){
if(this.timer) return

this.startTime = performance.now() - this.elapsed

this.timer = setInterval(()=>{
this.elapsed = performance.now() - this.startTime
this.update()
},10)
}

stop(){
if(!this.timer) return
clearInterval(this.timer)
this.timer = null
}

reset(){
this.stop()
this.elapsed = 0
this.update()
}

update(){

const ms = Math.floor(this.elapsed)

const horas = Math.floor(ms / 3600000)
const minutos = Math.floor((ms % 3600000) / 60000)
const segundos = Math.floor((ms % 60000) / 1000)
const milisegundos = ms % 1000

this.updateCallback({
horas,
minutos,
segundos,
milisegundos
})
}

}
