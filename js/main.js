
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

loop:true,
autoplay:true,

dots:true,
responsive:responsive,

    });
  });
  const  responsive= {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
    
        items:2
    },
    980:{
        items:3
    }
    
    
      }


  AOS.init();



//   // menu section
// $(document).ready(function() {





//     var tabChange = function() {
//         var tabs = $('.nav-tabs > li');
//         var active = tabs.find('a').filter('.active');
//         var next = active.parent().next('li').length ? active.parent().next('li').find('a') : tabs.filter(':first-child').find('a');
//         // Use the Bootsrap tab show method
//         next.tab('show');
//     };
//     // Tab Cycle function
//     var tabCycle = setInterval(tabChange, 5000);

//     // Tab click event handler
//     $('a').on('click', function(e) {
//         e.preventDefault();
//         // Stop the cycle
//         clearInterval(tabCycle);
//         // Show the clicked tabs associated tab-pane
//         $(this).tab('show');
//         // Start the cycle again in a predefined amount of time
//         setTimeout(function() {
//             tabCycle = setInterval(tabChange, 5000);
//         }, 10000);
//     });
//     // document ready
// });