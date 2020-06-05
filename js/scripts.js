$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const company = $("input:radio[name=company]:checked").val();
    const service = $("input:radio[name=service]:checked").val();
    const newTo = $("input:radio[name=newTo]:checked").val();
    const appeal = $("input:radio[name=appeal]:checked").val();
    const time = $("input:radio[name=time]:checked").val();





    $("#story").show();