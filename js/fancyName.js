$( document ).ready(function() {



    $('#submit').on('click',function () {

        var fancyName = $('#sessionId').val().trim();

        if (fancyName.length > 0 )
        {

            var countryId =  Math.floor((Math.random() * 5000) + 6)
            var bubbleHtml = '<br> <div id=\'country'+countryId+'\'   class="yes-drop bubble fancyNameBall   draggable "><h4 class="countryName">'+fancyName+'</h4></div>';
            $('#fancyNameBubble').append(bubbleHtml);
        }


    });

});