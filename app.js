var form = document.querySelector("form");
var inputs = document.querySelectorAll("input");
var outputgif = document.querySelector(".output-gif");
var output = document.querySelector(".output");
var submitBtn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  outputgif.style.display = "block";
  output.style.display = "block";
  var costPrice = inputs[0].value;
  var quanity = inputs[1].value;
  var sellPrice = inputs[2].value;
  if (!isNaN(costPrice) && !isNaN(quanity) && !isNaN(sellPrice)) {
    var cp = Number(costPrice);
    var qt = Number(quanity);
    var sp = Number(sellPrice);
    if (cp > 0 && qt > 0 && sp > 0) {
      //loss
      if (cp > sp) {
        var loss = ((cp - sp) * qt).toFixed(2);
        var lossPercent = (((cp - sp) * 100) / cp).toFixed(2);
        output.style.display = "block";
        output.textContent = `You have lost ${loss} rs. which is ${lossPercent}% loss.`;
        outputgif.style.backgroundImage = `url(Images/sad.gif)`;
      }
      // profit
      else if (sp > cp) {
        var profit = ((sp - cp) * qt).toFixed(2);
        var profitPercent = (((sp - cp) * 100) / cp).toFixed(2);
        console.log(profitPercent);
        output.style.display = "block";
        output.textContent = `You gained ${profit} rs. which is ${profitPercent}% profit.`;
        outputgif.style.backgroundImage = `url(Images/happy.gif)`;
      } else {
        output.style.display = "block";
        output.textContent = `You neither gain profit nor loose.`;
        outputgif.style.backgroundImage = `url(Images/happy.gif)`;
      }
    } else {
      alert("Please enter number greater than 0");
      output.style.display = "none";
      outputgif.style.display = "none";
    }
  } else {
    alert("Please enter number greater than 0");
    output.style.display = "none";
    outputgif.style.display = "none";
  }
});
