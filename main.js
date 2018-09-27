function valuefv(pv,i,n){
    return pv*((1+i)**n);
}
function valuepv(fv,i,n){
    return fv*((1+i)**(-n));
}
function valuepv2(a,i,n){
    return a*((((1+i)**n) -1 )/(i*((1+i)**n)));
}
function valuea(p,i,n){
    return p*((i*((1+i)**n))/(((1+i)**n)-1));
}




function Calculate(){
    var i = parseFloat(document.getElementById("i_data").value);
    var a = parseFloat(document.getElementById("a_data").value);
    var n = parseFloat(document.getElementById("n_data").value);
    var pv =parseFloat(document.getElementById("pv_data").value);
    var fv =parseFloat(document.getElementById("fv_data").value);
    var option = parseInt(document.getElementById("op").value);
    var ansfield = document.getElementById("ans");
    ansfield.innerHTML = "<h6>Answer</h6>";
    var ans;
    var anselement = document.createElement("h3");

    console.log(i)
    console.log(n)
    console.log(pv)
    switch(option){
        case 2:
            ans = Math.round(valuea(pv,i,n));
            break
        case 4:
            if(isNaN(a) && !(isNaN(fv))){
                ans = Math.round(valuepv(fv,i,n));
            }else{
                ans = Math.round(valuepv2(a,i,n));
            }
            ans
            break;
        case 5:
            ans = Math.round(valuefv(pv,i,n));
            break;
        default:
            ans = "Select a correct option"
    }


    if(fv == ""){
        
    }
    anselement.innerText = "$" + ans;
    ansfield.appendChild(anselement);
    console.log("in");
    console.log(ans);
}


    
    