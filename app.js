window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var fileInput = document.getElementById("image");
    var img = new Image();

    fileInput.onchange = function(evt){
        var files = evt.target.files; // FileList object
	    var file = files[0];
	    
        var reader = new FileReader();
        // Read in the image file as a data URL.
        reader.onload = function(evt){
                img.src = evt.target.result;
                reader.readAsDataURL(file);
                context.drawImage(img,100,100);
            
	    }    
    }
};

// var openFile = function(event) {
//     var input = event.target;

//     var reader = new FileReader();
//     reader.onload = function(){
//       var dataURL = reader.result;
//       var output = document.getElementById('canvas');
//       output.src = dataURL;
//     };
//     reader.readAsDataURL(input.files[0]);
//   };