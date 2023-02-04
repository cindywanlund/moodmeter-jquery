$(document).ready(function() {
    /* Mood 1, worst */
    $('body').on('click', '.fa-tired', function() {
        $('#first-inner-container').hide();
        $('#tired-inner-container').show();

        $('body').on('click', '.email-button', function() {
            $('#tired-inner-container').hide();
            $('#email-inner-container').show();
         });

        $('body').on('click', '.close-popup', function() {
            $('#tired-inner-container, #email-inner-container').hide();
            $('#first-inner-container').show();
         });
     });


     /* Mood 5, best */ 
     $('body').on('click', '.fa-face-grin-wide', function() {
        $('#first-inner-container').hide();
        $('#grin-wide-inner-container').show();

        $('body').on('click', '.close-popup', function() {
            $('#grin-wide-inner-container').hide();
            $('#first-inner-container').show();
         });
     });
});