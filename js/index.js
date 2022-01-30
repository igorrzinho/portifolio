$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 200) {
            $('.navbar').addClass("bg-glass")
        } else {
            $('.navbar').removeClass("bg-glass")
        }
    })
})