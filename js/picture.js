var picture = document.querySelector('canvas#picture');
picture.width = 320;
picture.height = 240;

// 加滤镜
var filterMap = {
    blur: "blur(3px)",
    grayscale: "grayscale(1)",
    invert: "invert(1)",
    sepia: "sepia(1)",
    none: "none"
  
  };

function showPic(){
    var context = picture.getContext('2d')
    var selectedFitler = document.querySelector("#filter").value
    picture.className = selectedFitler
    context.drawImage(localVideo, 0, 0, picture.width, picture.height)
}

document.querySelector("button#photo").onclick = function (){
    showPic()
}

document.querySelector("button#download").onclick = function (){
    showPic()
    var oA = document.createElement("a")
    oA.download = 'photo';// 设置下载的文件名，默认是'下载'
    oA.href = picture.toDataURL("image/jpeg")
    document.body.appendChild(oA)
    oA.click()
    oA.remove() // 下载之后把创建的元素删除
}