function validar()
{
   var rut = document.formulario.txt_rut.value
   var telefono = document.formulario.txt_telefono.value
   var nombre = document.formulario.txt_nombre.value
   var apellido = document.formulario.txt_apellido.value
   var comentario = document.formulario.txa_comentarios.value

   var genero = ""
   var generoM = document.formulario.rbt_generoM.value
   var generoF = document.formulario.rbt_generoF.value

   var fecha = document.formulario.fecha.value

   if(generoM.checked)
   {
       genero = generoM
   }
   else{
       genero = generoF
   }

   // Validación de campo obligatorio
   if (rut.length == 0)
   {
        alert("RUT es un campo obligatorio")
        document.formulario.txt_rut.focus()
        return false;
   }
   if (telefono.length == 0)
   {
        alert("Número de telefono es un campo obligatorio")
        document.formulario.txt_telefono.focus()
        return false;
   }
   if (generoM.checked == false && generoF.checked == false)
   {
        alert("El campo Género es obligatorio")
        document.formulario.rbt_generoM.focus()
        return false;
   }
   if (fecha.length == 0)
   {
        alert("La fecha es obligatoria")
        document.formulario.fecha.focus()
        return false;
   }

   // Validación del Rut
   if (rut.length < 9 || rut.length > 10)
   {
        alert("RUT debe tener entre 9 y 10 caracteres")
        document.formulario.txt_rut.focus()
        return false;
   }

   var Fn = {
    validaRut : function (rutCompleto) {
      rutCompleto = rutCompleto.replace("‐","-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        return false;
      var tmp   = rutCompleto.split('-');
      var digv  = tmp[1]; 
      var rut   = tmp[0];
      if ( digv == 'K' ) digv = 'k' ;
      
      return (Fn.dv(rut) == digv );
    },
    dv : function(T){
      var M=0,S=1;
      for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
      return S?S-1:'k';
    }
    }

    if (Fn.validaRut( $("#txt_rut").val() )){
        
    } else {
        alert("Formato del Rut incorrecto")
        document.formulario.txt_rut.focus()
        return false;
    }
   
    // Validación del número de telefono
    if (telefono.substring(0,1)!="9")
    {
        alert("Teléfono debe comenzar con 9")
        document.formulario.txt_telefono.focus()
        return false;
    }

    if (telefono.length != 9)
    {
        alert("Teléfono debe tener 9 caracteres")
        document.formulario.txt_telefono.focus()
        return false;
    }

   if( !(/^\d{9}$/.test(telefono)) ) 
   {    
        alert("Teléfono debe tener solo números")
        document.formulario.txt_telefono.focus()
        return false;
   }

   // Atributos con menos de tres caracteres
   if (nombre.length<3)
   {
       alert("Nombre debe tener al menos 3 caracteres")
       document.formulario.txt_nombre.focus();
       return false;
   }
   if (apellido.length<3)
   {
       alert("Apellido debe tener al menos 3 caracteres")
       document.formulario.txt_apellido.focus();
       return false;
   }
   if (comentario.length<3)
   {
       alert("Comentario debe tener al menos 3 caracteres")
       document.formulario.txa_comentarios.focus()
       return false;
   }

    alert("Rut: " + rut + 
          " Teléfono: " + telefono + 
          " Nombre: " + nombre +
          " Apellido: " + apellido +
          " Género: " + genero + 
          " Fecha de nacimiento: " + fecha + 
          " Comentario: " + comentario)
}