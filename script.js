document.getElementsByTagName("img")[0].onclick = function(){
  var img = document.getElementsByTagName("img")[0];
  if(img.src.indexOf("uni.ipeg.jpeg") >= 0) img.src = "corn.png";
  else img.src = "uni.ipeg.jpeg";
}
