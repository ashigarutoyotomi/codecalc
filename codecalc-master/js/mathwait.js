var btn = document.querySelector("#doCalc");
btn.addEventListener("click", () => {
    var Xvals = document.querySelector("#mathValX").value.trim();
    if (/[a-z]+/.test(Xvals)) {
        alert("the field cant contain any of symbols: a-z, !, @, $,# and others.Only numbers!");
        return false;
    } else {
        Xvals = Xvals.replace(/\s{2,}/, " ");
        xArr = Xvals.split(" ");
    }
    var Pvals = document.querySelector("#mathValP").value.trim();
    if (/[a-z]+/.test(Pvals)) {
        alert("the field cant contain any of symbols: a-z, !, @, $,# and others. Only numbers!");
        return false;
    } else {
        Pvals = Pvals.replace(/\s{2,}/, " ");
        pArr = Pvals.split(" ");
    }
    if (!(pArr.length == xArr.length)) {
        alert("u forgot about the length!");
        return false;
    }
    var ans = 0;
    for (let i = 0; i < pArr.length; i++) {
        ans += (pArr[i] * xArr[i]);
    }
    Xvals.value = "";
    Pvals.value = "";
    disper = 0;
    for (let i = 0; i < xArr.length; i++) {
        disper += (((Number(xArr[i]) - ans) ^ 2) * Number(pArr[i]));
    }
    disper = Math.abs(disper);
    let midQuad = Math.sqrt(disper);
    alert("math wait is: " + ans + ". dispersion is: " + disper + ". middle quadratic await is: " + midQuad);
    var step = document.querySelector('#step').value;    
    if (/\d+/.test(step)) {        
        step = Number(step);
        var M1 = 0;

        for (let i = 0; i < pArr.length; i++) {
            M1 += (pArr[i]*xArr[i]);        }
        
        var M2 = 0;
        for (let i = 0; i < pArr.length; i++) {
            M2 += (pArr[i]*(xArr[i])^2);
        }
        var M3 = 0;
        for (let i = 0; i < pArr.length; i++) {
            M3 += (pArr[i]*(xArr[i])^3);
        }
        var M4 = 0;
        for (let i = 0; i < pArr.length; i++) {
            M4 += (pArr[i]*(xArr[i])^4);
        }
        var m3 = (M3 -(3*M1*M2)+(2*(M1^2)))*(step^3);
        var m4 = (M4 -(4*M1*M3)+(6*(M1^2)*M2)-(3*(M1^4)))*(step^4);
        var as = (m3/(disper^3));
        as = Math.abs(as);
        var ek = ((m4/(disper^4))-3);
        ek = Math.abs(ek);
        alert("assymetry: "+as +" excess: "+ek);
    }    
});