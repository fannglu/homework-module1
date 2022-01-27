// Converting partners from main to javascript
var partner = [];
var fileNames = [
  "partner-bustour",
  "partner-cabinrental",
  "partner-campingadv",
  "partner-collegetours",
  "partner-rentalbike",
  "partner-tourgroup",
];
var partnerList = [];
var image;
var openList = "<li id='partner'>";
var closeList = "</li>";

for (var i = 0; i < 6; i++) {
  partner.push("<img src='images/partners/" + fileNames[i] + ".png'>");
  image = openList + partner[i] + closeList;
  partnerList.push(image);
}

document.getElementById("partners").innerHTML = partnerList.join(" ");
