$(document).ready(function () {
  // mobile menu
  $("body").removeClass("bodyfix");
  $("#toggle").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("bodyfix");
    $("#overlay").toggleClass("open");
  });

  // header scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".payment-header").addClass("fixed");
    } else {
      $(".payment-header").removeClass("fixed");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      $(".page__header").addClass("fixed");
    } else {
      $(".page__header").removeClass("fixed");
    }
  });

  $(".custom-select").each(function () {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template +=
      '<span class="custom-select-trigger">' +
      $(this).attr("placeholder") +
      "</span>";
    template += '<div class="custom-options">';
    $(this)
      .find("option")
      .each(function () {
        template +=
          '<span class="custom-option ' +
          $(this).attr("class") +
          '" data-value="' +
          $(this).attr("value") +
          '">' +
          $(this).html() +
          "</span>";
      });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(
    function () {
      $(this).parents(".custom-options").addClass("option-hover");
    },
    function () {
      $(this).parents(".custom-options").removeClass("option-hover");
    }
  );
  $(".custom-select-trigger").on("click", function () {
    $("html").one("click", function () {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function () {
    $(this)
      .parents(".custom-select-wrapper")
      .find("select")
      .val($(this).data("value"));
    $(this)
      .parents(".custom-options")
      .find(".custom-option")
      .removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this)
      .parents(".custom-select")
      .find(".custom-select-trigger")
      .text($(this).text());
  });

  $(".modal")
  .on("shown", function (e) {
    $("body").addClass("bodyfix");
  })
  .on("hidden", function (e) {
    $("body").removeClass("bodyfix");
  });

// prevent event when the modal is about to hide
var closeButtonClicked = false;

$(".close-modal-ico").on("click", function (e) {
  closeButtonClicked = true;
});

$(".modal").on("hide.bs.modal", function (e) {
  if (!closeButtonClicked) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  closeButtonClicked = false;
});


});

