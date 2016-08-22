var a = document.getElementsByClassName('Button TwoStateButton User pressed main_button user_follow_button');;

function sleep (time) {
  setTimeout(function(){ console.log("Hello"); }, 3000);
}

for (var idx= 0; idx < a.length; ++idx)
{
    sleep();
     a[idx].click(3000);
}