var productos = [] ;


function listarProducto(){
    var filas = "";
    for(var i=0; i<productos.length; i++){
        var p = productos[i];
        filas = filas + "<tr>";
            filas = filas + "<td>"+p.id.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.nombre.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.marca.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.tenvase.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.nombrepro.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.pais.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.disponibilidad.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.cantidad.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.precio.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.tproducto.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.tcontenido.toUpperCase()+"</td>";
            filas = filas + "<td>"+p.tamaño.toUpperCase()+"</td>";
        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}

function limpiarCampos(x){
    if(x === 1){
        document.getElementById("txtid").value = "";
    }
    document.getElementById("txtnom").value = "";
    document.getElementById("txtmar").value = "";
    document.getElementById("txten").value = "";
    document.getElementById("txtnomp").value = "";
    document.getElementById("selpai").value = "";
    document.getElementById("diss").checked = true;
    document.getElementById("txtcan").value = "";
    document.getElementById("txtpre").value = "";
    document.getElementById("tippro").value = "";
    document.getElementById("gra").checked = true;
    document.getElementById("tam").value = "";
}

function consultar(){
    var id = document.getElementById("txtid").value;
    if(id.trim().length !== 5){
        alert("Digite Un Id Para Consultar, RECUERDE USAR MAYUSCULAS!! ");
        document.getElementById("txtid").value = "";
        document.getElementById("txtid").focus();
        
    }else{
        sw = 0;
        for(var i=0; i<productos.length; i++){
            var p = productos[i];
            if(id === p.id){
                sw = 1;
                document.getElementById("txtnom").value = p.nombre;
                document.getElementById("txtmar").value = p.marca;
                document.getElementById("txten").value = p.tenvase;
                document.getElementById("txtnomp").value = p.nombrepro;
                document.getElementById("selpai").value = p.pais;

                console.log(p.disponibilidad);
                if(p.disponibilidad === "SI"){
                    document.getElementById("diss").checked = true;
                }else if(p.disponibilidad === "NO"){
                    document.getElementById("disn").checked = true;
                }

                document.getElementById("txtcan").value = p.cantidad;
                document.getElementById("txtpre").value = p.precio;
                document.getElementById("tippro").value = p.tproducto;

                console.log(p.tcontenido);
                if(p.tcontenido === "GRAMOS"){
                    document.getElementById("gra").checked = true;
                }else if(p.tcontenido === "LITROS"){
                    document.getElementById("lit").checked = true;
                }

                document.getElementById("tam").value = p.tamaño;

                listarProducto();
            }
        }

        var msg = "";
        if(sw === 0){
            msg = msg + '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
            msg = msg + '<strong>Producto No Encontrado.</strong> Puede Registrar!.';
            msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg = msg + '</div>';
            limpiarCampos(2);
        }else if(sw === 1){
            msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg = msg + '<strong>Producto Encontrado.</strong> Puede Modificar o Eliminar!.';
            msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg = msg + '</div>';
        }

        document.getElementById("mensajes").innerHTML = msg;

    }
}

function addProducto(){
    var id = document.getElementById("txtid").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var mar = document.getElementById("txtmar").value.toUpperCase();
    var tipenv = document.getElementById("txten").value.toUpperCase();
    var nompro = document.getElementById("txtnomp").value.toUpperCase();
    var pais = document.getElementById("selpai").value.toUpperCase();

    var disp = "";
    if(document.getElementById("diss").checked === true){
        disp = "SI";
    }else if(document.getElementById("disn").checked === true){
        disp = "NO";
    }

    var can = document.getElementById("txtcan").value.toUpperCase();
    var pre = document.getElementById("txtpre").value.toUpperCase();
    var tpro = document.getElementById("tippro").value.toUpperCase();

    var tcon = "";
    if(document.getElementById("gra").checked === true){
        tcon = "GRAMOS";
    }else if(document.getElementById("lit").checked === true){
        tcon = "LITROS";
    }

    var tam = document.getElementById("tam").value.toUpperCase();

    var errores = ""

    if(id.trim().length !== 5){
        errores = errores + "El id debe tener un total de 5 caracteres .\n";
        console.log(id);
    }else{
        for(var i=0; i<productos.length; i++){
            var p = productos[i];
            if(id === p.id){
                errores = errores + "El id ("+id+") Ya Existe. Ingrese Un id Diferente.\n";
                break;
            }
        }
    }

    if(nom.trim().length<1 || nom.trim().length>30){
        errores = errores + "El Nombre Debe Tener Maximo 30 Caracteres.\n";
    }

    if(mar.trim().length<1 || mar.trim().length>30){
        errores = errores + "La Marca Debe Tener Maximo 30 Caracteres.\n";
    }

    if(tipenv.trim().length<1 || tipenv.trim().length>30){
        errores = errores + "El Tipo de Envase Debe Tener Maximo 30 Caracteres.\n";
    }

    if(nompro.trim().length<1 || nompro.trim().length>30){
        errores = errores + "El Nombre del Proveedor Debe Tener Maximo 30 Caracteres.\n";
    }

    if(pais.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Pais.\n";
    }

    if(can.trim().length === 0){
        errores = errores + "Debe Seleccionar Una Cantidad.\n";
    }

    if(pre.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Precio.\n";
    }

    if(tpro.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Tipo de Producto.\n";
    }

    if(tam.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Tamaño .\n";
    }

    if(errores !== ""){
        alert(errores);
    }else{
        var p = new Producto(id, nom, mar, tipenv, nompro, pais, disp, can, pre, tpro, tcon, tam);
        productos.push(p);

        var msg =   '<div class="alert alert-success alert-dismissible fade show" role="alert">';
        msg = msg + '<strong>Acción Ejecutada.</strong> Registro Completado Correctamente!.';
        msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        msg = msg + '</div>';

        document.getElementById("mensajes").innerHTML = msg;
        listarProducto();
        limpiarCampos(1)
    }
}

function updateProducto(){
    var id = document.getElementById("txtid").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var mar = document.getElementById("txtmar").value.toUpperCase();
    var tipenv = document.getElementById("txten").value.toUpperCase();
    var nompro = document.getElementById("txtnomp").value.toUpperCase();
    var pais = document.getElementById("selpai").value.toUpperCase();

    var disp = "";
    if(document.getElementById("diss").checked === true){
        disp = "SI";
    }else if(document.getElementById("disn").checked === true){
        disp = "NO";
    }

    var can = document.getElementById("txtcan").value.toUpperCase();
    var pre = document.getElementById("txtpre").value.toUpperCase();
    var tpro = document.getElementById("tippro").value.toUpperCase();

    var tcon = "";
    if(document.getElementById("gra").checked === true){
        tcon = "GRAMOS";
    }else if(document.getElementById("lit").checked === true){
        tcon = "LITROS";
    }

    var tam = document.getElementById("tam").value.toUpperCase();

    var errores = ""

    if(id.trim().length !== 5){
        alert("Digite Un Id Para Modificar El Registro.");
        errores = errores + "El id debe tener un total de 5 caracteres .\n";
        console.log(id);
    }

    if(nom.trim().length<1 || nom.trim().length>30){
        errores = errores + "El Nombre Debe Tener Maximo 30 Caracteres.\n";
    }

    if(mar.trim().length<1 || mar.trim().length>30){
        errores = errores + "La Marca Debe Tener Maximo 30 Caracteres.\n";
    }

    if(tipenv.trim().length<1 || tipenv.trim().length>30){
        errores = errores + "El Tipo de Envase Debe Tener Maximo 30 Caracteres.\n";
    }

    if(nompro.trim().length<1 || nompro.trim().length>30){
        errores = errores + "El Nombre del Proveedor Debe Tener Maximo 30 Caracteres.\n";
    }

    if(pais.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Pais.\n";
    }

    if(can.trim().length === 0){
        errores = errores + "Debe Seleccionar Una Cantidad.\n";
    }

    if(pre.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Precio.\n";
    }

    if(tpro.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Tipo de Producto.\n";
    }

    if(tam.trim().length === 0){
        errores = errores + "Debe Seleccionar Un Tamaño .\n";
    }

    if(errores !== ""){
        alert(errores);
    }else{
        var sw = 0;
        for(var i=0; i<productos.length; i++){
            var p = productos[i];
            if(id === p.id){
                var x = confirm("¿Está Seguro(a) De Querer Modificar Los Datos Del Registro Con Id ("+id+")?");
                if(x === true){
                    sw = 1;
                    productos[i].nombre = nom;
                    productos[i].marca = mar;
                    productos[i].tenvase = tipenv;
                    productos[i].nombrepro = nompro;
                    productos[i].pais = pais;
                    productos[i].disponibilidad = disp;
                    productos[i].cantidad = can;
                    productos[i].precio = pre;
                    productos[i].tproducto = tpro;
                    productos[i].tcontenido = tcon;
                    productos[i].tamaño = tam;             
                    break;
                }else{
                    sw = 2;
                    break;
                }
            }
        }

        var msg = '';
        if(sw === 0){
            msg = msg + '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
            msg = msg + '<strong>Rut No Encontrado.</strong> Imposible Modificar Datos!.';
            msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg = msg + '</div>';
        }else if(sw === 1){
            msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg = msg + '<strong>Rut Encontrado, Acción Ejecutada.</strong> Datos Modificados Correctamente!.';
            msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg = msg + '</div>';
        }else if(sw === 2){
            msg = '';
        }

        document.getElementById("mensajes").innerHTML = msg;
        listarProducto();
        limpiarCampos(1);
    }
}

function deleteProducto(){
    var id = document.getElementById("txtid").value.toUpperCase();

    if(id.trim().length !== 5){
        alert("Digite Un Id Para Eliminar El Registro.");
    }else{
        var sw = 0;
        for(var i=0; i<productos.length; i++){
            var p = productos[i];
            if(id === p.id){
                var x = confirm("¿Está Seguro(a) De Querer Eliminar El Registro Con Id ("+id+")?");
                if(x === true){
                    sw = 1;
                    productos.splice(i, 1);
                    break;
                }else{
                    sw = 2;
                    break;
                }
            }
        }

        var msg = '';
        if(sw === 0){
            msg = msg + '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
            msg = msg + '<strong>Id No Encontrado.</strong> Imposible Eliminar!.';
            msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg = msg + '</div>';
        }else if(sw === 1){
            msg = msg + '<div class="alert alert-success alert-dismissible fade show" role="alert">';
            msg = msg + '<strong>Acción Ejecutada.</strong> Registro Eliminado Correctamente!.';
            msg = msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
            msg = msg + '</div>';
        }else if(sw === 2){
            msg = '';
        }

        document.getElementById("mensajes").innerHTML = msg;
        listarProducto();
        limpiarCampos(1);

    }

}