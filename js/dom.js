
const CrearUsuario = () => {
    const user = {
        username: "Facundo",
        password: "Facu623"
    }
    let users = [user];
    return users;
}

const CrearNuevosUsuarios = (userParam, passParam) => {
    const user = {
        username: userParam,
        password: passParam
    }
    return user;
}
const AgregarNuevoUsuarioLocal = () =>{
    let userInput = document.querySelector("#username").value;
    let passInput = document.querySelector("#password").value;
    if(!localStorage.getItem("users")){
        let user = CrearNuevosUsuarios(userInput, passInput);
        let users = [user];
        localStorage.setItem("users", JSON.stringify(users));
    }else{
        let user = CrearNuevosUsuarios(userInput, passInput);
        let users = JSON.parse(localStorage.getItem("users"));
        let result = false;
        for(let i = 0; i < users.length; i++){
            if(users[i].username === user.username){
                result = true;
            }
        }
        if(result){
            console.log("Usuario existente");
        }else{
            console.log("Usuario creado");
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
}
let usersParsed;
const CargaUsuario = () => { 
    let users = CrearUsuario ();
    if(!localStorage.getItem("users")){
        localStorage.setItem("users", JSON.stringify(users));
    }else{
        usersParsed = JSON.parse(localStorage.getItem("users"));
    }
}
document.querySelector("#BotonInicioSesion").addEventListener("click",(event) => {
    event.preventDefault();
    AgregarNuevoUsuarioLocal();
})
CargaUsuario();

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Recuerde cargar la nota antes del 25/11', 'success')
  })
}
const AlertaAlumno = document.getElementById('AlertaAlumno')

const alert2 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  AlertaAlumno.append(wrapper)
}

const AlertaEmergente = document.getElementById('MensajeAlumno')
if (AlertaEmergente) {
    AlertaEmergente.addEventListener('click', () => {
    alert('Exitos en el cuatrimestre', 'success')
  })
}
