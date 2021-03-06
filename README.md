# README Brenton Weaver JavaScriptQuiz V1.0

 LINK:  https://brento20.github.io/JavaScriptQuiz/

## **User Story**

AS A coding boot camp student I WANT to take a timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers

## **Acceptance Criteria**

**GIVEN** I am taking a code quiz
**WHEN** I click the start button 
**THEN** a timer starts and I am presented with a question
**WHEN** I answer a question 
**THEN** I am presented with another question 
**WHEN** I answer a question incorrectly 
**THEN** time is subtracted from the clock 
**WHEN** all questions are answered or the timer reaches 0 
**THEN** the game is over 
**WHEN** the game is over 
**THEN** I can save my initials and my score
<br>
<br>

|Task| Status |
|--|--|
|Event listener starts (using click). | complete |
|Countdown timer starts with quiz.| complete |
|Questions progress.| complete |
|Game ends when all questions are answered or timer runs out.| complete |
|When game ends you can enter your name.| complete |
|Name and Score are saved to local Storage.| complete |
|Score Board shows recent scores.| complete |
|||


## Pseudo Code

**0. Build solid file structure.**



**1. HTML:**

    - Build a simple frame with a header and body.
    - Create a static heading in the header.
    - Create an ordered list in the body.
    - Create two buttons: Start and Leaderboard.
    - Add ID tags and classes to the parents of the main elements (OL, Buttons).


**2. CSS:**

    - Reset default CSS.
    - Build simple style guide.
    - Write a hover animation to apply to < ol > children.


**3. JavaScript:**

    - Build my question and data arrays.
    - build timer to count down 90 second, include a timeout.
    - Use form to store "Player Name" to local storage.
    - Create click listen event to use on start/stop, < li > and leaderboard.
    - Fill < ol > and < li > with data from my data arrays.
    - Click listen event to select answers.
    - Compare to see if selection is false, if false remove 10 seconds from timer.
    - If true add 10 points to score.
    - Move to next question.    
    - repeat for each question.
    - When timer reaches 0 push score to local storage.
    - Display score board with scores.

**4. Future Improvements**

    - Add bootstrap to spice up the css
    - Clean up JavaScript to help with readability
    - Add a mute button for game sounds
    - Add a scoreboard button on the front page


## Images of deployed application

Early dev images: 

![ScreenShot](assets/readmeImgs/preCssQuiz.png)
![ScreenShot](assets/readmeImgs/preCssStart.png)

Post CSS tweaks:

![ScreenShot](assets/readmeImgs/main.png)
![ScreenShot](assets/readmeImgs/questions.png)
![ScreenShot](assets/readmeImgs/timeout.png)
![ScreenShot](assets/readmeImgs/scoreboard.png)