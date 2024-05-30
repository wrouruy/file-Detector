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
    } else{
        return `unknown file`
    }
    
}

console.log(checkFileType(`ujudhhfpi.png`))



fileName.onchange = function(){
    valueText.innerText = 'it is: ' + checkFileType(fileName.value)
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