document.getElementById("Register").addEventListener("click",register);
document.getElementById("IniciarSesion").addEventListener("click",iniciarSesion);

window.addEventListener("resize", anchoPagina);

const ContenedorLoginRegister=document.querySelector(".ContenedorLoginRegister");
const FormularioLogin=document.querySelector(".FormLogin");
const FormularioRegister=document.querySelector(".FormRegister");
const CajaTraseraLogin=document.querySelector(".CajaTraseraLogin");
const CajaTraseraRegister=document.querySelector(".CajaTraseraRegister");

function anchoPagina(){
    if(window.innerWidth > 850){
        CajaTraseraLogin.style.display = "block";
        CajaTraseraRegister.style.display= "block";
    }else{
        CajaTraseraRegister.style.display = "block";
        CajaTraseraRegister.style.opacity = "1";
        CajaTraseraLogin.style.display = "none";
        FormularioLogin.style.display = "block";
        FormularioRegister.style.display = "none";
        ContenedorLoginRegister.style.left = "0px";
    }

}
anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 850){
        FormularioRegister.style.display = "none";
        ContenedorLoginRegister.style.left = "10px";
        FormularioLogin.style.display="block";
        CajaTraseraRegister.style.opacity = "1";
        CajaTraseraLogin.style.opacity="0";

    }else{
        FormularioRegister.style.display = "none";
        ContenedorLoginRegister.style.left = "0px";
        FormularioLogin.style.display="block";
        CajaTraseraRegister.style.display ="block";
        CajaTraseraLogin.style.display="none";

    }
    }

function register(){
    if(window.innerWidth > 850){
        FormularioRegister.style.display = "block";
        ContenedorLoginRegister.style.left = "410px";
    FormularioLogin.style.display="none";
    CajaTraseraRegister.style.opacity = "0";
    CajaTraseraLogin.style.opacity="1";

    } else{
        FormularioRegister.style.display = "block";
    ContenedorLoginRegister.style.left = "0px";
    FormularioLogin.style.display="none";
    CajaTraseraRegister.style.display = "none";
    CajaTraseraLogin.style.display="block";
    CajaTraseraLogin.style.opacity="1";

    }
    
    }