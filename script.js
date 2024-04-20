
function clockTime()
{
    let date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()



    clock.innerHTML=`${hour}:${minute}:${second} `
    

    setTimeout(()=>{clockTime(),1000});
}

clockTime()