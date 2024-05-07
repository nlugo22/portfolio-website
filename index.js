const nameBox = document.querySelector("#nameBox");
const nameInput = document.querySelector("#nameInput"); // node for the input name
const nameLabel = document.querySelector("#nameLabel"); // text for the name input
const terminalBox = document.querySelector("#terminalBox");
const hintBox = document.querySelector(".hints");
const cmdLine = document.getElementById("command-line");
const displayTxt = document.getElementById("display");
const welcomeText = document.querySelector(".welcome");

const hintCloseBtn = document.getElementById("close-btn"); // closes the hints

// dark mode toggle
const darkModeBtn = document.getElementById("dark-mode-checkbox");

function displayDateTime() {
  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = currDate.getMonth() + 1;
  const day = currDate.getDate();
  const hours = currDate.getHours();
  const minutes = currDate.getMinutes();
  const seconds = currDate.getSeconds();
  displayTxt.innerHTML += `
    <p>Last Login: ${month}\/${day}\/${year} at ${hours}:${minutes}:${seconds < 10 ? '0'+seconds : seconds}</p>
  `;
}
// command line emulator
const runCommand = (input) => {
    if (input === "rm rf") {
      // redirect to 404
      window.location.href = './404.html'; 
    } else if (input === "ls") {
      displayTxt.innerHTML += `
        <div class="directoryList">
          <p>portfolio</p>
          <p>resume</p>
          <p>contact_info</p>
        </div>  
      `;
    } else if (input === "clear") {
      displayTxt.innerHTML = `<p></p>`;
    } else if (input === "open portfolio") {
       window.open('https://github.com/nlugo22?tab=repositories', '_blank');
    } else if (input.includes("cd")) {
       // add logic to "change" directory 
    } else if (input === "exit") {
      terminalBox.classList.add('hidden');
    } else {
      displayTxt.innerHTML += `
          <p>-bash: ${input}: command not found</p>
        `;
    }
  };

nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    displayDateTime();
    nameLabel.textContent = `${nameInput.value}@lugo-website:~$\ `;
    nameBox.classList.add('hidden');
    terminalBox.classList.toggle('hidden');
    hintBox.classList.toggle('hidden');
    nameInput.removeAttribute('autofocus');
    cmdLine.focus();
  }
});


cmdLine.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runCommand(cmdLine.value);
      cmdLine.value = "";
    }
  });


var msg = " Hello, what is your name?";
var i = 0;
var speed = 125;
animateWelcome();

function animateWelcome () {
  if (i < msg.length) {
    document.querySelector(".welcome").textContent += msg[i];
    i++;
    setTimeout(animateWelcome, speed); 
  }

}

darkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
   document.body.classList.toggle("dark-mode");

}

hintCloseBtn.addEventListener("click", () => hintBox.classList.toggle('hidden'));

