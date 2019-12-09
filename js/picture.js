var picture = document.querySelector('canvas#picture');
picture.width = 640;
picture.height = 480;

function downLoad(url){
    picture.getContext('2d').drawImage(localVideo, 0, 0, picture.width, picture.height);
    var oA = document.createElement("a");
    oA.download = 'photo';// 设置下载的文件名，默认是'下载'
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下载之后把创建的元素删除
}

document.querySelector("button#photo").onclick = function (){
    downLoad(picture.toDataURL("image/jpeg"));
}