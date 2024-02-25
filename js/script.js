
document.addEventListener('DOMContentLoaded', function() {
    // This function will be executed when the DOM is fully loaded

    // Call your function or execute your code here
    fetchButtons();
  });

function createEvent(text)
{

  return function(){
    displayText(text);
  };
}

function displayText(text){
  // console.log('function called');
  console.log(text,'text');
  var displayElement = document.getElementById('displayText');
  if (displayElement) {
    // Change the text content of the element to the input text
    displayElement.classList.remove('show');
    // displayElement.offsetWidth;
    // displayElement.textContent = text;
    setTimeout(function() {
      displayElement.textContent = text;
    }, 200);  
    
    setTimeout(function() {
      displayElement.classList.add('show');
    }, 200);  
  } else {
    console.error('Element with ID "displayText" not found.');
  }
}

  function fetchButtons(){
        const storedButtons = JSON.parse(localStorage.getItem('buttons'));
      
        // Display button information
        const buttonList = document.getElementById('cluster');
        storedButtons.forEach(button => {
          const buttonEl = document.createElement('button');
        //   const span = document.createElement('span');
          buttonEl.classList.add('button-64');
          buttonEl.textContent = `${button.name}`;
          //   buttonEl.appendChild(span);
          buttonList.appendChild(buttonEl);
          buttonEl.addEventListener('click', createEvent(button.text));
          // console.log(`${button.text}`);
          // console.log("appended");
        });
  }

  function setButtons(){
    const buttons = [
        // { name: 'Button 1', text: 'some new info' },
        // { name: 'Button 2', text: 'Information for Button 2' }
      ];
    
      localStorage.setItem('buttons', JSON.stringify(buttons));
  }
  