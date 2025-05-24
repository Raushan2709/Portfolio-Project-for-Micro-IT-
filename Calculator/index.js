let display=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');

let buttonArray=Array.from(buttons);
let string ='';

buttonArray.forEach(btn=> {
    btn.addEventListener('click',(e)=>
    {
        if(e.target.innerHTML=='DEL'){      // reverse deletion of Element
            string=string.substring(0,string.length-1);
            display.value=string;

        }
        else if(e.target.innerHTML == 'AC'){        // All clear
            string='';
            display.value=string;
        }
        else if (e.target.innerHTML == '='){    //using eval function in Js
            string = eval(string);
            display.value=string;

        }
        else{                                   // Adding more element by side
            string +=e.target.innerHTML;
            display.value=string;
        }

    });
});

