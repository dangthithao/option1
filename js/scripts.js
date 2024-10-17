$(document).ready(function(){  
    var owl = $(".owl-carousel");  
    owl.owlCarousel({  
        responsive: {  
            0: {  
                items: 1 // Hiện 2 ảnh khi màn hình nhỏ hơn 800px 
            },  
            500:{
                items: 3
            },
            800: {  
                items: 5 // Hiện 3 ảnh khi màn hình từ 800px trở lên  
            } 
        },  
        loop: true, // Lặp lại carousel  
        margin: 20, // Khoảng cách giữa các item  
        autoplay: true, // Tự động phát  
        autoplayTimeout: 3000, // Thời gian giữa các lần chuyển  
        autoplayHoverPause: true ,// Tạm dừng khi hover  
        dots: false // Tắt nút tròn 
    });  
    // Nút điều khiển  
    $(".owl-nav").remove(); // Xóa nút điều khiển mặc định  
    owl.append('<div class="owl-nav"><button class="owl-prev"><i class="fas fa-chevron-left"></i></button><button class="owl-next"><i class="fas fa-chevron-right"></i></button></div>');  

    // sự kiện cho nút điều khiển  
    owl.on('click', '.owl-prev', function() {  
        owl.trigger('prev.owl.carousel');  
    });  

    owl.on('click', '.owl-next', function() {  
        owl.trigger('next.owl.carousel');  
    });  
});  