var h3; 
var accusation = "Accusation";
var num = "#";
var friend = ["Rachel","Erin","Pam","Marcus","Ryan"];
var arrLocation = ["Foyer", "Bedroom", "Living Room", "The Room of Requirement", "Mar-a-Lago", "Trump Tower", "Limelight", "The Bodega Up the Street", "Cecil Hotel", "Bongo Java's bathroom"];
var impaler = ["Gun,", "Knife,", "The Rope," ,"a chair," ,"A really well written Kanye tweet,", "Thanksgiving leftovers," ,"hours of Ina Garten," ,"Really, really, stale bread," ,"too much cowbell,", "a falling piano," ,"food from the Cookout,", "four Lokos," ,"Mariah Carey's falsetto," ,"Sideshow Bob," ,"A can of Duff Beer," ,"their agonizing PMS attitude," ,"tide pod," ,"really hot coffee," ,"first generation iPod,", "resting bitch face"];

function listDownAccusers(num) {
    var h3 = document.createElement("h3");
    h3.innerText = "Accusation " + (num + 1);
    h3.addEventListener("click", function () {
        var who = friend[num % friend.length];
        var what = impaler[num % impaler.length];
        var where = arrLocation[num % arrLocation.length];
        alert("Accusation " + (num + 1) + ": I accuse " + who + " with " + what + " in the " + where + "!!");
    });
    document.body.appendChild(h3);
}

for (var i = 0; i < 100; i++) {
    listDownAccusers(i);
}