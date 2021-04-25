const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
           theme.style.setProperty("--theme-color", "rgb 79, 236, 65");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "rgb 192, 29, 40");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "rgb 255, 215, 105");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "rgb 96, 34, 220");

        }
        else{
            theme.style.setProperty("--theme-color", "rgb 44, 167, 220");

        }
    });
});