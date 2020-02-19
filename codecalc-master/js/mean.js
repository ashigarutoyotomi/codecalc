document.querySelector('input').addEventListener('keydown', function (e) {
  let value = this.value.replace(/\s+/g, '');
  let isBackspace = e.key === 'Backspace'; 

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace === 30)) {
      e.preventDefault();
      alert("You can only write numbers and spaces");
      return false;
  }
});

function validateForm(){
    var element = document.forms["myForm"]["vals"].value;
    if (element == ""){
        alert("Enter the values");
        return false;
    } else{
        document.getElementById("vals").maxLength = "45";
        
        element = element.trim();
        element = element.replace(/\s{2,}/, " ");
        var res = element.split(" ");
        let len = res.length;
        let sum = res.reduce((a, b) => {
            return (Number(a)+Number(b));
        });
        let answer = sum / len;
        alert("arithmetical mean is: " +answer);
        document.querySelector('input').value = "";
        } 
}