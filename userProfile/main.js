const user = {
  name: 'Code Learner',
  bio: 'Current Status: Beginner',
  level: 1 
};

// Select your elements
const levelupButton = document.getElementById('level-up-btn');
const userLevelSpan = document.getElementById('user-level');
const bioText = document.getElementById("user-bio");
const profileCard = document.getElementById('profile-card'); 

const handleLevelUp = () => {
  
  user.level++; 

  // Update the UI (The HTML)
  userLevelSpan.textContent = user.level;

  // Check the condition
  if (user.level >= 5) {
    user.bio = "Pro Developer";
    bioText.textContent = `Current Status: ${user.bio}`;
    profileCard.style.borderColor = "gold";
    profileCard.style.borderWidth = "5px";
  }
};

// 2. Attach the function to the click
levelupButton.addEventListener("click", handleLevelUp);