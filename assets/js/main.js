(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $all = $body.add($header);

  // Breakpoints.
  breakpoints({
    xxlarge: ["1681px", "1920px"],
    xlarge: ["1281px", "1680px"],
    large: ["1001px", "1280px"],
    medium: ["737px", "1000px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Touch mode.
  if (browser.mobile) $body.addClass("is-touch");
  else {
    breakpoints.on("<=small", function () {
      $body.addClass("is-touch");
    });

    breakpoints.on(">small", function () {
      $body.removeClass("is-touch");
    });
  }

  // Fix: IE flexbox fix.
  if (browser.name == "ie") {
    var $main = $(".main.fullscreen"),
      IEResizeTimeout;

    $window
      .on("resize.ie-flexbox-fix", function () {
        clearTimeout(IEResizeTimeout);

        IEResizeTimeout = setTimeout(function () {
          var wh = $window.height();

          $main.each(function () {
            var $this = $(this);

            $this.css("height", "");

            if ($this.height() <= wh) $this.css("height", wh - 50 + "px");
          });
        });
      })
      .triggerHandler("resize.ie-flexbox-fix");
  }

  // Gallery.
  $window.on("load", function () {
    var $gallery = $(".gallery");

    $gallery.poptrox({
      baseZIndex: 10001,
      useBodyOverflow: false,
      usePopupEasyClose: false,
      overlayColor: "#1f2328",
      overlayOpacity: 0.65,
      usePopupDefaultStyling: false,
      usePopupCaption: true,
      popupLoaderText: "",
      windowMargin: 50,
      usePopupNav: true,
    });

    // Hack: Adjust margins when 'small' activates.
    breakpoints.on(">small", function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 50;
      });
    });

    breakpoints.on("<=small", function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 5;
      });
    });
  });

  // Section transitions.
  if (browser.canUse("transition")) {
    var on = function () {
      // Galleries.
      $(".gallery").scrollex({
        top: "30vh",
        bottom: "30vh",
        delay: 50,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      // Generic sections.
      $(".main.style1").scrollex({
        mode: "middle",
        delay: 100,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      $(".main.style2").scrollex({
        mode: "middle",
        delay: 100,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      // Contact.
      $("#contact").scrollex({
        top: "50%",
        delay: 50,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });
    };

    var off = function () {
      // Galleries.
      $(".gallery").unscrollex();

      // Generic sections.
      $(".main.style1").unscrollex();

      $(".main.style2").unscrollex();

      // Contact.
      $("#contact").unscrollex();
    };

    breakpoints.on("<=small", off);
    breakpoints.on(">small", on);
  }

  // Events.
  var resizeTimeout, resizeScrollTimeout;

  $window
    .on("resize", function () {
      // Disable animations/transitions.
      $body.addClass("is-resizing");

      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(function () {
        // Update scrolly links.
        $('a[href^="#"]').scrolly({
          speed: 1500,
          offset: $header.outerHeight() - 1,
        });

        // Re-enable animations/transitions.
        setTimeout(function () {
          $body.removeClass("is-resizing");
          $window.trigger("scroll");
        }, 0);
      }, 100);
    })
    .on("load", function () {
      $window.trigger("resize");
    });
})(jQuery);


$(".intro-1").on("mouseenter", () => {
  $(".intro-text-1").removeClass("hide");
});

$(".intro-1").on("mouseleave", () => {
  $(".intro-text-1").addClass("hide");
});

$(".intro-2").on("mouseenter", () => {
  $(".intro-text-2").removeClass("hide");
});

$(".intro-2").on("mouseleave", () => {
  $(".intro-text-2").addClass("hide");
});

$(".intro-3").on("mouseenter", () => {
  $(".intro-text-3").removeClass("hide");
});

$(".intro-3").on("mouseleave", () => {
  $(".intro-text-3").addClass("hide");
});

$(".intro-4").on("mouseenter", () => {
  $(".intro-text-4").removeClass("hide");
});

$(".intro-4").on("mouseleave", () => {
  $(".intro-text-4").addClass("hide");
});

$("#link-demo-1-btn").on("click", () => {
  var win = window.open("https://selm123.github.io/Tic-Tac-Toe-Universe/", "_blank");
  if (win) {
    //Browser has allowed it to be opened
    win.focus();
  } else {
    //Browser has blocked it
    alert("Please allow popups for this website");
  }
});

$("#link-code-1-btn").on("click", () => {
	var win = window.open("https://github.com/Selm123/Tic-Tac-Toe-Universe/", "_blank");
	if (win) {
	  //Browser has allowed it to be opened
	  win.focus();
	} else {
	  //Browser has blocked it
	  alert("Please allow popups for this website");
	}
});

$("#link-demo-2-btn").on("click", () => {
	var win = window.open("https://ubor-project1.herokuapp.com/", "_blank");
	if (win) {
	  //Browser has allowed it to be opened
	  win.focus();
	} else {
	  //Browser has blocked it
	  alert("Please allow popups for this website");
	}
});

$("#link-code-2-btn").on("click", () => {
	var win = window.open("https://github.com/Selm123/ubor/", "_blank");
	if (win) {
	  //Browser has allowed it to be opened
	  win.focus();
	} else {
	  //Browser has blocked it
	  alert("Please allow popups for this website");
	}
});

$("#link-demo-3-btn").on("click", () => {
	var win = window.open("https://gahoot-client.herokuapp.com/", "_blank");
	if (win) {
	  //Browser has allowed it to be opened
	  win.focus();
	} else {
	  //Browser has blocked it
	  alert("Please allow popups for this website");
	}
});

$("#link-code-3-btn").on("click", () => {
	var win = window.open("https://github.com/audreypatricia/GAHOOT-client/", "_blank");
	if (win) {
	  //Browser has allowed it to be opened
	  win.focus();
	} else {
	  //Browser has blocked it
	  alert("Please allow popups for this website");
	}
});

$("#link-demo-4-btn").on("click", () => {
	var win = window.open("https://pacman-valar-morghulis.surge.sh/", "_blank");
	if (win) {
	  //Browser has allowed it to be opened
	  win.focus();
	} else {
	  //Browser has blocked it
	  alert("Please allow popups for this website");
	}
});

$("#link-code-4-btn").on("click", () => {
	var win = window.open("https://github.com/Selm123/pacman-valar-morghulis", "_blank");
	if (win) {
	  //Browser has allowed it to be opened
	  win.focus();
	} else {
	  //Browser has blocked it
	  alert("Please allow popups for this website");
	}
});

$('#send-email').on('click', () => {
  window.open('mailto:yefeidavid@gmail.com?subject=subject&body=body');
});

$('.ball').on('click', () => {
  window.location.href = "#intro";
});

$('#intro-nav').on('click', () => {
  window.location.href = "#intro";
});

$('#one-nav').on('click', () => {
  window.location.href = "#one";
});

$('#two-nav').on('click', () => {
  window.location.href = "#two";
});

$('#work-nav').on('click', () => {
  window.location.href = "#work";
});

$('#contact-nav').on('click', () => {
  window.location.href = "#contact";
});

$("#link-demo-1-btn").on("mouseenter", ()=>{
  $("#span-demo-1-left").css("margin-right", "6px");
  $("#span-demo-1-right").css("margin-left", "6px");
});

$("#link-demo-1-btn").on("mouseleave", ()=>{
  $("#span-demo-1-left").css("margin-right", "0px");
  $("#span-demo-1-right").css("margin-left", "0px");
});

$("#link-code-1-btn").on("mouseenter", ()=>{
  $("#span-code-1-left").css("margin-right", "6px");
  $("#span-code-1-right").css("margin-left", "6px");
});

$("#link-code-1-btn").on("mouseleave", ()=>{
  $("#span-code-1-left").css("margin-right", "0px");
  $("#span-code-1-right").css("margin-left", "0px");
});

$("#link-demo-2-btn").on("mouseenter", ()=>{
  $("#span-demo-2-left").css("margin-right", "6px");
  $("#span-demo-2-right").css("margin-left", "6px");
});

$("#link-demo-2-btn").on("mouseleave", ()=>{
  $("#span-demo-2-left").css("margin-right", "0px");
  $("#span-demo-2-right").css("margin-left", "0px");
});

$("#link-code-2-btn").on("mouseenter", ()=>{
  $("#span-code-2-left").css("margin-right", "6px");
  $("#span-code-2-right").css("margin-left", "6px");
});

$("#link-code-2-btn").on("mouseleave", ()=>{
  $("#span-code-2-left").css("margin-right", "0px");
  $("#span-code-2-right").css("margin-left", "0px");
});

$("#link-demo-3-btn").on("mouseenter", ()=>{
  $("#span-demo-3-left").css("margin-right", "6px");
  $("#span-demo-3-right").css("margin-left", "6px");
});

$("#link-demo-3-btn").on("mouseleave", ()=>{
  $("#span-demo-3-left").css("margin-right", "0px");
  $("#span-demo-3-right").css("margin-left", "0px");
});

$("#link-code-3-btn").on("mouseenter", ()=>{
  $("#span-code-3-left").css("margin-right", "6px");
  $("#span-code-3-right").css("margin-left", "6px");
});

$("#link-code-3-btn").on("mouseleave", ()=>{
  $("#span-code-3-left").css("margin-right", "0px");
  $("#span-code-3-right").css("margin-left", "0px");
});

$("#link-demo-4-btn").on("mouseenter", ()=>{
  $("#span-demo-4-left").css("margin-right", "6px");
  $("#span-demo-4-right").css("margin-left", "6px");
});

$("#link-demo-4-btn").on("mouseleave", ()=>{
  $("#span-demo-4-left").css("margin-right", "0px");
  $("#span-demo-4-right").css("margin-left", "0px");
});

$("#link-code-4-btn").on("mouseenter", ()=>{
  $("#span-code-4-left").css("margin-right", "6px");
  $("#span-code-4-right").css("margin-left", "6px");
});

$("#link-code-4-btn").on("mouseleave", ()=>{
  $("#span-code-4-left").css("margin-right", "0px");
  $("#span-code-4-right").css("margin-left", "0px");
});






