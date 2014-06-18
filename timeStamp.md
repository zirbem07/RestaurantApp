<script>
     var timeStamp = new Date()
    var date = timeStamp.getDate()
    var hours = timeStamp.getHours()
    var minutes = timeStamp.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    console.log(date + ":" + hours + ":" + minutes + " ")
    if(hours > 11){
        console.log("PM")
    } else {
        console.log("AM")
    };
      localStorage.setItem("timeStamp", timeStamp);
    </script>