/*global $,console*/

$(function () {
    
   
    "use strict";
    
    var widthblue  = $(".upper-bar").innerHeight(),
    
        widthwhite = $(".navbar").innerHeight(),
        
        wofw       = $(window).height();
    
    $(".slider,.carousel-item").height(wofw - (widthblue + widthwhite));
    
    
    
    
    
   
    
    
    
});
