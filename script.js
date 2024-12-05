// Quick Exit Function
function quickExit() {
    window.location.href = "https://www.google.com"; // Redirect to a safe site
  }
  
  // Self-Assessment Form Handler
  function handleAssessment(event) {
    event.preventDefault();
  
    const form = event.target;
    const answers = Array.from(form.elements)
      .filter((el) => el.tagName === "SELECT")
      .map((el) => el.value);
  
    const dangerSigns = answers.filter((answer) => answer === "yes").length;
  
    const result = document.getElementById("assessment-result");
    if (dangerSigns > 0) {
      result.innerText =
        "Your responses indicate potential danger. Please seek help immediately.";
      result.style.color = "red";
    } else {
      result.innerText = "Your responses indicate no immediate concerns.";
      result.style.color = "green";
    }
  }
  