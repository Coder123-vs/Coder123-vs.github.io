
const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const MAX_KEY_SIZE = SYMBOLS.length;

window.onload = function() {
  function scrollToGameArea() {
    document.getElementById("game-area").scrollIntoView({ behavior: "smooth" });
  }

  document.getElementById("js-btn").addEventListener("click", function() {
    document.getElementById("game-area").innerHTML = `
      <h2>JavaScript DUNK GAME</h2>
      <p>Don't hit the cones!</p>
      <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;">
        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" 
          src="https://arcade.makecode.com/---run?id=S95547-23029-57786-48488" 
          allowfullscreen sandbox="allow-popups allow-forms allow-scripts allow-same-origin">
        </iframe>
      </div>
    `;
    scrollToGameArea();
  });

  document.getElementById("python-btn").addEventListener("click", function() {
    document.getElementById("game-area").innerHTML = `
      <h2>Python Flappy Bird Multiplayer</h2>
      <p>Have fun with friends!!</p>
      <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;">
        <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" 
          src="https://arcade.makecode.com/---run?id=S19462-51723-67530-52319" 
          allowfullscreen="allowfullscreen" 
          sandbox="allow-popups allow-forms allow-scripts allow-same-origin" 
          frameborder="0">
        </iframe>
      </div>
    `;
    scrollToGameArea();
  });

  document.getElementById("surprise-btn").addEventListener("click", function() {
    document.getElementById("game-area").innerHTML = `
      <h2>Caesar Cipher Encoder/Decoder</h2>
      <div class="cipher-container">
        <div class="input-section">
          <label for="mode">Choose mode:</label>
          <select id="mode">
            <option value="encrypt">Encrypt</option>
            <option value="decrypt">Decrypt</option>
          </select>

          <label for="message">Message:</label>
          <textarea id="message" rows="4" placeholder="Type your message here..."></textarea>

          <label for="key">Key (1–52):</label>
          <input type="number" id="key" min="1" max="52" value="5">

          <button onclick="runCipher()">Translate</button>
        </div>

        <div class="output-section">
          <h3>Result:</h3>
          <p id="result"></p>
        </div>
      </div>
    `;
    scrollToGameArea();
  });
};

function runCipher() {
  const mode = document.getElementById('mode').value;
  const message = document.getElementById('message').value;
  let key = parseInt(document.getElementById('key').value, 10);

  if (!message) {
    document.getElementById('result').innerText = "Please enter a message.";
    return;
  }

  if (isNaN(key) || key < 1 || key > MAX_KEY_SIZE) {
    document.getElementById('result').innerText = "Please enter a valid key between 1 and 52.";
    return;
  }

  const translated = getTranslatedMessage(mode, message, key);
  document.getElementById('result').innerText = translated;
}

function getTranslatedMessage(mode, message, key) {
  if (mode === 'decrypt') {
    key = -key;
  }

  let translated = '';
  for (let symbol of message) {
    const symbolIndex = SYMBOLS.indexOf(symbol);
    if (symbolIndex === -1) {
      translated += symbol;
    } else {
      let newIndex = symbolIndex + key;
      if (newIndex >= SYMBOLS.length) {
        newIndex -= SYMBOLS.length;
      } else if (newIndex < 0) {
        newIndex += SYMBOLS.length;
      }
      translated += SYMBOLS[newIndex];
    }
  }

  return translated;
}
