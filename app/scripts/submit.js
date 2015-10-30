
(function(){ 
  var form = document.getElementById('subdemo');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    location.href="thankyou.html";
  });
}());

// document.getElementById("subdemo").submit().reset();
