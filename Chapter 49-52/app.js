function signUp() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var repeatpassword = document.getElementById('repeatpassword');
    alert(email.value);
    alert(password.value);
    alert(repeatpassword.value)
}


function fullStory() {
    var para = "A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion’s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse desperately requested the lion to set him free. “I promise you, I will be of great help to you someday if you save me.” The lion laughed at the mouse’s confidence and let him go. One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle";
    document.getElementById('para').innerHTML = para;
    var p = document.getElementById('para');
    p.style.fontSize = "large";
}


