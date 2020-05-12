$(document).ready(function() {
  $("#list-profile-list").click(function() {
    $("#list-profile-list").addClass("active");
    $("#list-home").removeClass("show active");
    $("#list-profile").addClass("show active");
    $("#list-messages").removeClass("show active");
    $("#list-settings").removeClass("show active");
  });
});
