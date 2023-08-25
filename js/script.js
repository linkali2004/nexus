$(document).ready(function () {  
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 400)
        {
            document.getElementById("navbar").classList.add("show");
        }
        else
        {
            document.getElementById("navbar").classList.remove("show");
        }
    });
});