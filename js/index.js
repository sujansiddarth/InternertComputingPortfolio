var clicks = 0;
    function count(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
   }
   function count1(){
    clicks -= 1
    document.getElementById("clicks").innerHTML = clicks;
   }