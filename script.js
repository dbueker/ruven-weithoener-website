let video = document.getElementById("video");
let text = document.getElementById("videoButtonText");
let icon = document.getElementById("icon");

function mute()
{
if (video.muted)
    {
        video.muted = false;
        icon.src = "./images/SoundOff.png";
        text.innerHTML = "Stummschalten";
    }
    else 
    {
        video.muted = true;
        icon.src = "./images/SoundOn.png";
        text.innerHTML = "Musik anhören";
    }
}

// Image Gallery
                    
function displayNextImage() 
{
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("imageGallery").style.backgroundImage = images[x];
}

function startTimer() 
{
    setInterval(displayNextImage, 4500);
}

var images = [], x = -1;
images[0] = "url(./images/workshopImage-1.jpg)";
images[1] = "url(./images/workshopImage-2.jpg)";
images[2] = "url(./images/workshopImage-3.jpg)";