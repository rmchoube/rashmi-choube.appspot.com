$(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
    });
$(document).ready(function(){
      $('.slider').slider({full_width: true,height:500, interval:5000,
    transition:800,});
    });
      

      $(document).ready(function(){
      $('.carousel').carousel();
    });

       $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
  
//tmh   
   $('.modal-trigger').leanModal({
      ready: function() { $('.carousel').carousel('next'); }, // Callback for Modal open
     
    }
  );

   $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

 