$(document).ready(function () {
    $(window).scroll(function () {
        if(this.scrollY > 100){
    $('.navbar').addClass("bg-glass")
}else{
    $('.navbar').removeClass("bg-glass")
}
    })
})