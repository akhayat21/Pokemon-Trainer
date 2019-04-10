$(function() {
  $(".change-caught").on("click", function(event) {
    var id = $(this).data("id");
    var caughtStatus = $(this).data("caughtStatus");

    var Caughtstate = {
      caught: caughtStatus
    };

    $.ajax("/api/pokemon/" + id, {
      type: "PUT",
      data: Caughtstate
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newPokemon = {
      name: $("#newpoke").val().trim(),
      caught: 0
    };

    $.ajax("/api/pokemon", {
      type: "POST",
      data: newPokemon
    }).then(
      function() {
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
