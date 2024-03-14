function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseInt(document.getElementById('age').value);
  
    var bmi = weight / (height * height);
    var category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    var result = "BMI: " + bmi.toFixed(2) + " - " + category;
    document.getElementById('result').textContent = result;
  }
  