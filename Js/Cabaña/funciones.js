function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let id = $("#id").val();
    let brand = $("#brand").val();
    let rooms = $("#rooms").val();
    let category = $("#category").val();
    let name = $("#name").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#id").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brand").focus();
        return false;
    }else if( validaesVacio(rooms)) {  
        errores="rooms vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#rooms").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="category vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validarEditar(){
    //obtiene valores
    let id = $("#idEdit").val();
    let brand = $("#brandEdit").val();
    let rooms = $("#roomsEdit").val();
    let category = $("#categoryEdit").val();
    let name = $("#nameEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(rooms)) {  
        errores="rooms vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#roomsEdit").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="category vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#categoryEdit").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
    return true;
}