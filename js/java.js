CKEDITOR.replace('textarea_message', {language: 'fr', uiColor: '#EFEFEF'});
$(window).load(function(){
	$("#envoyer_email").click(function() {
		var mon_message = CKEDITOR.instances.textarea_message.getData();
		if (mon_message != '') {
			envoi_mail(mon_message);
		} else {
			alert("Votre message est vide, il n'est pas envoyé.");
		}
	});
	function envoi_mail(mon_message) {
		$("#div_patientez").addClass("active");
		var posting = $.post('post/mail.php', {
		nom: $("#input_nom").val(),
		email: $("#input_email").val(),
		sujet: $("#input_sujet").val(),
		message: mon_message}, 
		function(data) {
			console.log(data.envoye);
			if (data.envoye == 'oui') {
				alert('Votre message a bien été envoyé, nous nous efforcerons de vous répondre dans les plus brefs délais.');
				location.reload();
			}
			$("#div_patientez").removeClass("active");
		}, "json" );		
	};
	$("#div_langue img").click(function() {
		$("#input_langue").val($(this).attr('alt'));
		$("#form_langue").submit();
	});
	$("#link_livre").click(function(event) {
		event.preventDefault();
		$("#div_livre_1").addClass('active');
	});
	$("#fermer_livre").click(function(event) {
		event.preventDefault();
		$("#div_livre_1").removeClass();
	});
	$("#link_cgu").click(function(event) {
		event.preventDefault();
		$("#div_cgu_1").addClass('active');
	});
	$("#fermer_cgu").click(function(event) {
		event.preventDefault();
		$("#div_cgu_1").removeClass();
	});
	$("#div_cgu_1").click(function(event) {
		if (event.target.id == 'div_cgu_1') {$(this).removeClass();}
	});
	$("#link_cgv").click(function(event) {
		event.preventDefault();
		$("#div_cgv_1").addClass('active');
	});
	$("#fermer_cgv").click(function(event) {
		event.preventDefault();
		$("#div_cgv_1").removeClass();
	});
	$("#div_cgv_1").click(function(event) {
		if (event.target.id == 'div_cgv_1') {$(this).removeClass();}
	});	
	$("#menu_icon").click(function() {
		if ($("#nav_nav").hasClass("active")) {
			$(this).removeClass('active');
			$("#nav_nav").removeClass("active"); 
		} else {
			$(this).addClass('active');
			$("#nav_nav").addClass("active"); 
		} 
	}); 
	$("#nav_nav").click(function(evt) {
		if (evt.target.nodeName != "UL") {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active"); 
				$("#menu_icon").removeClass("active");
			} else {
				$(this).addClass("active");
				$("#menu_icon").addClass("active");
			} 
		}
	}); 
});