const form = document.getElementById('form');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    checkForm();
    getEndereco();
   
})

function checkInputEmail(){
    const emailValue = email.value;
    if( emailValue == ''){
        errorInput(email, 'Preencha o campo email')
    }else{
        const formItem = email.parentElement;
        formItem.classList = 'mb-3'
    }
}


function checkInputPassword1(){
    const passwordValue = password1.value;
    if( passwordValue == ''){
        errorInput(password1, 'Preencha o campo Senha')
    }else{
        const formItem = password1.parentElement;
        formItem.classList = 'mb-3'
    }
}

function checkInputPassword2(){
    const password1Value = password1.value;
    const password2Value = password2.value;
    if( password1Value !== password2Value){
        errorInput(password2, 'Os campos precisam ser iguais')
    }else{
        const formItem = password2.parentElement;
        formItem.classList = 'mb-3'
    }
}

function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('p')

    textMessage.innerHTML = message;
    formItem.className = 'mb-3 error'
}

function checkForm() {
    checkInputEmail();
    checkInputPassword1();
    checkInputPassword2();
    const formItems = form.querySelectorAll('.mb-3');
    const isValid = [...formItems].every((item)=>{//verifica se o array esta passando pela condicao
        return item.className === 'mb-3';
    });  
    if(isValid){
        alert("Cadastrado com sucesso")
    }
}

function getEndereco(){
   let cep = document.querySelector('#cep').value;
   
   if(cep.length !== 8){
        alert(`CEP INVALIDO`);
        return;
   }
   let url=`https://viacep.com.br/ws/${cep}/json/`
   fetch(url).then(function(response) {
        response.json().then(function(data){
            exibeEndereco(data)
        })
   });
}

function exibeEndereco(dados) {
    let bairro = document.getElementById('bairro').value = dados.bairro; 
    let logradouro = document.getElementById('logradouro').value = dados.logradouro;
    let localidade = document.getElementById('localidade').value = dados.localidade;
    let uf = document.getElementById('uf').value = dados.uf;
    
    
}