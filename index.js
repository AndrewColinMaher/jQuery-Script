$("#button-card-1").click(function () {
    $("#par-1").toggle("slow");
});
$("#button-card-2").click(function () {
    $("#par-2").toggle("medium");
});
$("#button-card-3").click(function () {
    $("#par-3").toggle("fast");
});
$("#button-card-4").click(function () {
    $("#par-4").toggle();
});

$("button").mouseenter(function () {
    $("button").removeClass("make-red").addClass("make-border");
});
$("button").mouseleave(function () {
    $("button").removeClass("make-border").addClass("make-red");
});

// $("#button-card-1").click(function () {
//     $("#par-1").slideToggle(750);
// });
// $("#button-card-2").click(function () {
//     $("#par-2").slideToggle(1000);
// });
// $("#button-card-3").click(function () {
//     $("#par-3").slideToggle();
// });

