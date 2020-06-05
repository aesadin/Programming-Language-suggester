$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const company = $("input:radio[name=company]:checked").val();
    const service = $("input:radio[name=service]:checked").val();
    const newTo = $("input:radio[name=newTo]:checked").val();
    const appeal = $("input:radio[name=appeal]:checked").val();
    const time = $("input:radio[name=time]:checked").val();

    if (company === service && service === newTo) {
      $(".match").text(company);
      $("#result").show();
    } else if (service === newTo && newTo === appeal) {
      $(".match").text(service);
      $("#result").show();
    } else if (newTo === appeal && newTo === time) {
      $(".match").text(newTo);
      $("#result").show();
    } else {
      $(".match").text("Javascript");
      $("#result").show();
    }
  });
});


    $("#story").show();