document.addEventListener("DOMContentLoaded", updateClock);  //Quando a pagina carregar, chama a função "initialize"
setInterval(updateClock, 1000)

function updateClock(){
    const time = new Date();
    const year = time.getFullYear().toString().padStart(4, "0");
    const month = (time.getMonth() + 1).toString().padStart(2, "0");
    const day = time.getDate().toString().padStart(2, "0");
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");
    const dateString = `${hour}:${minute}:${second} ${day}/${month}/${year}`;
    document.getElementById("Clock").textContent = dateString;   
}