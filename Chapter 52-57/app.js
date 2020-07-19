function showImage(img){
  var modalImage = document.getElementById('modalImage');
  modalImage.src = img.src;
  
}

function zoomIn(){
    var para = document.getElementById('para');
    para.style.fontSize = '1.8em';
}
function zoomOut(){
    var para = document.getElementById('para');
    para.style.fontSize = '1em';
}



