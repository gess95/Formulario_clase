document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("nombre").value;
    let date = document.getElementById("fechaNacimiento").value;
    let color = document.getElementById("color").value;
    let file = document.getElementById("document").value;
    let gender = document.getElementsByName("genero");
    let option = document.getElementsByName("preferencias[]");
    //let option = document.getElementById("option").value;
    console.log(name);
    console.log(date);
    console.log(color);
    console.log(file);
    let genderOption;

    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genderOption = gender[i].value;
        break;
      }
    }
    console.log(genderOption);

    let checkList = [];
    for (let i = 0; i < option.length; i++) {
      if (option[i].checked) {
        checkList.push(option[i].value);
      }
    }

    console.log(checkList);

    console.log("Se envió el formulario");
  });
