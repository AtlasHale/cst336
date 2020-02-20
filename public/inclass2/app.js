var queryTodos  = $("#query-todos-button");

queryTodos.on("click", function(){
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    dataType: "json",
    success: function(data) {
        console.log(data)
        var falseRadio = $("input[id='falseRadio']:checked").val();
        console.log(falseRadio);
        var trueRadio = $("input[id='trueRadio']:checked").val();
        console.log(trueRadio);
        $.each(data, function( key, value) {
          if(value.completed == false && falseRadio == "on"){
            console.log(value.title);
            $("#results").html("Completed Todos: False");
            $("#results").append("value.title");
            $("#results").append("<br/>");
            $("#results").addClass("result-class")
          }
          else if(value.completed == true && trueRadio == "on"){
            console.log(value.title + value.completed);
            $("#results").html("Completed Todos: False");
            $("#results").append("value.title");
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
