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

        //un email phone contactMethod restaurantName order
        var un = $('#un').val();
        if(un == ""){
            alert("error You must enter a user name");
        } else {
            var restaurant = $('#nameDiv').html();
            var date = new Date().toDateString();
            var data = un + ":" + restaurant + ":" + date + ":" + selected;
            storeData(data);

            $('input[type=checkbox]').each(function () {
                $(this).prop("checked", false);
            });

            $('#un').val("");
        }

    });

    var storeData = function(data)
    {
        //Data Format: User Name : Restaurant Name : Date : Item1,Item2,Ect...
        localStorage.setItem("restApp", data);
    }

    for(var i in localStorage)
    {
        console.log(localStorage[i]);
    }

});