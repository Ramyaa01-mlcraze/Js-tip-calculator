
// Tip Splitter Function

document.getElementById('container').onchange = function () {
  var bill = Number(document.getElementById('billTotal').value);
  var tipPercent = document.getElementById('tipInput').value;
  var splitBill = document.getElementById('splitInput').value;
  var tipValue = bill * (tipPercent / 100);
  var newBillEach = (bill + tipValue) / splitBill;
  var tipEach = tipValue / splitBill;

  document.getElementById('tipOutPut').innerHTML = " " + tipPercent + "%";
  document.getElementById('splitOutPut').innerHTML = " " + splitBill + " people";
  document.getElementById('newBill').innerHTML = " Rs." + newBillEach.toFixed(2);
  document.getElementById('tipAmount').innerHTML = " Rs." + tipEach.toFixed(2);
}