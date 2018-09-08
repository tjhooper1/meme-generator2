window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var fileInput = document.getElementById("image");
    var topText = document.getElementById("topText");
    var bottomText = document.getElementById("bottomText");
    var img = document.createElement('img');

    fileInput.onchange = function(evt){
        var files = evt.target.files; // FileList object
	    var file = files[0];
        var reader = new FileReader();
        // Read in the image file as a data URL.
        reader.onload = function(){
                img.onload = function(){   
                    canvas.width = img.width;
                    canvas.height = img.height;
                    context.drawImage(img, 0,0);
                }
                img.src = reader.result;
                console.log(img.src);
                
                
            }    
            reader.readAsDataURL(file);
    }
    topText.addEventListener("input", (e) => {
        
    });
};

