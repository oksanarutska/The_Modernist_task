$(document).ready(function() {
  $(".ro_header_slider_wrapper").slick({
    dots: false,
    speed: 500
  });
});

$(document).ready(function() {

  $("#ro_form").validate({
    rules: {
      userEmail: {
        required: true,
        email: true
      },
      userName: {
        required: true
      },
      subject: {
        required: true
      }
    }
  });
  $("#ro_form").submit(function(event) {
    event.preventDefault();

    const form = $(event.target);

    if (form.validate().errorList.length > 0) {
      return;
    }

    $.ajax({
      // dummy url...
      url: "https://reqres.in/api/users",
      // method: 'POST',
      data: form.serialize()
    }).done(function() {
      form[0].reset();
      alert("Your message was sent!");
    });
  });
});

document.querySelector(".burger_menu").addEventListener("click", function (e){
        this.classList.toggle("active");
        document.querySelector(".ro_navbar_wrapper").classList.toggle("show")
    }

);