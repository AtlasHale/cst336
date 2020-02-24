var queryTodos  = $("#query-todos-button");

queryTodos.on("click", function(){
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    success: function(data) {
        var falseRadio = $("input[id='falseRadio']:checked").val();
        var trueRadio = $("input[id='trueRadio']:checked").val();
        $("#results").addClass("result-class")
        if(falseRadio == "on"){
            $("#results").html("<h5>Completed Todos: False<h5>");
        }
        else if(trueRadio == "on"){
            $("#results").html("<h5>Completed Todos: True</h5>");
        }
        $.each(data, function( key, value) {
          if(value.completed == false && falseRadio == "on"){
            console.log(value.title);
            $("#results").append(value.title);
            $("#results").append("<br/>");
          }
          else if(value.completed == true && trueRadio == "on"){
            console.log(value.title + value.completed);
            $("#results").append(value.title);
            $("#results").append("<br/>");
          }
        });
    },
    error: function(e) {
      $("#results").html("An error occurred during your request: " +  e.status + " " + e.statusText);
      $("#results").append("error");
    }
  });
});
