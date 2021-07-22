var form = document.querySelector("form");
var inputs = document.querySelectorAll("input");
var output = document.querySelector(".output");
var submitBtn = document.querySelector("button");
var results = document.querySelectorAll("p");
var bgImage=document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var costPrice = inputs[0].value;
  var quanity = inputs[1].value;
  var sellPrice = inputs[2].value;
  if (!isNaN(costPrice) && !isNaN(quanity) && !isNaN(sellPrice)) {
    console.log("inside first if");
    var cp = Number(costPrice);
    var qt = Number(quanity);
    var sp = Number(sellPrice);
    if (cp > 0 && qt > 0 && sp > 0) {
      //loss
      if (cp > sp) {
        results[0].style.display='none';
        var loss = ((cp - sp) * qt).toFixed(2);
        var lossPercent = ((loss * 100) / cp).toFixed(2);
        results[1].style.display = "block";
        results[1].innerHTML = `Loss: <strong>${loss}</strong> rs.`;
        results[2].style.display = "block";
        results[2].innerHTML = `Percentage: <strong>${lossPercent}</strong> %`;
        bgImage.style.backgroundImage=`url('Images/loss.jpeg')`
      }
      // profit
      else {
        results[1].style.display='none';
        var profit = ((sp - cp) * qt).toFixed(2);
        var profitPercent = ((profit * 100) / cp).toFixed(2);
        results[0].style.display = "block";
        results[0].innerHTML = `Profit: <strong>${profit}</strong>`;
        results[2].style.display = "block";
        results[2].innerHTML = `Percentage: <strong>${profitPercent}</strong>`;
        bgImage.style.backgroundImage=`url('Images/profit.jpeg')`
      }
    } else alert('Please enter number greater than 0');
  } else alert('Please enter number greater than 0')
});
