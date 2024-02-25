document.addEventListener('DOMContentLoaded', function() {
    // This function will be executed when the DOM is fully loaded

    // Call your function or execute your code here
    const save = document.getElementById('SaveButton');

    save.addEventListener('click', setButtons);
    createDropdown();
    displayExistingButtons();
    document.addEventListener('change', function(event) {
        if (event.target && event.target.id === 'numberSelector') {
          var selectedNumber = parseInt(event.target.value);
          if (selectedNumber >= 1 && selectedNumber <= 20) {
            createTextInputElements(selectedNumber);
          }
        }
      });
  });

  function createDropdown() {
    var dropdownContainer = document.getElementById('dropdownContainer');
    
    // Create select element
    var select = document.createElement('select');
    var span = document.createElement('span');
    var div = document.createElement('div');
    
    select.id = 'numberSelector';
    
    // Add options to the select element
    for (var i = 0; i <= 20; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.textContent = i === 0 ? 'Select a number' : i;
      select.appendChild(option);
    }
    
    span.className = 'spanInput'; 
    span.textContent = "Select the amount of buttons"
    
    div.className= 'inputElement';
    div.appendChild(span);
    div.appendChild(select);
    // Append select element to the dropdown container
    dropdownContainer.appendChild(div);
  }
  

  // Function to create text input elements
  function createTextInputElements(number) {
    var card = document.getElementById('card');
    
    // Clear previous content of the card
    card.innerHTML = '';
    
    // Create new text input elements
    for (var i = 1; i <= number; i++) {
      var input = document.createElement('input');
      var span = document.createElement('span');
      var div = document.createElement('div');
      span.textContent = 'Button ' + i + ' will display';
      input.type = 'text';
      input.id = 'input_' + i; // Unique ID for each input
      
      input.className = 'textInput'; // Common class for all inputs
      span.className = 'spanInput'; // Common class for all inputs
      div.className = 'inputElement';
      
      div.appendChild(span);
      div.appendChild(input);
      card.appendChild(div);
      
    }
  }

  function displayExistingButtons() {
    // Retrieve button data from localStorage
    var buttonsData = JSON.parse(localStorage.getItem('buttons'));
    
    // Get the card element where buttons will be displayed
    var card = document.getElementById('card');
    
    // Clear previous content of the card
    card.innerHTML = '';
    
    // Check if there's existing button data
    if (buttonsData && buttonsData.length > 0) {
      // Iterate through the button data
      var i = 1;
      buttonsData.forEach(function(button) {
        // Create a button element
        var input = document.createElement('input');
        var label = document.createElement('label');
        var div = document.createElement('div');
        input.type = 'text';
        input.value = button.text;
        input.className = 'textInput';
        input.id = 'input_' + i; 
        label.textContent = 'Button ' + i + ' will display';
        label.htmlFor = input.id;
        // input.className = 'textInput';
        // buttonElement.id = 'button_' + button.name; // Set button ID
        
        label.className = 'labelInput'; // Common class for all inputs
        // div.className = 'inputElement';
        div.className = 'inputElement';
        
        div.appendChild(label);
        div.appendChild(input);
        card.appendChild(div);
        i++;
    });
    }
  }

  function displaySuccessMessage(message, duration) {
    // Create alert div
    var alertDiv = document.createElement('div');
    alertDiv.id = 'alert';
    alertDiv.textContent = message;
    alertDiv.classList.add('alert');
  
    // Append alert div to document body
    document.body.appendChild(alertDiv);
  
    // Show alert div
    alertDiv.style.opacity = '1';
  
    // Set timeout to remove alert after duration
    setTimeout(function() {
        alertDiv.style.opacity = '0'; // Fade out alert div
        setTimeout(function() {
          document.body.removeChild(alertDiv); // Remove alert div from document
        }, 500); // Wait for animation to complete before removing
      }, duration);
  }


  function setButtons(){
    var buttonsData = [];

    var textInputs = document.querySelectorAll('.textInput');
  
    // Iterate through text input elements
    textInputs.forEach(function(input, index) {

        var buttonName = index + 1;
        var buttonText = input.value;
    
    // Create object for each button and push it to the buttonsData array
        buttonsData.push({ name: buttonName, text: buttonText });; // Assign input value to button object with unique key
    });
    
      localStorage.setItem('buttons', JSON.stringify(buttonsData));
        displaySuccessMessage('Success', 500);
  }