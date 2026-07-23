const questions = [
    "🍗 Makanan favorit yang gak pernah bikin bosen?",
    "☕ Minuman favorit kalau nongkrong?",
    "🎵 Lagu yang lagi sering diputar?",
    "✈️ Destinasi impian bareng pasangan?",
    "❤️ Apa love language kamu?"
];

let current = 0;
let answers = [];

function startQuiz(){

    document.getElementById("welcome").style.display="none";
    document.getElementById("quiz").style.display="block";

    showQuestion();

}

function showQuestion(){

    document.getElementById("counter").innerHTML=
    (current+1)+" / "+questions.length;

    document.getElementById("question").innerHTML=
    questions[current];

    document.getElementById("answer").value="";

    document.getElementById("progress-bar").style.width=
    ((current)/questions.length*100)+"%";

}

function nextQuestion(){

    const value=document.getElementById("answer").value;

    answers.push(value);

    current++;

    if(current>=questions.length){

        document.getElementById("quiz").style.display="none";
        document.getElementById("finish").style.display="block";

        document.getElementById("progress-bar").style.width="100%";

        return;
    }

    showQuestion();

}

function copyAnswers(){

    let text="Jawaban Andri\n\n";

    for(let i=0;i<questions.length;i++){

        text+=questions[i]+"\n";
        text+=answers[i]+"\n\n";

    }

    navigator.clipboard.writeText(text);

    alert("Jawaban berhasil dicopy ❤️");

}
