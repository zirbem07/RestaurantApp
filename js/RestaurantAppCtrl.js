$(document).ready(function() {

    $(".restaurant").click(function () {
        $(".menu").hide();
        $("#menuItems" + $(this).attr("id")).fadeIn("slow");

        $('#nameDiv').hide();
        $('#nameDiv').html($(this).text()).fadeIn("slow");

        $('input[type=checkbox]').each(function () {
            $(this).prop("checked", false);
        });

    });


    $(".btn").click(function (e) {
        var selected = $("#checkboxes input:checked").map(function(index, element) {
            return element.name;
        }).get();

        selected = selected.join(",");
        alert(selected);

        $('input[type=checkbox]').each(function () {
            $(this).prop("checked", false);
        });

        //un email phone contactMethod restaurantName order
        var data = "Max:zirbel@gmai.com:123:phone:McDonalds:"+ selected;
        storeData(data);

    });

    var storeData = function(data)
    {

    }

});