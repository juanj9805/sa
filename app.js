const buttonSubmit = document.querySelector("#submit_send");
const tableContent = document.querySelector("#tableBodyContent");
const users = [];

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const inputName = document.querySelector("#txt_name");
  const inputLastName = document.querySelector("#txt_last_name");

  if (inputName.value != "" && inputLastName.value != "") {
    const userInfo = {
      id: Date.now(),
      name: inputName.value.toUpperCase(),
      lastName: inputLastName.value.toUpperCase(),
    };

    const html = `
            <tr class="hi" >
                <td id="id">${userInfo.id}</td>
                <td>${userInfo.name}</td>
                <td>${userInfo.lastName}</td>
                <td>
                    <button type="button" class="btn btn-outline-success" >Create</button>
                    <button type="button" class="btn btn-outline-primary" >Info</button>
                    <button id="delete" type="button" class="btn btn-outline-danger" >Delete</button>
                </td>
            </tr>`;

    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    inputLastName.classList.add("is-valid");
    inputLastName.classList.remove("is-invalid");
    Swal.fire({
      title: "User registered!",
      text: `${userInfo.name} ${userInfo.lastName}had been added onto the data base`,
      icon: "success",
    });
    users.push(userInfo);
    tableContent.insertAdjacentHTML("beforeend", html);
    inputName.textContent = "";
  } else {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
    inputLastName.classList.add("is-invalid");
    inputLastName.classList.remove("is-valid");
    Swal.fire({
      title: "Something went wrong!",
      text: "Fill out all the inputs",
      icon: "error",
    });
  }
  console.log(users);
});

tableContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-outline-danger")) {
    e.target.closest("tr").remove();
  }
});
