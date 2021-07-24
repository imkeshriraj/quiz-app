const quizData=[
    {
        question:'Java Script is a _____ Language ?',
        a:'Markup',
        b:'Scripting',
        c:'Styling',
        d:'Not a language',
        correct:'b'
    },
    {
        question:'Java script is a ______ threaded?',
        a:'Single',
        b:'Multiple',
        c:'Double',
        d:'Quad',
        correct:'a'
    },{
        question:'Javascript follows ...?',
        a_1:'Synchronous',
        b:'ASynchronous',
        c:'both',
        d:'Non of these',
        correct:'b'
    }
];

const questionE1=document.getElementById('#question');

const option1 = document.getElementById('#option1');

const option2 = document.getElementById('#option2');

const option3 = document.getElementById('#option3');

const option4 = document.getElementById('#option4');

const submitBtn =document.getElementById('#submit')

const quiz =document.getElementById('#quiz')

let currentQuestion =0;
let answer= undefined;
let score =0;

loadQuestion();

function loadQuestion(){
    deSelectElement();
    const currentQuizData=quizData[currentQuestion]
    
    $('#question').html(currentQuizData.question);
    $('#option1').html(currentQuizData.a);
    $('#option2').html(currentQuizData.b);
    $('#option3').html(currentQuizData.c);
    $('#option4').html(currentQuizData.d);

    // currentQuestion++;
}

$('#submit').on('click',function(){
    //check to see the answer
    const answer=   getSelected();

 if(answer)
 {

    if(answer === quizData[currentQuestion].correct){
        score++;
        
    }

     currentQuestion++;
     if(currentQuestion< quizData.length){
        loadQuestion();
        // score++;
    }
    else{
        

        $('#quiz').html(`<h2>You answered correctly at ${score} out of 
        ${quizData.length} 
        </h2>
        <div class="refresh-button"><button onClick="location.reload();">Refresh</button></div>
        
        `)
       
    }
         
     }
     else{
         alert("Please select the answer")
     }
     
     
        

});

function getSelected(){

    let answer =undefined;
    const answerEls =document.querySelectorAll('.answer');
    answerEls.forEach((answerEls)=>{
        if(answerEls.checked){
            answer=answerEls.id;

        }
        
    });
 return answer;

    
}

function deSelectElement(){
    const answerEls =document.querySelectorAll('.answer');
    answerEls.forEach((answerEls)=>{
        answerEls.checked=false;
        
    });

}