(function($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    //mario carrizales 09-15-2017
    //navbar drop-down button fix
    /* $(".navbar-toggler").on("click", function(){
        setTimeout(function(){
            if($("#navbarResponsive").hasClass("show")){
                $("#mainNav").css("background","#000");  
            }else{
                $("#mainNav").css("background","none");  
            } 
        }, 1000);

    });*/

    //splash scrolling title
    var all_flip_divs = $("#flip").children();
    /* for(let i=0;i<all_flip_divs.length;i++){
            //console.log(all_flip_divs[i]);
        hideFor3Seconds(all_flip_divs[i])
        .then(showFor3Seconds(all_flip_divs[i]));
    } */
    //hideFor3Seconds(all_flip_divs[0])
    //   .then(showFor3Seconds(all_flip_divs[0]));
    var scrolling_elem=0;
    var scrolling_elem_switch="on";
    delay();
    function delay(){
        if(scrolling_elem_switch==="on"){
            delayHide();
            if(scrolling_elem>1){
                scrolling_elem_switch = "off";
                scrolling_elem=0;
            }
        }else if(scrolling_elem_switch==="off"){
            delayShow();  
            if(scrolling_elem>1){
                scrolling_elem_switch = "on";
                scrolling_elem=0;
            }
        }
    }
    function delayHide() {
        setTimeout(hideFor3Seconds, 3000);
    }

    function hideFor3Seconds(){
        all_flip_divs[scrolling_elem].style.display = "none";
        scrolling_elem++;
        delay();
    }
    function delayShow() {
        setTimeout(showFor3Seconds, 3000);
    }

    function showFor3Seconds(){
        all_flip_divs[scrolling_elem].style.display = "block";
        scrolling_elem++;
        delay();
    }
    //for resizing elements based on screen width
    //@420
    //.material-icons.display-4 from 3.5rem to 2.5rem
    //.carousel-caption.h2 from 43m to 2em
    //.btn.btn-success.btn-lg from 1.25rem to 1rem
    
    //services cards fix mobile - desktop @420
    var compliance_card = document.getElementsByClassName("card-services")[2];
    var compliance_card_title = $(compliance_card).find(".card-title");
    var reporting_card = document.getElementsByClassName("card-services")[3];
    var reporting_card_title = $(reporting_card).find(".card-title");
    //class switching
    var elements_to_switch = {
        switch_420:{
            switch_elems:[".service-header-h2",".service-info",compliance_card,compliance_card_title,reporting_card,reporting_card_title],
            elems_original_class:["display-3", "h2","bg-white","text-dark", "bg-primary","text-white"],
            switch_elems_to:["display-5", "h5","bg-primary","text-white","bg-white","text-dark"]
        }
    }; 
    $(window).on('resize', function(){
        classFix();
    });
    classFix();
    function classFix(){
        switchElem_420();
    }
    function switchElem_420(){
        if ($(window).width() < 420){
            for(var i=0;i<elements_to_switch.switch_420.switch_elems.length;i++){
                $(elements_to_switch.switch_420.switch_elems[i]).addClass(
                    elements_to_switch.switch_420.switch_elems_to[i]).removeClass(
                    elements_to_switch.switch_420.elems_original_class[i]);
            }
        }else{
            for(var i=0;i<elements_to_switch.switch_420.switch_elems.length;i++){
                $(elements_to_switch.switch_420.switch_elems[i]).addClass(
                    elements_to_switch.switch_420.elems_original_class[i]).removeClass(
                    elements_to_switch.switch_420.switch_elems_to[i]);
            }
        }
    }

})(jQuery); // End of use strict
