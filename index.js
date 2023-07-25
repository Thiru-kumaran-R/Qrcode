const button = document.querySelector("form button");
let container = document.querySelector(".container");
let userInput = document.querySelector("form input");
let qrCode = document.getElementById("qrCode");
let qrImage = document.querySelector(".qr-image");
let download = document.querySelector(".download-item");
let downloadItem = document.querySelector(".download-item button");
var qrValue = '';
var height ;
var width ;
var size ; 


button.addEventListener('click' , ()=> {
    qrValue = userInput.value;
    
    if(!qrValue){
        alert("Invalid Input");
    }

    height = window.innerHeight;
    width = window.innerWidth;

    if(height < 950){
        size="160x160"
    }else{
        size="300x300"
    }
    console.log(height);

    qrCode.src =`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${qrValue}`;
    qrCode.addEventListener("load", ()=> {
        container.classList.add("active");
        qrImage.classList.add("fadeIn");
        download.classList.add("fadeIn");
    });

});

downloadItem.addEventListener("click" , async() =>{
    const response = await fetch(qrCode.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qr-code.png";
    downloadLink.click();

    container.classList.remove("active");
    qrImage.classList.remove("fadeIn");
    download.classList.remove("fadeIn");
});

function erase(){
    document.getElementById('link').value = '' ;
}




