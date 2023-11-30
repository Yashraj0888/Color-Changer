
const chnger=function(){
    const hex="0123456789ABCDEF";
    
    let hash="#";
    for(let i=0;i<6;i++){
        hash+=hex[Math.floor(Math.random()*16)]
    }
    return hash;
}

let setInt=null;
const strtChanging=function(){

    if(!setInt){
        setInt=setInterval(changeBg,1000)

    }
    function changeBg(){
        document.querySelector('.value').innerHTML="<b>"+chnger()+"</b>"
        document.querySelector('body').style.backgroundColor=chnger()

    }
}

const stopChanging= function(){
    clearInterval(setInt)
    setInt=null
}


    document.querySelector('#start').addEventListener('click',()=>{
        document.querySelector('.value').style.display='flex'
        strtChanging()

    })
    
    document.querySelector('#stop').addEventListener('click',stopChanging)
    