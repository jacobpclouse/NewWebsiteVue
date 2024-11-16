<template>
    <div class="about-me-section q-pa-md">
      <div class="about-me-content">
        <img src="logo.png" alt="My Picture" class="about-me-picture" />
        <div class="about-me-text">
          <h2 class="text-h3">Who I Am</h2>
          <p>
            I am a new developer and am excited to work with new technologies. I love learning 
            and challenge myself to learn something new every day!
          </p>
          <p>
            I received my B.S. in Information Systems from Sage College of Albany in 2017 and 
            my M.S. in Computer Science from the University at Albany (SUNY) in 2023.
          </p>
        </div>
      </div>
      <hr class="divider" /> <!-- Dividing line below the section -->
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutMe",
  };
  </script>
  
  <style scoped>
  .about-me-section {
    background-color: #1a1f27; /* Matches SkillsSection background */
    color: #ffffff; /* White text for contrast */
    padding: 40px;
    text-align: center; /* Center the whole section */
  }
  
  .about-me-content {
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px; /* Optional: limits the width of the section */
    margin: 0 auto; /* Centers the content within the section */
  }
  
  .about-me-picture {
    max-width: 150px; /* Adjust based on the preferred size */
    border-radius: 5%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .about-me-text {
    flex: 1;
    max-width: 600px; /* Optional: limits text width */
  }
  
  .about-me-text h2 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 2.5rem; /* Increased size for the header */
  }
  
  .about-me-text p {
    margin: 10px 0;
    line-height: 1.8;
    font-size: 1.2rem; /* Increased size for paragraph text */
  }
  
  .divider {
    border: 0;
    border-top: 2px solid #ffffff; /* White dividing line */
    margin-top: 30px;
    width: 80%; /* Adjust width of dividing line */
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  

<!-- <template>
    <div class="about-me-section q-pa-md">
      <div class="about-me-content">
        <img src="logo.png" alt="My Picture" class="about-me-picture" />
        <div class="about-me-text">
          <h2 class="text-h4">Who I Am</h2>
          <p>
            I am a new developer and am excited to work with new technologies. I love learning 
            and challenge myself to learn something new every day!
          </p>
          <p>
            I received my B.S. in Information Systems from Sage College of Albany in 2017 and 
            my M.S. in Computer Science from the University at Albany (SUNY) in 2023.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutMe",
  };
  </script>
  
  <style scoped>
  .about-me-section {
    background-color: #1a1f27; /* Matches SkillsSection background */
    color: #ffffff; /* White text for contrast */
    padding: 20px;
    /* border-radius: 8px; */
  }
  
  .about-me-content {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping for smaller screens */
    align-items: center;
    gap: 20px; /* Spacing between image and text */
  }
  
  .about-me-picture {
    max-width: 150px; /* Adjust based on the preferred size */
    border-radius: 5%; /* Makes the image circular */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Adds a slight shadow */
  }
  
  .about-me-text {
    flex: 1; /* Ensures text takes up the remaining space */
  }
  
  .about-me-text h2 {
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .about-me-text p {
    margin: 10px 0;
    line-height: 1.6;
  }
  </style>
   -->