$(document).ready(function() {

    //load all current Firebase data
    var myDataRef = new Firebase('https://blistering-fire-5092.firebaseio.com/');
    myDataRef.once('value', function(dataSnapshot) {
        dataSnapshot.forEach(function(allDataSnapshot) {
            var data = allDataSnapshot.child('data').val();
            displayOrderHistory(data);
        });
    });

    //when user clicks a restaurant, display the appropriate menu
    $(".restaurant").click(function () {
        $(".menu").hide();
        $("#menuItems" + $(this).attr("id")).fadeIn("slow");

        $('#nameDiv').hide();
        $('#nameDiv').html($(this).text()).fadeIn("slow");

        $('input[type=checkbox]').each(function () {
            $(this).prop("checked", false);
        });

    });


    //When the user clicks the submit button attempt to submit order
    $(".btn").click(function (e) {
        //initialize order total to zero
        var total = 0;

        //find all items and their value that the user checked
        var selected = $("#checkboxes input:checked").map(function(index, element) {
            total += parseInt($(this).attr("data-price") ,10);
            return element.name;
        }).get();

        //make sure the user selected at least one order
        if(selected != "") {
            selected = selected.join(",");

            //check to see if the user entered a username
            var un = $.trim($('#un').val());
            if (un == "") {
                alert("Error: You must enter a user name");
            } else {
                //valid order, store the data
                var restaurant = $('#nameDiv').html();
                var date = new Date().toDateString();
                var data = un + ":" + restaurant + ":" + date + ":" + total + ":" + selected;
                var key = new Date();
                storeData(key, data);

                //uncheck all check boxes for the next order
                $('input[type=checkbox]').each(function () {
                    $(this).prop("checked", false);
                });

                //empty the username field
                $('#un').val("");

            }
        } else {
            alert("You didn't select any items");
        }

    });


    //store the data in Firebase
    var storeData = function(key, data)
    {
        $('#accordion').empty();
        //Data Format: User Name : Restaurant Name : Date : Item1,Item2,Ect...
        myDataRef.push({data: data});
        myDataRef.on('child_added', function(order) {
            var items = order.val();
            displayOrderHistory(items.data);
        });
        //localStorage.setItem(key, data);
    }

    //jQuery default accordion function
    $(function () {
        $("#accordion").accordion();
    });

    function displayOrderHistory(data) {
        var arr = data.split(":")
        var name = arr[0];
        var rest = arr[1];
        var date = arr[2];
        var total = arr[3];
        var title = "<h3><strong>Name:</strong> " + name +"<strong> Restaurant:</strong> "+ rest +"<strong>Date:</strong>  "+ date + " </h3>";
        var arr2 = arr[4].split(",");
        var items = "<div>";
        for(var index in arr2){
            items += "<p>" + arr2[index] + "</p>";
        }
        items += "<span class='pull-right'><strong>Total: </strong> $"+total+ " </span></div>";
        var content = title + items;
        $('#accordion').append(content);
        $('#accordion').accordion('refresh');


    }

});