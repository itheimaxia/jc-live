'use strict';

const mediaStreamContrains = {
    video : {
         width: 1280, 
         height: 720, 
         frameRate:15, 
        }, 
    audio : false
};

const localVideo = document.querySelector('video');

// navigator.mediaDevices.enumerateDevices()
// .then(function(devices) {
//   devices.forEach(function(device) {
//     console.log(device.kind + ": " + device.label +
//                 " id = " + device.deviceId);
//   });
// })
// .catch(function(err) {
//   console.log(err.name + ": " + err.message);
// });

navigator.mediaDevices.getUserMedia(mediaStreamContrains).then(
    mediaStream => {
        localVideo.srcObject = mediaStream;
    }
).catch(
    error => {
        console.log('navigator.getUserMedia error: ', error)
    }
);