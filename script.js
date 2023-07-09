function calculateAverage() {
    // Get the values from the input boxes
    var mark1 = parseFloat(document.getElementById("mark1").value);
    var mark2 = parseFloat(document.getElementById("mark2").value);
    var mark3 = parseFloat(document.getElementById("mark3").value);

    // Calculate the average
    var average = (mark1 + mark2 + mark3) / 3;

    // Check if average is greater than 90
    if (average > 90) {
        document.getElementById("result").textContent = "Excellent!";
    } else {
        document.getElementById("result").textContent = "You need to improve.";
    }
}
