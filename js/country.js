countryObjects = 0;
$( document ).ready(function() {


    $.ajax({
        'url' : 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json',
        'method' : 'GET',
        'success':function (response) {
           countryObjects = JSON.parse(response);

            localStorage.setItem("countryObjects", JSON.stringify(countryObjects));

            changeRandomCountries();

        }
    });



    function changeRandomCountries()
    {
        var numberOfCountries = Object.keys(countryObjects).length;

        randomCountryArr = [];
        for (i =0; i< 5; i++){
            $('#country'+ (i+1) ).show('slow');
            $('#country'+ (i+1) + ' > h4' )
                    .text(
                        Object.keys(countryObjects)
                                [
                                    Math.floor((Math.random() * numberOfCountries) + 0)
                                ]

                    );
        }


    }



});



