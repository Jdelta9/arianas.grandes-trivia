// if (typeof jQuery !== 'undefined') {
//     console.log('jQuery Loaded');
// }
// else {
//     console.log('not loaded yet');
// }
$(document).ready(function () {
})

$(document).on('click','#end',function(){
   game.done();
 })

$(document).on('click','#start',function(){
    game.start();
}) 

var questions = [{
        question: "What state is Ariana from?",
        answers: ["Texas" , "Florida" , "New York" , "California"],
        correctAnswer: "Florida"
    },{
        question: "What color is Ariana's hair naturally?",
        answers: ["Blonde" , "Red" , "Brown" , "Ginger"],
        correctAnswer: "Brown"
    },{
        question: "What is Ariana's older brother's name?",
        answers: ["Juan" , "Francisco" , "Ronnie" , "Frankie"],
        correctAnswer:"Frankie"
    },{
        question: "How many octaves does Ariana’s voice range?",
        answers: ["0" , "2" , "4" , "6"],
        correctAnswer: "6"
    },{
        question: "How tall is Ariana?",
        answers: ["5.0", "5.2", "5.3", "5.4"],
        correctAnswer: "5.0"
}];

var game ={
    correct:0,  
    incorrect:0,
    counter:60,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter<=0){
           console.log("Time is up!");
           game.done();

        }
    },

    start: function(){

        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2> Time remaining: <span id="counter">60</span> seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
            for (var j = 0;j< questions[i].answers.length; j++){
                $("#subwrapper").append("<input type= 'radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>')

    },

    done: function(){

        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result:function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3> Correct answer: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3> Incorrect answer: "+this.incorrect+"</h3>"); 
        $('#subwrapper').append("<h3> Unanswered:"+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
  }  

