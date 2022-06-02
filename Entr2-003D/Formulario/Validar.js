function validar()
{
   var rut = document.formulario.txt_rut 
   var telefono = document.formulario.txt_telefono.value
   var nombre = document.formulario.txt_nombre.value
   var apellido = document.formulario.txt_apellido.value
   var comentario = document.formulario.txa_comentarios
   
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
       document.formulario.txt_apellidos.focus();
       return false;
   }
   if (comentario.length<3)
   {
       alert("Comentario debe tener al menos 3 caracteres")
       document.formulario.txa_comentarios.focus()
       return false;
   }

   // RUT debe tener entre 9 y 10 caracteres e incluir un guion y sin puntos
   if (rut.length < 9 || rut.length > 10)
   {
        alert("RUT debe tener entre 9 y 10 caracteres")
        document.formulario.txt_telefono.focus()
        return false;
   }

  

}