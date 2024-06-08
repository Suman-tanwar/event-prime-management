let formUrl = "https://script.google.com/macros/s/AKfycbx2IQ4ddbP0Vjh7F-YUqE6cFkizQERoyjawvYAh6OVlXAxPQz6TtzXDyvc4W9lkIkfP/exec"

let form = document.querySelector('#form')

form.addEventListener("submit",(e)=>{

    let btn = document.getElementById("btn")
    btn.innerHTML = "Submiting"
    let data = new FormData(form)
    
    fetch(formUrl,{
        method:"POST",
        body:data,

    }).then((res)=>res.text()).then((finalRes)=>{
        btn.innerHTML="Send Message"
        Toastify({
            text: finalRes,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #090979, #00d4ff)",
              fontSize: "1.8rem"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        
          form.reset()
          



        console.log(finalRes)
    })



   


    e.preventDefault()
})


