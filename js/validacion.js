/*$("#btnSubmit").click(function(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Complete todos los datos</a>'
    });
});*/

window.addEventListener('load',()=> {
    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const provincia = document.getElementById('provincia')
    const email = document.getElementById('email')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = ()=>{
        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        const provinciaValor = provincia.value.trim()
        const emailValor = email.value.trim()
        const mensajeValor = mensaje.value

        validacion(nombreValor,nombre);
        validacion(apellidoValor, apellido);
        validacion(provinciaValor, provincia );
        validacion(emailValor,email);
        //validacion(mensajeValor,mensaje);

       
    }
    const validacion = (campo, valor)=>{
        if(!campo){
            validaFalla(valor, 'Campo vacio')    
        }else{
            validaOk(valor)
        }   
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }


    const validaEmail = (email) => {
        return 
    }

})