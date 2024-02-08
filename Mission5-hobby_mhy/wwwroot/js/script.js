$(document).ready(function () {
    $("#calculate").click(function () {
        var hours = parseFloat($("#hours").val());
        var chargePerHour = parseFloat($("#chargePerHour").val());
        var flatFee = parseFloat($("#flatFee").val());

        // Validate input
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a positive number for hours.");
            return;
        }

        // Calculate total
        var totalCost = (hours * chargePerHour) + flatFee; 
        $("#totalCost").val(totalCost.toFixed(2)); 
    });
});
