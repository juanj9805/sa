const buttonSubmit = document.querySelector("#submit_send")

buttonSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    const inputName = document.querySelector("#txt_name")
    const inputLastName = document.querySelector("#txt_last_name")

    if(inputName.value != "" && inputLastName.value != ""){
        inputName.classList.add("is-valid")
        inputName.classList.remove("is-invalid")
        inputLastName.classList.add("is-valid")
        inputLastName.classList.remove("is-invalid")
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }else{
        inputName.classList.add("is-invalid")
        inputName.classList.remove("is-valid")
        inputLastName.classList.add("is-invalid")
        inputLastName.classList.remove("is-valid")
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "error"
        });
    }
})