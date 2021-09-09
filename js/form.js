jQuery(document).ready(function() {

 jQuery(function($){ $('input[name=phn]').mask("+7 (999) 999-99-99");}); 
 
     $.validator.addMethod('validEml', function (value) {
    var regexp = /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/.exec(value);
            if (regexp != null)
            return true;
         else
              return false;
    }, '');

    
    $.validator.addMethod('validName', function (value) {
    var result = true;
    var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\:<>?0123456789";
    for (var i = 0; i < value.length; i++) {
      if (iChars.indexOf(value.charAt(i)) != -1) {
      return false;
      }
    }
    return result;
    }, '');


    $.validator.addMethod('reqPhn', function (value) {
    var result = true;
    if(value.indexOf("_") != -1 || value == "") 
      result = false;
    return result;
    }, '');



    $("form").each(function(){
      $(this).validate({
          rules:{
            yourname:{
              required: true,
              minlength: 3,
              maxlength: 35,
              validName: true
            }, 
            phn: {
              required: true, 
              reqPhn: true
            }
          },
          submitHandler: function(form) {
            form.submit();
          }
      });
    }); 
});
