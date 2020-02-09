function toggleMenu() {
    let menu = document.querySelector(".navbar-menu")
    if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
    } else {
        menu.classList.add("is-active");
    }
  }

  $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});