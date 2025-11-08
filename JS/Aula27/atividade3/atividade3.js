function cadastrarUsuario(){
   const username = document.querySelector('#username').value

   const password = document.querySelector('#password').value
   
   const email = document.querySelector('#email').value

   const button = document.querySelector('button')

   const objetoUsuario = {
    username: username,
    password: password,
    email: email
   }

   fetch('https://fakestoreapi.com/users',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(objetoUsuario)
   })
   .then(response => response.json())
    .then(data => {
        if(username.lenght < 6 && password.lenght < 5){
            objetoUsuario = console.error('Erro no username ou password')
        }

        else{
            console.log(objetoUsuario)
        }
    })
}