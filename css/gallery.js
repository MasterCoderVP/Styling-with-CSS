function upDate(previewPic)
{
  var source=previewPic.getAttribute("src");
  document.getElementById("image").style.backgroundImage="url("+source+")";
  document.getElementById("image").innerHTML= previewPic.alt;
}
function unDo()
{
    var text="Hover over an image below to display here."; document.getElementById("image").style.backgroundImage="url('')";
    document.getElementById("image").innerHTML=text;
}