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

    $(function () {
        $("#accordion").accordion();
    });



    $(".btn").click(function (e) {
        var selected = $("#checkboxes input:checked").map(function(index, element) {
            alert($(this).attr("data-price"));
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
            var key = new Date();
            storeData(key, data);

            $('input[type=checkbox]').each(function () {
                $(this).prop("checked", false);
            });

            $('#un').val("");
        }

    });

    var storeData = function(key, data)
    {
        //Data Format: User Name : Restaurant Name : Date : Item1,Item2,Ect...
        localStorage.setItem(key, data);
    }

    for(var i in localStorage)
    {
        var arr = localStorage[i].split(":");
        var name = arr[0];
        var rest = arr[1];
        var date = arr[2];
        var title = "<h3><strong>Name:</strong> " + name +"&nbsp<strong>Restaurant:</strong> "+ rest +"<strong>Date:</strong>  "+ date + " </h3>";
        var arr2 = arr[3].split(",");
        var items = "<div>";
        for(var index in arr2){
            items += "<span>" + arr2[index] + "</span><br />";
        }
        items += "</div>";
        var content = title + items;
        $('#accordion').append(content)
    }

});