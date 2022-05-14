const videoElement= document.getElementById('video');
const  button= document.getElementById('button');
  

// prompt to select media stream, pass to video element, then play

async function selectMediaStrem(){
    try {
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
        videoElement.play();
        };
    } catch (error){
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled=true;
    // start picture in picture
    await  videoElement.requestPictureInPicture();
    // reser button
    button.disabled=false;


});


// on load
selectMediaStrem();