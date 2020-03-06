

function sleepingGuy(){
    document.querySelector(".dialogue").innerHTML="ZZZZZZZZ"
    setTimeout(()=>{
        document.querySelector(".dialogue").innerHTML="....."
    },2000)

    setTimeout(()=>{
        document.querySelector(".dialogue").innerHTML="ZZZZZZZ...."

        document.querySelector('.eyeone').classList.remove('eyeclose')
        document.querySelector('.eyetwo').classList.remove('eyeclose')
        document.querySelector(".eyeone").classList.add('eye')
        document.querySelector(".eyetwo").classList.add('eye')
        document.querySelector(".dialogue").innerHTML="WHAT THE??"
    },4000)

    setTimeout(()=>{
        closeElevator()
    },5500)
}


sleepingGuy()

function closeElevator(){
console.log("open sesame!! ya son of a bitch!")
    document.querySelector(".elevator_left").classList.add('animateelevator_right')
    document.querySelector(".elevator_right").classList.add('animateelevator_left')
    setTimeout(()=>{
        document.querySelector(".person").classList.add('animate-person')
        document.querySelector(".dialogue").innerHTML=`<h3>HAPPY BIRTHDAY!!!</h3>`
    },2500)
}