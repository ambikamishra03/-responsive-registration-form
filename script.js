const  form = document.querySelector("form"),
 nextbtn=form.querySelector(".nextbtn"),
 backbtn=form.querySelector(".backbtn"),
 allInput=form.querySelectorAll(".first input");

 nextbtn.addEventListener("click",()=> {
    allInput.forEach(input => {
        if(input.value !=""){
        form.classList.add('setActive');
        }else{
            form.classList.remove('setActive'); 
            // alert("Input is empty")
        }
    })
 })

backbtn.addEventListener("click",()=>form.classList.remove('setActive'));