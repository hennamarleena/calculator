let total = document.getElementById('display');
        let buttons = document.querySelectorAll('button');
        let clearButton = document.getElementById('clear');
        let history = document.getElementById('history');

        let string = "";
        let arr = Array.from(buttons);
        arr.forEach(button => {
            button.addEventListener('click', (e) =>{
                if(e.target.innerHTML == '='){
                    result = eval(string.replace(/x/g, "*").replace(/,/g, "."));
                    display.value = result;
                    history.innerHTML += string + "=" + result + "<br>";
                    string = "";
                }
                else{
                    string += e.target.innerHTML;
                    display.value = string;
                }
            })
        })

        clearButton.addEventListener("click", function(){
            display.value= "";
            string = "";
        })