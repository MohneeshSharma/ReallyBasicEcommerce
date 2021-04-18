var arry = ["mbp.jpeg","mbp2.jpeg","mbp3.jpeg"];
var n = 1;
$('#back').click(function() {

    if(n==0){
        n = 1;
    }
    else if (n==1){
        n  = 2;
    }
    else {
        n = 0;
    }
    $('#img').attr("src", `/assets/${arry[n]}`);
})
$('#next').click(function () {
    
    if(n==0){
        n = 1;
    }
    else if (n==1){
        n  = 2;
    }
    else {
        n = 0;
    }
    $('#img').attr("src", `/assets/${arry[n]}`);
})
var i = 0;
$('.cart').click(function () {
    i++;
    $('.shoppingcart').html(`Shopping Cart (${i})`);
})

