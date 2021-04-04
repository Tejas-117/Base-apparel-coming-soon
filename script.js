let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let clientWidth = document.documentElement.clientWidth;

if(clientWidth >= "1080"){//changing the image for desktop;
   document.getElementById("hero").src = "./images/hero-desktop.jpg";
}

document.querySelector('#btn').addEventListener("click", function(event){
   let emailInput = document.querySelector('.email').value;

   if(!emailInput.match(emailFormat)){
      document.querySelector('#error-img').style.display = "block";
      document.querySelector('#error-msg').style.display = "block";
   }
});
