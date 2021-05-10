$(document).ready(function(){

  $("#select").click(function(){
    var date = new Date($('#start').val());
    var date = date.getMonth();
    $("#tbody").html("");
    moment.locale("it");
    var startDate = moment(date);
    var daysInMonth = startDate.daysInMonth();
    var firstDay = (moment(startDate));
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    for (var i = 0; i < daysInMonth; i++){
      var momentDay = moment(firstDay).add(i, "d");
      var day = (moment(momentDay).format("Do dddd"));

      var context = {
        day: day,
        id: i
      };
      var html = template(context);
      $("#tbody").append(html);
    };

    var somma = 0;

    $("input").on("change",function(){
    var currentLine = $(this).attr("data-attribute");
    var first = $(".first"+currentLine).val();
    var first = first.replace(":", "");
    var first = parseInt(first);
    

    var second = $(".second"+currentLine).val();
    var second = second.replace(":", "");
    var second = parseInt(second);

    var third = $(".third"+currentLine).val();
    var third = third.replace(":", "");
    var third = parseInt(third);

    var fourth = $(".fourth"+currentLine).val();
    var fourth = fourth.replace(":", "");
    var fourth = parseInt(fourth);

    if (!isNaN(first) && !isNaN(second) && !isNaN(third) && !isNaN(fourth)) {
      var x = ((second - first) + (fourth - third)) / 100;
    } else if (!isNaN(first) && !isNaN(second)) {
      var x = (second - first) / 100;
      var h = Math.floor(x);
      var m = x % 1;
      var m = m / 60;
      var m = m * 100;
      var hour = h + m;


    } else if (!isNaN(third) && !isNaN(fourth)) {
      var x = (fourth - third) / 100;
    } else if (!isNaN(first) && !isNaN(fourth)) {
      var x = (fourth - first) / 100;
    };

    $(".result"+currentLine).html("");
    $(".result"+currentLine).append(x);

    });
  });

$("#aggiorna").click(function(){

  var sum = 0;
  $(".risultato").each(function(){
    var number = parseFloat($(this).text());
    sum += number;

    $("#somma").text(sum);
  });
});
});
