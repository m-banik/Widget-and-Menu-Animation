$("#menu>span").on("click", function() {
  $("#menu").toggleClass("active deactive");
  $(this).toggleClass("active");
});

$("button").on("click", () => {
  $("#panel").toggleClass("active");
});

const loader = function() {
  $("#menu").addClass("deactive");
};
window.onload = loader;
