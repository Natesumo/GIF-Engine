function getData(){

    $('.inner').empty();

    var input = $("#searchtext").val();

    var amount = $("#gifamount").val();

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=oTtBtF7UxZQYt1D09suUm42WgB6PxM7w&limit="+amount+"");

    xhr.done(function(response) {
        
        console.log("success got data", response); 

        var gifs = response.data;

        for (i in gifs)
        {
            $('.inner').append("<img class='gif' src='"+gifs[i].images.original.url+"'>")
        }
        });
    }