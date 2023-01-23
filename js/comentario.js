const CrearComentario = () => {
    const comentario = {
        usuario: "Facundo",
        contraseña: "Facu623",
        email: "facundoszabo6@gmail.com",
        comentario: "me gusto el contenido"
    }
    let comentarios = [comentario];
    return comentarios;
}
const CrearNuevosComentario = (usuarioParam,contraseñaParam,emailParam,ComentarioParam) => {
    const comentario = {
        usuario: usuarioParam,
        contraseña: contraseñaParam,
        email: emailParam,
        comentario: ComentarioParam,
    }
    return comentario;
}
const AgregarNuevoComentarioLocal = () =>{
    let UsuarioIngresado = document.querySelector("#usuario").value;
    let ContraseñaIngresado = document.querySelector("#contraseña").value;
    let CorreoIngresado = document.querySelector("#correo").value;
    let ComentarioIngresado = document.querySelector("#comentario").value;
    if(!localStorage.getItem("comentarios")){
        let comentario = CrearNuevosComentario(UsuarioIngresado, ContraseñaIngresado,CorreoIngresado,ComentarioIngresado);
        let comentarios = [comentario];
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }else{
        let comentario = CrearNuevosComentario(UsuarioIngresado, ContraseñaIngresado,CorreoIngresado,ComentarioIngresado);
        let comentarios = JSON.parse(localStorage.getItem("comentarios"));
        let result = false;
        for(let i = 0; i < comentarios.length; i++){
            if(comentarios[i].usuario === comentario.usuario){
                result = true;
            }
        }
        if(result){
            console.log("Comentario ya ingresado");
        }else{
            console.log("Comentario creado");
            comentarios.push(comentario);
            localStorage.setItem("comentarios", JSON.stringify(comentarios));
        }
    }
}
let comentarioanalizado;
const CargaComentario = () => { 
    let comentarios = CrearComentario ();
    if(!localStorage.getItem("comentarios")){
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }else{
        comentarioanalizado = JSON.parse(localStorage.getItem("comentarios"));
    }
}
document.querySelector("#boton2").addEventListener('click',(event) => {
    event.preventDefault();
    AgregarNuevoComentarioLocal();
})
CargaComentario();