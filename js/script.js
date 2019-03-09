/*global $, console*/


/* jq */
$(document).ready(function () {
    
    "use strict";
    
  
    function showtime() {
    

        var date1 = new Date(),
    
            hours = date1.getHours(),
    
            minutes = date1.getMinutes(),
    
            seconds = date1.getSeconds();
    
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        document.getElementById("available").textContent = hours + ":" + minutes + ":" + seconds;
        
        if ((hours > 13) && (hours < 22)) {
            
            document.getElementById("available2").textContent = "Available Now";
        } else {
            document.getElementById("available2").textContent = "Sorry, we arn't available Now , will be at 2 PM";
            $(".available2").css("color", "#b31010");
            $(".available").css("color", "#b31010");
        }
            
    
    }


    window.onload = function () {
    
        setInterval(showtime, 500);
    
    

    };
    
        
        /*
        
        var textvar = "hello guys , i'm abdallah magdy , i'm a front end developer",

    buttonvar = document.getElementById("btn1"),
    
    i = 0;

buttonvar.onclick = function () {
    
    "use strict";
    
    var typewriter = setInterval(function () {
    
   
    
        document.getElementById("d1").textContent += textvar[i];
    
        i = i + 1;
    
        if (i > textvar.length - 1) {
            clearInterval(typewriter);
        }
    
    
    }, 200);
};
        
        */
    
    
    $(window).scroll(function(){
      if($(window).scrollTop()>100){
         $(".intro").fadeIn(1200);
      }

});
    /*
    scroll to an element
    */
    $(".leftside .nav-item .nav-link").click(function (e) {
        
        e.preventDefault(); // 
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    });
    
    
    // get started btn
    $(".btnforstart").click(function (e) {
        e.preventDefault(); // 
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    });
       
    // enroll now
    $("#btncard1").click(function () {
       
        document.getElementById("btncard1").textContent = "Enrolled";
        prompt("Please , Enter your email");
        alert("Thanks for your trust in us \nAn email will send to you within 1 hour");
        $('#btncard1').css("color","#bbb");
        
    });
    
     $("#btncard2").click(function () {
       
        document.getElementById("btncard2").textContent = "Enrolled";
         prompt("Please , Enter your email");
        alert("Thanks for your trust in us \nAn email will send to you within 1 hour");
        $('#btncard2').css("color","#bbb");
    });
    
     $("#btncard3").click(function () {
       
        document.getElementById("btncard3").textContent = "Enrolled";
         prompt("Please , Enter your email");
         alert("Thanks for your trust in us \nAn email will send to you within 1 hour");
        $('#btncard3').css("color","#bbb");
    });
    
     $("#btncard4").click(function () {
       
        document.getElementById("btncard4").textContent = "Enrolled";
         prompt("Please , Enter your email");
         alert("Thanks for your trust in us \nAn email will send to you within 1 hour");
        $('#btncard4').css("color","#bbb");
    });
    
    
    $(".moredt1").click(function () {
        
        $(".d1").fadeToggle(1000);
    });
    
     $(".back1").click(function () {
        
        $(".d1").fadeToggle(1000);
    });
    
     $(".moredt2").click(function () {
        
        $(".d2").fadeToggle(1000);
    });
    
     $(".back2").click(function () {
        
        $(".d2").fadeToggle(1000);
    });
     $(".moredt3").click(function () {
        
        $(".d3").fadeToggle(1000);
    });
    
     $(".back3").click(function () {
        
        $(".d3").fadeToggle(1000);
    });
     $(".moredt4").click(function () {
        
        $(".d4").fadeToggle(1000);
    });
     $(".back4").click(function () {
        
        $(".d4").fadeToggle(1000);
    });
    
   
    
    
});


    
