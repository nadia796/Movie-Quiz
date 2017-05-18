/*
alert("hello world");
*/

/*var correct_incorrectD = document.getElementsByClassName("correct_incorrect");
    for(var i = 0; i < correct_incorrectD.length; i++) {
        
        correct_incorrectD[i].innerHTML = "0/0 correct answers";
        
    }*/
/*=============================================================================== This is the modal section 
===============================================================================*/

// Get the modal
var modal = document.getElementById('quizModal');

// Get the button that opens the modal
var actionButton = document.getElementById("buttonImage1");
var classicButton = document.getElementById("buttonImage2");
var comedyButton = document.getElementById("buttonImage3");
var horrorButton = document.getElementById("buttonImage4");
var romanceButton = document.getElementById("buttonImage5");

// Get the <span> element that closes the modal
var exitModal = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*actionButton.onclick = function() {
    modal.style.display = "block";
}
classicButton.onclick = function() {
    modal.style.display = "block";
}
comedyButton.onclick = function() {
    modal.style.display = "block";
}
horrorButton.onclick = function() {
    modal.style.display = "block";
}
romanceButton.onclick = function() {
    modal.style.display = "block";
}*/

// When the user clicks on <exitModal> (x), close the modal
exitModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        
    }
}


/*This is a function to allow me to make multiple quizzes using the same template*/

function QuizQuestion(question, showDefault, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.showDefault = showDefault;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
    
}

/*I need to create a quiz index to hold all the different quizes for each individual category that will be using the function above*/

var quizIndex;

var everyQuiz = document.getElementsByName("movie");

