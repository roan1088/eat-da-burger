// Make sure we wait to attach our handlers until the DOM is fully loaded.
    //
$(function() {
    $(".devour-burger").on("click", function(event) {
        const id = $(this).data("id");
    
        const newBurger = {
            devoured: $(this).data("devoured")
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurger
        }).then(
        function() {
            console.log("devoured the burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
    
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
        function() {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});