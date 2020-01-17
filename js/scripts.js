
    $('#searchbutton').on('click', function getData() {
    var input = $("#searchtext").val()
  
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=oTtBtF7UxZQYt1D09suUm42WgB6PxM7w&limit=30");

    xhr.done(function(response) {
    console.log("success got data", response);

    var gifs = response.data

    for (i in gifs){
        $('.inner').append("<img src='"+gifs[i].images.original.url+"'/>")
    }
