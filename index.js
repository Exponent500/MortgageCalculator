//Wraps entire jQuery to make sure no DOM manipulation is done until the DOM is rendered
$(document).ready(function(){

  /* Click event handler function that calculates a monthly mortgage payment */
  $("#calculate-button").click(function() {
      var numberOfPaymentsOverTermOfLoan = $("#loan-term").val() * $("#loan-period").val(); // number of Payments to be made over the term of the loan
      var monthlyInterestRate = ($("#interest-rate").val() / 100) / $("#loan-period").val(); // monthly interest rate
      var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPaymentsOverTermOfLoan); //compounded Interest Rate
      var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
      var monthlyPayment = ($("#loan-balance").val() * interestQuotient).toFixed(2); //total monthly payment, rounded to the penny
      $("#monthly-payment").text("Your monthly payment is $" + monthlyPayment); //displays monthly payment to page
  });
});