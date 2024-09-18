
const calcularsuma = () => {
    let n1 = document.getElementById('txtnum1').value
    let n2 = document.getElementById('txtnum2').value
    let s = parseFloat(n1) + parseFloat(n2)
    let r = parseFloat(n1) + parseFloat(n2)
    let m = parseFloat(n1) + parseFloat(n2)
    console.log(s)
    alert(s)
    document.getElementById('res').innerHTML="La suma es "+s+ "</b>"
    
}

const calcularresta = () => {
    let n1 = document.getElementById('txtnum1').value
    let n2 = document.getElementById('txtnum2').value
    let r = parseFloat(n1) - parseFloat(n2)
    
    console.log(r)
    alert(r)
    document.getElementById('res').innerHTML="La suma es "+r+ "</b>"
}

const calcularmultipliacion = () => {
    let n1 = document.getElementById('txtnum1').value
    let n2 = document.getElementById('txtnum2').value
    let m = parseFloat(n1) * parseFloat(n2)
    
    console.log(m)
    alert(m)
    document.getElementById('res').innerHTML="La suma es "+m+ "</b>"
}

const calculardivision = () => {
    let n1 = document.getElementById('txtnum1').value
    let n2 = document.getElementById('txtnum2').value
    let d = parseFloat(n1) / parseFloat(n2)
    if (n2 == 0) {
        alert("No puede dividir un numero entre 0")
        document.getElementById('res').innerHTML="No puede dividir un numero entre 0"
    }else{
        console.log(d)
        alert(d)
        document.getElementById('res').innerHTML="La suma es "+d+ "</b>"
    }
    
}



const limpiar = () => {
    txtnum1.value = ""
    txtnum2.value = ""
    document.getElementById('res').innerHTML=""

}

const salir = () => {
    result = confirm("Desea salir de la pagina")
    if (result == 1) {
        window.location.href = "about:blank"
    }
}

