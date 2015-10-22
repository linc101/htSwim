$(function(){
	$('.upload_button').on('click',function(){
		var val = $('.member_file').val();
		if(!!val){
			$('.users_form').submit();
		}
	});
});