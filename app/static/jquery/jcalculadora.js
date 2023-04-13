// sentecias jquery
$("#btnsuma").click(procesar);
$("#btnresta").click(procesar);
$("#btnmultiplica").click(procesar);
$("#btndivide").click(procesar);
$("#btnmr").click(nuevo);

//funcion procesar
function procesar() {
    //variables
    var n1 = parseInt($("#num1").val());
    var n2 = parseInt($("#num2").val());
    var key = ""
    var res = 0
    key = this.value
    switch (key) {
        case "+":
            res = n1 + n2
            break
        case "-":
            res = n1 - n2
            break
        case "x":
            res = n1 * n2
            break
        case "/":
            res = n1 / n2
            break
    }
    //mostrar resultado
    $("#resultado").attr("value", res)

}

function nuevo(){
    //limpia cajas
    $("#num1").val("");
    $("#num2").val("");
    $("#resultado").attr("value","");
    $("#num1").val("").focus();

}
