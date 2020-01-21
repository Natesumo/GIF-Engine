function getData(){

    $('.inner').empty();  //Clears out container to show current search results

    var input = $("#searchtext").val();  //converts search text into readable value

    var amount = $("#gifamount").val(); //** for gif amount */

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=oTtBtF7UxZQYt1D09suUm42WgB6PxM7w&limit="+amount+"");

    xhr.done(function(response) {
        
        console.log("success got data", response); 

        var gifs = response.data;  // declares varible that converts results into data

        for (i in gifs)
        {
            $('.inner').append("<img class='gif' src='"+gifs[i].images.original.url+"'>")  //GIF Urls are 3 directories deep images/original/url
        }
});
    
}

var enterSearch = document.getElementById("searchtext");
searchtext.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        getData();
    }
});

var enterSearch = document.getElementById("gifamount");
gifamount.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        getData();
    }
});