
document.addEventListener('DOMContentLoaded', function() {
    // This function will be executed when the DOM is fully loaded

    // Call your function or execute your code here
    fetchButtons();
  });

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
          console.log("appended");
        });
  }

  function setButtons(){
    const buttons = [
        // { name: 'Button 1', text: 'some new info' },
        // { name: 'Button 2', text: 'Information for Button 2' }
      ];
    
      localStorage.setItem('buttons', JSON.stringify(buttons));
  }
  