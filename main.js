function checkFileType(source){
    let dotPosition = source.lastIndexOf('.');
    let ext = source.slice(dotPosition + 1);
    if(ext == 'png' || ext == 'jpeg' || ext == 'jpg' || ext == 'svg' || ext == 'gif' || ext == 'bmp' ){
        return `Graphic file`
    } else if(ext == 'txt' || ext == 'doc' || ext == 'docx' || ext == 'pdf' || ext == 'odt' || ext == 'rtf'){
        return `Text file`
    } else if(ext == 'mp3' || ext == 'wav' || ext == 'flac' || ext == 'aac'){
        return `Audio file`
    } else if(ext == 'mp4' || ext == 'avi' || ext == 'mkv' || ext == 'mov' || ext == 'wmv'){
        return `Video file`
    } else if(ext == 'zip' || ext == 'rar' || ext == 'tar' || ext == 'gz'){
        return `Archives file`
    } else if(ext == 'exe' || ext == 'app' || ext == 'sh' || ext == 'bat'){
        return `Program file`
    } else if(ext == 'csv' || ext == 'xls' || ext == 'xlsx' || ext == 'json' || ext == 'xml'){
        return `Data file`
    } else if(ext == 'sql' || ext == 'db' || ext == 'mdb' || ext == 'accdb'){
        return `Database file`
    } else if(ext == 'html' || ext == 'css' || ext == 'js' || ext == 'php'){
        return `Web file`
    } else if(ext == 'stl' || ext == 'obj' || ext == 'fbx' || ext == 'dae' || ext == 'blend' || ext == 'gltf'){
        return `3D-object file`
    } else{
        return `unknown file`
    }

}

let darkMod = false;
isDarkBTN.onclick = function(){
    if(darkMod == false){
        switchBox.style.marginLeft = '62%';
        wrap.style.backgroundColor = 'rgb(34, 34, 34)';
        customFileUpload.style.borderColor = 'rgb(194, 194, 194)';
        customFileUpload.style.color = 'rgb(194, 194, 194)';
        valueText.style.color = 'rgb(194, 194, 194)';
        textFile.style.color = 'rgb(194, 194, 194)';

        darkMod = true
    } else if(darkMod == true){
        switchBox.style.marginLeft = '2%';
        wrap.style.backgroundColor = 'transparent'; 
        customFileUpload.style.borderColor = 'black';
        customFileUpload.style.color = 'black';
        valueText.style.color = 'black';
        textFile.style.color = 'black';

        darkMod = false
    }
}


fileName.onchange = function(){
    valueText.innerHTML = 'it is: ' + checkFileType(fileName.value)
}
reload.onclick = function(){
    window.location.reload()
}

let contantVision = true;
contant.onclick = function(){
    if(contantVision == true){
        href.style.display = 'flex';
        setTimeout(() =>{
            href.style.color = 'black';
        }, 1000)
        contantVision = false;
    } else if(contantVision == false){
        href.style.display = 'none';
        setTimeout(() =>{
            href.style.color = 'transparent';
        }, 1000)
        contantVision = true;
    }
}


