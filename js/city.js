$( document ).ready(function() {

    var countryObjects = JSON.parse(localStorage.getItem("countryObjects"));


    interact('.tap-target')
            .on('tap', function (event) {
                var jqueryTabbedElement = $(event.currentTarget);

                if (jqueryTabbedElement.attr('taped') == true)
                {

                }

                else

                {
                    countryTab(jqueryTabbedElement);
                }

            });





    function countryTab(jqueryTabbedElement)
    {

       $('#wrapper').children().hide('slow');

        $('.circle-container').children().not('#'+jqueryTabbedElement.attr('id')).hide('slow');

        jqueryTabbedElement.attr('taped',true);

        localStorage.setItem("oldCountryLocation", JSON.stringify(jqueryTabbedElement.position()));

        jqueryTabbedElement.offset({top:20,left:90});

        $('.circle-container').show('slow');

        jqueryTabbedElement.show('slow');

        drawCities(jqueryTabbedElement)
    }


    function drawCities (countryJqueryObj)
    {

        topMagrin = countryJqueryObj.position().top + 100;

        screenWidth = $(window).width();

        cities = countryObjects[countryJqueryObj.text()];

        tempWidth = 0;


        for (i=0; i< cities.length; i ++)
        {
            tempWidth += 150;

            if (tempWidth  > screenWidth)
            {
                topMagrin +=100;
                tempWidth = 0;
            }

            newCity = $('<div  class="cityBalls bubble "><h4 class="cityName">'+cities[i]+'</h4></div>');
            newCity.offset({top:topMagrin , left:tempWidth});

            $('#wrapper').append(newCity);

            newCity.hide();
        }

        $('.cityBalls').show('slow');



    }

});

