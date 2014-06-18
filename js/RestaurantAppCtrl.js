$(document).ready(function() {
    $(".restaurant").click(function () {
        $(".menu").hide();
        $("#menuItems" + $(this).attr("id")).show();
    });



    $("#button").click(function (e) {
        var selected = $("#checkboxes input:checked").map(function(index, element) {
            return element.name;
        }).get();

        selected = selected.join(",");
        alert(selected);

        $('input[type=checkbox]').each(function () {
            $(this).prop("checked", false);
        });

    });
});