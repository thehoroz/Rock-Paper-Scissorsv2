**INFO ABOUT THE PROJECT**
This is the Rock Paper Scissors game. It's a task from The Odin Project. After learning DOM manipulation, I had to implement my knowledge into this project.

I have made it before, but with a lot of help from others and with little understanding. This time I made the whole game on my own.

I focused on making the Rock and Scissors images in CSS. Just so I could refine my skills a bit more. However, the paper image was too hard, so I imported it.

**EXPLANATION OF MY CODE**
The concept is very simple. The 3 images (Rock paper and scissors) are buttons. They have event listeners attached which trigger the playerSelection variable and the playRound function. 

The playRound function will first execute the computerPlay function. The computerPlay function randomly generates Rock, Paper or Scissors and will store its outcome into computerSelection.

The playRound function will then continue to the if statements in search of a fitting outcome. According to the if statement, their will be an incremention to the playerScore or the computerScore.

At last playRound will execute it's last function, resetScore. The score will be displayed on the scoreboard through the DOM manipulation with childnode.textContent. 

If one of the scores reaches 5, a message will be alerted and the scores will be set to 0.

That's all! I really appreciate feedback so send an e-mail to: dhr.y.uygun@gmail.com