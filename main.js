const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) )
    {
        block_image_block = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    
    }
	
    fabric.Image.fromURL(get_image,function(Img) )
}

function playSound(){
	x.play();
}
