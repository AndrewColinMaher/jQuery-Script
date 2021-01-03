$(document).ready(function () {
    $("h2").addClass("underline");// underlines all <h2> elements
    $("ul").removeClass("border"); //adds a border to all lists
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");

});

$("p").click(function () {
    $("p").css("color", "red");
});

$("h2").hover(function () {
    $("h2").css("background", "lightblue");
});

$(".card-panel").mouseenter(function () {
    $("body").css("background-color", "black");
});

$(".card-panel").mouseleave(function () {
    $("body").css("background-color", "#e1e2e2");
});


$("#card-panel-1").click(function () {
    $("#card-panel-1").hide("slow");
});
$("#card-panel-2").click(function () {
    $("#card-panel-2").hide("medium");
});
$("#card-panel-3").click(function () {
    $("#card-panel-3").hide("fast");
});
$("#card-panel-4").click(function () {
    $("#card-panel-4").hide(3000);
});
