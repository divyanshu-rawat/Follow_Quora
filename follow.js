
//if you want to unfollow a user execute these set of instructions.
var a = document.getElementsByClassName('Button TwoStateButton User pressed main_button user_follow_button');;

function sleep (time) {
  setTimeout(function(){ console.log("Hello"); }, 3000);
}

for (var idx= 0; idx < a.length; ++idx)
{
    sleep();
     a[idx].click(3000);
}


// if you want to follow a user execute these set of instructions.
var a = document.getElementsByClassName('Button TwoStateButton User main_button user_follow_button');

function sleep (time) {
  setTimeout(function(){ console.log("Hello"); }, time);
}

for (var idx= 0; idx < a.length; ++idx)
{
    sleep(3000);
     a[idx].click();
}
