
    document.addEventListener('DOMContentLoaded', () => {
        const screen = document.getElementById('screen');
        const historyBox = document.getElementById('history-box');
        let history = [];
      
        window.appendValue = function (value) {
          if (screen.textContent === '0') {
            screen.textContent = value;
          } else {
            screen.textContent += value;
          }
        };
      
        window.clearScreen = function () {
          screen.textContent = '0';
        };
      
        window.backspace = function () {
          let current = screen.textContent;
          screen.textContent = current.length > 1 ? current.slice(0, -1) : '0';
        };
      
        window.calculate = function () {
          try {
            const expression = screen.textContent;
            const result = eval(expression);
            screen.textContent = result;
            history.unshift(`${expression} = ${result}`);
            if (history.length > 3) history.pop();
          } catch {
            screen.textContent = 'Error';
          }
        };
      
        window.showHistory = function () {
          if (historyBox.style.display === 'none') {
            historyBox.style.display = 'block';
            historyBox.innerHTML =
              '<strong>History:</strong><br>' +
              history.map((h, i) => `${i + 1}. ${h}`).join('<br>');
          } else {
            historyBox.style.display = 'none';
          }
        };
      });
    
  