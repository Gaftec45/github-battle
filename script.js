const startButton = document.getElementById("startButton");
const playerOneInput = document.getElementById("playerOneInput");
const playerOneButton = document.getElementById("playerOneButton");
const playerTwoInput = document.getElementById("playerTwoInput");
const playerTwoButton = document.getElementById("playerTwoButton");
const initiateBattleButton = document.getElementById("initiateBattle");
const reselectPlayersButton = document.getElementById("reselectPlayers");
const winnerText = document.getElementById("winnerText");

startButton.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".player-input").style.display = "block";
  document.querySelector("#wrapper1").style.display = "none";
});

playerOneButton.addEventListener("click", () => {
    const playerOneUsername = playerOneInput.value.trim();
    if (playerOneUsername) {
      document.getElementById("playerOneScreen").style.display = "none";
      document.getElementById("playerTwoScreen").style.display = "block";
    }
  });
  
  playerTwoButton.addEventListener("click", () => {
    const playerTwoUsername = playerTwoInput.value.trim();
    if (playerTwoUsername) {
      document.getElementById("playerTwoScreen").style.display = "none";
      document.querySelector(".confirm-players").style.display = "block";
      // Fetch GitHub details for Player Two and display them
      const playerTwoInfo = document.getElementById("playerTwoInfo");
      // Replace with code to fetch and display GitHub details
    }
  });
  

initiateBattleButton.addEventListener("click", () => {
  document.querySelector(".confirm-players").style.display = "none";
  document.querySelector("#wrapper1").style.display = "block";    
  document.querySelector(".winner-screen").style.display = "block";
  // Implement the battle logic and display the winner
  const winner = "Player One"; // Replace with the actual winner
  winnerText.innerText = `${winner} wins!`;
});

reselectPlayersButton.addEventListener("click", () => {
  document.querySelector("#wrapper").style.display = "none";
  document.querySelector(".player-input").style.display = "block";
});

// Function to fetch user details from GitHub
function fetchGitHubUserDetails(username, playerInfoElement) {
    const apiUrl = `https://api.github.com/users/${username}`;
  
    fetch(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("User not found on GitHub");
        }
      })
      .then((userData) => {
        // Display user details including the profile image
        playerInfoElement.innerHTML = `
          <img src="${userData.avatar_url}" alt="User Avatar" class="user-img">
          <table>  
            <tr>
              <td>Name: ${userData.name}</td>
            </tr>
            <tr>
              <td>Username: ${userData.login}</td>
            </tr>
            <tr>
              <td>Location: ${userData.location}</td>
            </tr>
            <tr>
              <td>Followers: ${userData.followers}</td>
            </tr>
            <tr>
              <td>Following: ${userData.following}</td>
            </tr>
            <tr>
              <td>Public Repos: ${userData.public_repos}</td>
            </tr>
            <tr>
              <td>Blog: <a href="${userData.blog}" target="_blank">${userData.blog}</a></td>
            </tr>
          </table>
        `;
      })
      .catch((error) => { 
        playerInfoElement.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  
  
  playerOneButton.addEventListener("click", () => {
    const playerOneUsername = playerOneInput.value.trim();
    if (playerOneUsername) {
      const playerOneInfo = document.getElementById("playerOneInfo");
      fetchGitHubUserDetails(playerOneUsername, playerOneInfo);
  
      document.getElementById("playerOneScreen").style.display = "none";
      document.getElementById("playerTwoScreen").style.display = "block";
    }
  });
  
  playerTwoButton.addEventListener("click", () => {
    const playerTwoUsername = playerTwoInput.value.trim();
    if (playerTwoUsername) {
      const playerTwoInfo = document.getElementById("playerTwoInfo");
      fetchGitHubUserDetails(playerTwoUsername, playerTwoInfo);
  
      document.getElementById("playerTwoScreen").style.display = "none";
    }
  });

initiateBattleButton.addEventListener("click", () => {
    document.querySelector(".confirm-players").style.display = "none";
    document.querySelector("#startOverButton").style.display = "block";
    const battleResult = document.querySelector(".battle-result");
  
    // Simulate a battle and determine the winner and loser
    const winnerUsername = playerOneUsername; // Replace with the actual winner's GitHub username with same selected playerOne
    const loserUsername = playerTwoUsername; // Replace with the actual loser's GitHub username with same selected playerTwo
  
    // Fetch details for the winner and loser using the fetchGitHubUserDetails function
    const winnerDetailsElement = document.getElementById("winnerDetails");
    const loserDetailsElement = document.getElementById("loserDetails");
    
    fetchGitHubUserDetails(winnerUsername, winnerDetailsElement);
    fetchGitHubUserDetails(loserUsername, loserDetailsElement);
  
    battleResult.style.display = "block";
    const winnerSScore = document.querySelector("#winnerScore");
    const loserScore = document.querySelector("#loserScore");
    winnerSScore.innerHTML = 1200;
    loserScore.innerHTML = 500;
  
  });

const startOverButton = document.getElementById("startOverButton");

startOverButton.addEventListener("click", () => {
  // Hide the winner page and go back to the player selection page
  const battleResult = document.querySelector(".battle-result");
  battleResult.style.display = "none";
  document.querySelector(".winner-screen").style.display = "none";
  document.getElementById("playerOneScreen").style.display = "block";
});

// Update player information when input changes
playerOneInput.addEventListener("input", (event) => {
  playerOneUsername = event.target.value;
});

playerTwoInput.addEventListener("input", (event) => {
  playerTwoUsername = event.target.value;
});
