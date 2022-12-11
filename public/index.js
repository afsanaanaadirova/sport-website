$(window).on("load", function () {
  $.ajax({
    method: "GET",
    url: "http://numbersapi.com/1/30/date?json",
  })
    .done(function (data) {
      $(".api-data--text").text(data.text);
      $(".api-data--year").text(data.year);
      $(".api-data--number").text(data.number);
    })
    .fail(function () {
      alert("uh oh it failed");
    });
});
$("#owl-trainers").owlCarousel({
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
