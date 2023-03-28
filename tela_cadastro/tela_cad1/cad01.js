const container = document.querySelector('.container');
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const confirmar_senha = document.querySelector('#confirme-password');


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    //valida nome (beta)
    if(nome.value === ""){
        alert("Envia a porra do seu nome");
        return;
    }
    //valida email(beta)
    if(email.value === "" || !isEmailValido(email.value)){
        alert("Bota teu email");
        return;
    }

    //verifica a senha(beta)
    if(senha.value === "" || !validaPassword(password.value)){
        alert("A senha precisa de 5 characteres, sendo um numero e um caracter maiusculo");
        return;
    }

    //confirma a senha(beta)
    if(confirmar_senha.value === "" || confirmaPassword(Confpassword.value) != validaPassword){
        alert("as senhas não são iguais");
        return;
    }

});

//Funcao valida email
function isEmailValido(email){
    const emailRegex = new RegExp(
        //usario@host.com e etc
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
}

//Funcao valida senha(não é a confirmação)
function validaPassword(password){
    const senhaRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    );
    if (senhaRegex.test(password)){
        return true;
    }else{
        return false;
    }
}
function confirmaPassword(Confpassword){
    const senhaConfRegex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{5,}$/
    );
    if (senhaConfRegex.test(Confpassword)){
        return true;
    }else{
        return false;
    }
}