$(document).ready(function() {
    //MODAL
    $("#open_modal").click(function() {
        $("#modal_to_open").css(
            {
                "display": "block"
            }
        )
    });
    
    $("#open_modal").click(function() {
        $("#modal_to_open").css(
            {
                "display": "block"
            }
        )
    });

    //send mail with ajax

    $('#send-mail').click(function(e){
		e.preventDefault();
		var data = {
			email: $('#email').val(),
			name: $('#name').val(),
			message: $('#message').val()
		};
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#email').val("");
                    $('#name').val("");
                    $('#object').val(),
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#email').val("");
					$('#name').val("");
					$('#object').val("");
					$('#message').val("")
				}, 3000);
			}
		});
	});
});



