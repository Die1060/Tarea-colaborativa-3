function ValidarTarjetaCredito() {

    let valor = document.querySelector("#numero").value;
    
    valor = quitarGuiones(valor);

    let p_alerta = document.querySelector(".alerta");
    p_alerta.style.display = "block";
    let mensaje = "";
    let numTarjeta = Number(valor);

    let tarjeta = [];
    tarjeta["valida"] = false;
    tarjeta["numero"] = valor;

    if (valor.length == 16) { 
        if (!isNaN(numTarjeta)) { 
            let i;
            let num = valor[0];
            let digitosIgual = true;
            for (i = 0; i < valor.length; i++) {

                if (num != valor[i]) { 
                    digitosIgual = false;
                    continue;
                }
            }
            if (digitosIgual == false) {
                tarjeta["valida"] = true;
                tarjeta["numero"] = numTarjeta;

                } else { //si tiene digitos diferentes
                    tarjeta["error"] = "El numero de tarjeta no debe contener el mismo digito";
                    mensaje = " ,  Erorr: " + tarjeta["error"];
            }
            
            <script>
    $(document).ready(function () {

$('#numero').mask('0000-0000-0000-0000');

$('#numero').change(function () {
  var valor = $(this).val();  
  $(this).val(valor);
});

});
</script>

        } else { //si no es numero
            tarjeta["error"] = "El numero de tarjeta contiene caracteres";

            mensaje = " ,  Erorr: " + tarjeta["error"];

        }

    } else { //si la longitud es diferente de 16
        tarjeta["error"] = "Longitud erronea";

        mensaje = " ,  Erorr: " + tarjeta["error"];
    }

    //Mostramos los resultados del objeto
    mensaje = "Valida: " + tarjeta["valida"] + " ,  Numero: " + tarjeta["numero"] + mensaje;
    p_alerta.textContent = mensaje;
}

function quitarGuiones(cadena){
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index] === '-')
            cadena = cadena.replace('-', '');
    }

    return cadena;
}
