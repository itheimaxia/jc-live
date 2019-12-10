var buffer;

//当该函数被触发后，将数据压入到blob中
function handleDataAvailable(e){
        if(e && e.data && e.data.size > 0){
                buffer.push(e.data);
        }
}

function startRecord(){

        buffer = [];

        //设置录制下来的多媒体格式 
        var options = {
                mimeType: 'video/webm;codecs=vp8'
        }

        //判断浏览器是否支持录制
        if(!MediaRecorder.isTypeSupported(options.mimeType)){
                console.error(`${options.mimeType} is not supported!`);
                return;
        }

        try{
                //创建录制对象
                mediaRecorder = new MediaRecorder(window.stream, options);
        }catch(e){
                console.error('Failed to create MediaRecorder:', e);
                return;
        }

        //当有音视频数据来了之后触发该事件
        mediaRecorder.ondataavailable = handleDataAvailable;
        //开始录制
        mediaRecorder.start(10);
}

document.querySelector("button#record").onclick = function (){
    startRecord()
}

document.querySelector("button#recplay").onclick = function (){
    let recvideo = document.querySelector("video#recvideo")
    var blob = new Blob(buffer, {type: 'video/webm'});
    recvideo.src = window.URL.createObjectURL(blob);
    recvideo.srcObject = null;
    recvideo.controls = true;
    recvideo.play();
}
