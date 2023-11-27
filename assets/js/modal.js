$(document).ready(function(e) {
    // Initializing our modal.
    $('#myModal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false,
    });

    $(document).on("click", ".modalButton", function() {

        var ClickedButton = $(this).data("name");

        // You can make an ajax call here if you want. 
        // Get the data and append it to a modal body.


        $(".modal-body").html("<p>" + ClickedButton + "</p> <p>Some text in the modal.</p> ");
        $('#myModal').modal('show');
    });

});