$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.reviews').carousel({
        numvisible:7,
        shift: 50,
        padding:55,
    });
    $('.slider').slider({full_width:true});
  });

  function toggleModal(){
      var instance = M.Modal.getInstance($('#modal2'))
      instance.open();
  }
          