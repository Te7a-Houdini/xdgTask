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

    }



});

