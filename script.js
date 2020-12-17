$(document).ready(function () {
  window.onscroll = function () {
    stickyNavFunc();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function stickyNavFunc() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  console.log("ready!");
  console.log($(".progress-bar"));
  let progBarsArray = $(".progress-bar");
  console.log(progBarsArray[2]);
  const skills = [
    {
      skill: "js",
      percent: "90%",
    },
    {
      skill: "html",
      percent: "90%",
    },
    {
      skill: "css",
      percent: "80%",
    },
    {
      skill: "vue",
      percent: "90%",
    },
    {
      skill: "react",
      percent: "70%",
    },
    {
      skill: "angular",
      percent: "60%",
    },
    {
      skill: "nodejs",
      percent: "70%",
    },
    {
      skill: "php",
      percent: "50%",
    },
    {
      skill: "mysql",
      percent: "60%",
    },
    {
      skill: "mongo",
      percent: "60%",
    },
  ];
  skills.forEach((skill) => {
    // console.log($(`.pb-${skill.skill}`));
    // $(`.pb-${skill.skill}`).after(`<span class='skill-percent'>${skill.percent}</span>`);
    $(`.pb-${skill.skill}`).text(skill.percent);
    $(`.pb-${skill.skill}`).animate(
      {
        width: skill.percent,
      },
      2500
    );
  });
  $("#crm").hover(
    function () {
      console.log("in");
      // $(this).css({ "background-image": "url('/images/e-commercee.jpg')"});
      // $(this).animate({ backgroundImage: none }, 1000);

      $(".crm-text").fadeIn("slow");
      $(".crm-button").fadeIn("slow");
    },
    function () {
      console.log("out");
      $(".crm-text").fadeOut("slow");

      $(".crm-button").fadeOut("slow");
    }
  );

  $("#react-vacationer").hover(
    function () {
      console.log("in");

      // $(this).css({ "background-image": "url('/images/e-commercee.jpg')"});
      // $(this).animate({ backgroundImage: none }, 1000);

      $(".react-vacationer-text").fadeIn("slow");
      $(".react-vacationer-button").fadeIn("slow");
    },
    function () {
      console.log("out");
      $(".react-vacationer-text").fadeOut("slow");

      $(".react-vacationer-button").fadeOut("slow");
    }
  );

  $("#angular-e-commerce").hover(
    function () {
      console.log("in");
      // $(this).css({ "background-image": "url('/images/e-commercee.jpg')"});
      // $(this).animate({ backgroundImage: none }, 1000);

      $(".angular-e-commerce-text").fadeIn("slow");
      $(".angular-e-commerce-button").fadeIn("slow");
    },
    function () {
      console.log("out");
      $(".angular-e-commerce-text").fadeOut("slow");

      $(".angular-e-commerce-button").fadeOut("slow");
    }
  );
});
