var canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

rover_width = 100; rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10; rover_y = 10;

function add(){

    background_img = new Image();
 background_img.onload=uploadBackground;
 background_img.src=background_image;

 rover_img = new Image();
 rover_img.onload=uploadrover;
 rover_img.src=rover_image;

}


function uploadBackground(){

ctx.drawImage(background_img , 0 , 0, canvas.width , canvas.height);

}

function uploadrover(){

    ctx.drawImage(rover_image , 10 , 10, rover_width , rover_height);

}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) { 
    keyPressed = e.keyCode; console.log(keyPressed);
     if(keyPressed == '38') { up(); 
        console.log("up"); }

        if(keyPressed == '40') { down(); 
            console.log("down"); }

            if(keyPressed == '37') { left(); 
                console.log("left"); }

                if(keyPressed == '39') { right(); 
                    console.log("right"); }

                }



                function up() { if(rover_y >=0) { rover_y = rover_y - 10;
                    uploadBackground();

                    function down() { if(rover_y <=400) { rover_y =rover_y+ 10; console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }
function left() { if(rover_x >= 0) { rover_x =rover_x - 10; console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }
function right() { if(rover_x <= 600) { rover_x =rover_x + 10; console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }