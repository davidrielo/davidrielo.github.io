
jQuery(document).ready(function(){
	$('#submit').click(function(){
		//get input field values
        var user_name       = $('#name').val();
        var user_email      = $('#email').val();
        var user_message    = $('#comments').val();
        var user_captcha	= $('#captcha').val();

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		

		//simple validation ,ToDo regex
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){
           $('#name').css('border-bottom-color','#ee2a7b');
            proceed = false;
        }
        if(user_email==""){
            $('#email').css('border-bottom-color','#ee2a7b');
            proceed = false;
        }
        if(user_message=="") {  
            $('#comments').css('border-bottom-color','#ee2a7b');
            proceed = false;
        }
        if(user_captcha=="" || user_captcha!=='5') {  
            $('#captcha').css('border-bottom-color','#ee2a7b');
            proceed = false;
        }

         //everything looks good! proceed...
        if(proceed)
        {
            // alert('antes del post_data');
            post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};
            // alert('despues del post_data');
            //Ajax post data to server
            // alert('antes del $post');
			$('#submit').addClass("contact-loader");
			// .before('<img src="images/ajax-loader.gif" class="contact-loader" />')
			// .attr('disabled','disabled');
			$.post('mail.php', post_data, function(response){  
                 // alert('vuelve del mail.php del $post');
                //load json data from server and output message    
                if(response.type == 'error')
                {
                   document.getElementById('message').innerHTML = response.text;
                }else{
               
                    document.getElementById('message').innerHTML = response.text;
                    $('#message').slideDown('slow');
					$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					$('#cform').slideUp('slow'); 
                }
            }, 'json');
           
        }else if(user_captcha ==! "5" && user_captcha!= ""){
        	document.getElementById('message').innerHTML = ' Addition result is wrong';
        	$('#message').slideDown('slow');
        }
        else{ 
        	document.getElementById('message').innerHTML = ' Complete all fields before';
        	$('#message').slideDown('slow');
    	}

	});

});
	//reset previously set border colors and hide all message on .keyup()
    $("#name, #email, #comments").keyup(function() {
        $("#name, #email, #comments").css('border-color','');
        $("#message").slideUp('slow');
    });
}(jQuery));

