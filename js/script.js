$(document).ready(function () {
    $("submit").click(function (event) {
        event.preventDefault();
        var taste = parseInt($("#flavours :selected").val())
        var size = parseInt($("#sizes :selected").val())
        var crust = parseInt($("#crusts :selected").val())
        var toppings = parseInt($("#toppings :selected").val())
        var number = parseInt($("#number").val())

        var total = taste + size + crust + toppings;
        var grandTotal = total * number;

        $(".deliver").click(function () {
            var fields = prompt("Enter your address")
            prompt("Enter your name")
            prompt("Enter your location")
            alert("Your order will delivered" + areas)
            alert("Delivery cost is 200$")
        });
        $(".deliver").click(function () {
            alert("Pick your order in our nearest shop")
        });
    });
})
