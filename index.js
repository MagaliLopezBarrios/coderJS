let form=[];
let submitbutton=document.getElementById("submitInput");

submitbutton.onclick = () => {

    form.unshift({nombre: document.getElementById("nombreInput").value, apellido: document.getElementById("apellidoInput").value, mail: document.getElementById("mailInput").value});

    if(form[0].nombre=="" || form[0].apellido=="" || form[0].mail==""){
        alert("No puede dejar casillas en blanco");
    }

    if(form[0].mail.search("@hotmail")==-1 && form[0].mail.search("@gmail")==-1 && form[0].mail.search("@yahoo")==-1 && form[0].mail.search("@live")==-1){
        alert("El email ingresado es inválido");
    }
    
}

