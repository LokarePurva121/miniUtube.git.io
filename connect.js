$(document).ready(function()
{
var API_KEY = "AIzaSyDtNnOTV5bY6MDjIxlZQzSgv0V9RFG4aPQ"
var video = ''
$("#form").submit(function(event)
{
event.preventDefault()
//alert("form is submitted")
var search = $("#search").val()
videoSearch(API_KEY,search,5)
})

function videoSearch(key,search,maxResults)
   {
 $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
    console.log(data)
    data.items.forEach(item => {

    video =`<iframe width="25%" height="100%" src="http://www.youtube.com/embed/${item.id.videoId}"frameborder="0" allowfullscreen></iframe>&nbsp&nbsp`
          $("#videos").append(video)
      });
    })      
   }
})

