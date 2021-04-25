const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
           theme.style.setProperty("--theme-color", "#ff1717");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#4eeb8f");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#f7c44c");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#7c1cd1");

        }
        else{
            theme.style.setProperty("--theme-color", "#4ec6eb");

        }
    });
});