const quizData=[
    {
        question:'How old Dumboldor was ?',
        a:'10',
        b:'100',
        c:'130',
        d:'forever',
        correct:'c'
    },
    {
        question:'How old Hagreed was ?',
        a:'10',
        b:'100',
        c:'130',
        d:'forever',
        correct:'b'
    },{
        question:'How old Abafrod was ?',
        a_1:'10',
        b:'100',
        c:'130',
        d:'forever',
        correct:'c'
    }
];

const questionE1=document.getElementById('#question');

const option1 = document.getElementById('#option1');

const option2 = document.getElementById('#option2');

const option3 = document.getElementById('#option3');

const option4 = document.getElementById('#option4');

const submitBtn =document.getElementById('#submit')

let currentQuestion =0;

loadQuestion();

function loadQuestion(){
    
    const currentQuizData=quizData[currentQuestion]
    
    console.log(currentQuizData.question);
    $('#question').html(currentQuizData.question);
    $('#option1').html(currentQuizData.a);
    $('#option2').html(currentQuizData.b);
    $('#option3').html(currentQuizData.c);
    $('#option4').html(currentQuizData.d);

    currentQuestion++;
}

$('#submit').on('click',function(){
    currentQuestion++;

    if(currentQuestion< currentQuizData.length){

        loadQuestion();
    }
    else{
        // show Result
        alert("Finish");
    }

})