var id2;

$(document).ready(function () {



 /* var textWrapper = document.querySelector('.leftintro');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.leftintro .letter',
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 200,
      delay: (el, i) => 140 * (i + 1)
    });*/

  anime.timeline({
      loop: true
    })
    .add({
      targets: '.ml15 .word',
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 1800,
      delay: (el, i) => 800 * i
    }).add({
      targets: '.ml15',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 3000
    });

    anime.timeline({
      loop: true
    })
    .add({
      targets: '.ml16 .word1',
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 1000,
      delay: (el, i) => 1000 * i
    }).add({
      targets: '.ml16',
      opacity: 0,
      duration: 100,
      easing: "easeOutExpo",
      delay: 3000
    });




});

$("#c1").click(function () {
  $("#myModal").modal();
});

$(".card").click(function () {

  /*id1=$(this).attr("data-content");
  alert(id1);*/
  var id1 = $(this).attr('id');
  id2 = id1;
  $("#myModal").modal("show");
});

$('#myModal').on('show.bs.modal', function () {

  var tit = $("#" + id2).attr("data-tit");
  var con = $("#" + id2).attr("data-content");

  $(".modal-title").addClass("tit");
  $(".modal-body").addClass("dat");

  $("#aa").attr("src", "images/" + id2 + ".jpg");

  $("#myModal").find('.modal-title').text(tit);
  $("#myModal").find('.modi').html(con);




});

$("#d1").click(function () {
  $("#myModal").modal();
});