'use strict';

let btn = document.querySelector("#begin");
btn.addEventListener("click", () => {
  let start = document.querySelector("#start").value;
  start = Number(start);  
  let end = document.querySelector("#end").value;
  end = Number(end);
  let fun = document.querySelector("#func").value;  
  fun = fun.trim();

  if (/[!@#$%&\?,"><:_]/.test(fun)) {
    alert("the symbols like : \" / \\ , . ! @ # $ % ^ & * ( ) _ are not supported in function! input the valid expression");
    return false;
  } else if(isNaN(start) || isNaN(end)) {
    alert("the end and start should be a numeric values!");
    return false;
  }  else if (start >= end){
    alert("start must be less than end");
    return false;
  } else {
    fun = fun + ";";    
  } 
  let step = document.querySelector("#step").value;
  step = Number(step);
  var ans;
  for (let i = start; i <= end; i+=step) {
    var x = i;
  var y = eval(fun); 
    ans += "  " +x + "  " + y + " \n ";
  }   
  ans = ans.replace(/undefined/, "");  
  alert(ans);
  let ch  = document.createElement("p");
  ch.setAttribute("class","res");
  ch.textContent = ans;
  document.querySelector("div.to").appendChild(ch);
  return null;
});