var animalArray = ["Pigs", "Cows", "Sheep", "Goats", "Geese"];

$(document).ready(function() {
    for (var i = 0; i < animalArray.length; i++) {
        $("#animal-buttons").append("<button type='button' onclick='searchGif(\"" + animalArray[i] + "\")' class='btn btn-primary' value=' " + animalArray[i] + "'> " + animalArray[i] + " </button>");
    }
});

function animalButtonClicked() {
    var userInput = $('#animal-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#animal-input').val();

    if (userInput) {
        $('#animal-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=dc6zaTOxFJmzC',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}

function displayGif(response) {
    $('#animals').empty();
    for (var i = 0; i < 10; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">' + rating + "<br>";

        image = '<div class="col-md-4">' + image + "</div>";
        $('#animals').append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}