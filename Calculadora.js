var v1=0,v2=0,res,texto="";
function captura1() {
    v1=document.getElementById('V1').value
    v1=Number.parseFloat(v1)
    if(isNaN(v1)) 
    v1=0
    
}
function Captura2() {
    v2=document.getElementById('V2').value
    v2=Number.parseFloat(v2)
    res=document.getElementById('rtd' )
    if(isNaN(v2))
    v2=0
}

function suma() {
    texto="El resultado de la suma es: "+(v1+v2)
    res.textContent=texto
     
}
function Resta() {
    texto="El resultado de la resta es: "+(v1-v2)
    res.textContent=texto
}
function Mult() {
    texto="El resultado de la multiplicacion es: "+(v1*v2)
    res.textContent=texto
    
}
function divi() {
    if(v2==0)
    {
        texto="No se puede dividir en 0:"
    } else
    { 
    
        texto="El resultado de la divicion es: "+(v1/v2) 
    }
    res.textContent=texto
}

//capturar historial i insertar html  c que elimine historial// 
//y una flecha atras que elimine uno por uno el historial//