for (var i = 0; i < everyQuiz.length; i++) {
    
    everyQuiz[i].onclick = function(startQuiz){
        //open up the modal when clicking on each quiz
        modal.style.display = "block";
        
        quizIndex = this.value;
        
        console.log(quizIndex);
        
        document.getElementById("quizScore").innerHTML = "";
        
    document.getElementById("quizDescription").innerHTML = "";
        
        /* var clearTicks = document.getElementsByClassName("tick").innerHTML;*/
        
    /*    for( var i = 0; i < clearTicks.length; i++) {
            
            clearticks[i].innerHTML = "";
            
        }*/
        
        
        //Now I am changing the title of the modal for each quiz 
        
        var quizTitle = document.getElementById("buttonImage" + this.value).innerHTML;
        var modalTitle = document.getElementById("h2QuizTitle").innerHTML = quizTitle + " QUIZ";
        
        
        //This makes sure that the ticks are not visible from the last time a user has played 
        
        
       
        
        
        var clearTicks  = document.getElementsByClassName("")
        
        
        //This section will follow the QuizQuestion function and will create questions for the action quiz (quizIndex==1)
        
        if (quizIndex==1) {
            
            var question1 = new QuizQuestion("Action quiz question 1",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         2
                        );

var question2 = new QuizQuestion("Action quiz question 2",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         3
                        );

var question3 = new QuizQuestion("Action quiz question 3",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         4
                        );

var question4 = new QuizQuestion("Action quiz question 4",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         1
                        );

var question5 = new QuizQuestion("Action quiz question 5",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         2
                        );

var question6 = new QuizQuestion("Action quiz question 6",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         3
                        );

var question7 = new QuizQuestion("Action quiz question 7",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         4
                        );

var question8 = new QuizQuestion("Action quiz question 8",
                         "Choose an answer",
                         "Action Answer 1",
                         "Action Answer 2",
                         "Action Answer 3",
                         "Action Answer 4",
                         1
                        );

        }
        
        //This is an array that holds all questions for the particular index
        
        
        
        
        var arrayOfQuizQuestion = [];
        arrayOfQuizQuestion.push(question1);
        arrayOfQuizQuestion.push(question2);
        arrayOfQuizQuestion.push(question3);
        arrayOfQuizQuestion.push(question4);
        arrayOfQuizQuestion.push(question5);
        arrayOfQuizQuestion.push(question6);
        arrayOfQuizQuestion.push(question7);
        arrayOfQuizQuestion.push(question8);
        
        /*console.log(arrayOfQuizQuestion[1]);*/
        
        //this array is going to get each individual question from the above array 'arrayOfQuizQuestion' and replace it into my html
        
        var arrayQuestionList = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8"];
        
        
        //this array is going to get each individual selection of answers from the arrayOfQuizQuestion array and replace it into my html 
    
        var arrayOptionAnswerList = ["optionAnswer1", "optionAnswer2", "optionAnswer3", "optionAnswer4", "optionAnswer5", "optionAnswer6", "optionAnswer7", "optionAnswer8"];
        
        //This array is going to get the selected user input from the 'arrayOfQuizQuestion' array. This is so that we can compare later with the actual answer. 
        
        var arrayOfInputAnswerList = ["inputAnswer1", "inputAnswer2", "inputAnswer3", "inputAnswer4", "inputAnswer5", "inputAnswer6", "inputAnswer7", "inputAnswer8"];
        
        for (i = 0; i < arrayOfQuizQuestion.length; i++) {
            document.getElementById(arrayQuestionList[i]).innerHTML = arrayOfQuizQuestion[i].question; //this will replace the question 
            //this will replace the option drop down list 
            document.getElementById(arrayOptionAnswerList[i]).innerHTML = "<option selected disabled class='optionStyleDisabled'>" + arrayOfQuizQuestion[i].showDefault + "</option>" + 
                "<option class = 'optionStyle'>" + arrayOfQuizQuestion[i].answer1 + "</option>" + 
                "<option class='optionStyle'>" + arrayOfQuizQuestion[i].answer2 + "</option>" + 
                "<option class='optionStyle'>" + arrayOfQuizQuestion[i].answer3 + "</option>" + 
                "<option class='optionStyle'>" + arrayOfQuizQuestion[i].answer4 + "</option>" ; 
                
        }
        
        
        var checkAnswer = document.getElementById("submit_answer");
        checkAnswer.addEventListener("click", checkCorrectAnswer, false );

        function checkCorrectAnswer() {
            
    
            var currentAnswer = 0;
            var score = 0;

            for (i = 0; i < arrayOfQuizQuestion.length; i++) {
                currentAnswer = document.getElementById(arrayOptionAnswerList[i]).selectedIndex + 1; //this will ignore the default option 
                
                 
        
        /*for( var i = 0; i < clearTicks.length; i++) {
            
            clearticks[i].innerHTML = "";
            
        }*/


                if (currentAnswer === 1) {
                document.getElementById("quizDescription").innerHTML = "You have not completed all the questions";
                    document.getElementById("quizScore").innerHTML = "";
                    
            //}

                } else {

                if(currentAnswer === arrayOfQuizQuestion[i].correctAnswer) {
                    score++;

                    document.getElementById(arrayOfInputAnswerList[i]).innerHTML = "correct";
                    
                    

                } else {

                    document.getElementById(arrayOfInputAnswerList[i]).innerHTML = "wrong";
                    
                    
                }
                    
              
                    
                    
                    
                    
         


                    if (score === arrayOfQuizQuestion.length) {       
                    
                    document.getElementById("quizScore").innerHTML = score + "/" + arrayOfQuizQuestion.length + " correct answers ";

                    document.getElementById("quizDescription").innerHTML = "Well done! You have successfully tested your knowledge for this lesson, click the CLOSE BUTTON.";
                }
                else if (score > 0) {       
                
                    document.getElementById("quizScore").innerHTML = score + "/" + arrayOfQuizQuestion.length + " correct answers ";

                    document.getElementById("quizDescription").innerHTML = "Keep going! You should TRY AGAIN to get 8/8 correct answers or click the CLOSE BUTTON.";
                }
                else if (score === 0) {
                    
                    document.getElementById("quizScore").innerHTML = "0/" + arrayOfQuizQuestion.length + " correct answer ";

                    document.getElementById("quizDescription").innerHTML = "Not good! You must revise the lesson or TRY THE QUIZ AGAIN, otherwise click the CLOSE BUTTON.";
                }

           


        
        }
        
        
        
    }
            
        } // end of function checkCorrectAnswer
        
        
        
        
        
        
    }
}




    
            
            