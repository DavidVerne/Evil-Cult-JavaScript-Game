
function startgame() {

  document.getElementById("gameform").style.display = "none";

  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var cultName = document.getElementById("cultname").value;

  alert("Hello " + firstName + " " + lastName + "."
    + " You've successfully started your own cult, called " + cultName + "."
    + " There's no turning back now."
    + " You're about to join the ranks of some seriously evil leaders."
    + " Hit OK to begin your cult journey.");

    var resOne = prompt("You currently has 0 followers. You need to change that. A cult leader is nothing without followers."
    + " I wonder where you can find some impressionable minds. Here are some suggestions: 1.party 2.college 3.army").toLowerCase();

    switch(resOne) {
      case "party":
       alert("You've entered the party and see a group that can be easily persuaded. Go over and convince them to join your cult.");
       break
      case "college":
        alert("You've entered the College and see a group that can be easily persuaded. Go over and convince them to join your cult.");
        break;
      case "army":
        alert("You've entered the army barracks and see a group that can be easily persuaded. Go over and convince them to join your cult.");
        break;
      default:
       alert("You wont find any followers there. Try one of the options provided");
       if (resOne !== "party" || "college" || "army") {
         prompt("You currently has 0 followers. You need to change that. A cult leader is nothing without followers."
         + " I wonder where you can find some impressionable minds. Here are some suggestions: 1.party 2.college 3.army");
       }
    }

    alert("Well done, you've impressed them enough and they have decided to join. Your new followers are: ");

    var followers = ["Jim", "Polly", "Martin", "Jessica", "Brian"];

    for (var i = 0; i < followers.length; i++) {
      alert(followers[i]);
    }

    var resTwo = prompt("To keep your followers you'll to keep them inspired. Followers love rituals. Try one of these (enter the number): 1. Sacrifice a cat 2. Read a poem 3. Do a pentagram dance").toLowerCase();

    if (resTwo == 1 || 2 || 3) {
      alert("OK Brian has been freaked out and left the cult.");

      var followersTwo = followers.pop();

      alert("Your group has reduced to:");

      for (var i = 0; i < followers.length; i++) {
        alert(followers[i]);
      }

    }

     alert("Not to worry. The rest of the group are dedicated. Its time to put them to work. Every evil cult leader knows that the key to success in this field is getting your followers to recruit for you. Its called the Fibonacci rule for cult exploitation.")

    alert("Wow your cult has exploded. You now have 126 followers. You've entered the realm of the greats. You've been approached by a documenatry film crew to make a film about your cult.");

    var resThree = prompt("The documentary has brought heat and with heat comes the Feds. You're being investigated. It's time to run or face the music. Choose run or fight?").toLowerCase();

    if (resThree == "run") {
      alert("You've escaped to Guyana and are safe for now.");
    } else if (resThree == "fight") {
      alert("You've been busted! But your legacy will live on.");
    } else {
      alert("That wasnt an option. But this is the end anyway");
    }

    alert("You're adventures have ended for now. Game Over!");

    var resFour = prompt("Please rank the game out of 10");

    var resFive = parseInt(resFour);

    if (resFive <= 5) {
      alert("OK. I'll try and improve the game");
    } else if (resFive > 10){
      alert("Wow that's greater than the max");
    } else {
      alert("Awesome, thanks!");
    }

  }
