(function(window){
	$('#take-picture').click(function(){
		var cameraOptions = {
			quality: 90,
			destinationType: Camera.DestinationType.FILE_URI,
			encodingType: camera.EncodingType.JPEG,
			targetWidth: 200,
			targetHeight: 350
		};

		navigator.user.getPicture(function(imageURI){
			var image = $("#photo");
			image.attr('src', imageURI);
			$("#share-container").show();

		}, function(errorMessage){
			alert("Error due to " + errorMessage);
		}, cameraOptions);

	});

	$('#share').click(function() {
		var photo_src = $('#photo').attr('src');
		var caption = $('caption').val();
		window.plugins.socialsharing.share(caption, null, photo_src, null);
	});
})(window);