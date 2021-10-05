/** This JS script was created with the help from 
 * the walk through Love Maths project 
 * and using https://www.sitepoint.com/simple-javascript-quiz/
 */

const startButton = document.getElementById('play-btn');
const nextButton = document.getElementById('next-btn');
const questionBox = document.getElementById('question-box');
const questionSection = document.getElementById('question');
const optionButton = document.getElementById('options-section');
const resultsContainer = document.getElementById('results-container');

let mixQuestions;
let currentQuestionIndex;
let myTimeVar = 4000;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});

function hideRules() {
    document.getElementById("rules-container").style.display = "none"; // used by index.html to hide rules of the quiz after user clicks on play button
}

// Starts the quiz
function startQuiz() {
    startButton.classList.add('hide'); // hides play button

    mixQuestions = questions.sort(() => Math.random() - 0.5), // this mixes questions
        currentQuestionIndex = 0,
        questionBox.classList.remove('hide'),
        nextQuestion();
    mixQuestions.splice(5, 12); // This selects 5 random questions each time the user plays the quiz. used code from w3schools.com
    console.log(mixQuestions);
}

function nextQuestion() {
    clearConditions();
    showQuestion(mixQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
    questionSection.innerHTML = question.question;
    let counter = 1;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.setAttribute('id', counter);
        counter += 1;
        button.classList.add('btn');
        if (option.correct) {
            button.dataset.correct = option.correct;
        }
        button.addEventListener('click', selectOption);
        optionButton.appendChild(button);
    });
}

// Hides next question button 
function clearConditions() {
    nextButton.classList.add('hide');
    resultsContainer.classList.add('hide');
    while (optionButton.firstChild) {
        optionButton.removeChild(optionButton.firstChild);
    }
}

// Listens for selected option
function selectOption(e) {
    const clickedButton = e.target;
    const correct = clickedButton.dataset.correct;
    setCorrectnessClass(document.body, correct);
    document.getElementById(e.target.id).classList.add('selection'); // highlights users clicked choice
    console.log(e.target.id);
    Array.from(optionButton.children).forEach(button => {
        setCorrectnessClass(button, button.dataset.correct);
    });
    if (mixQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.classList.add('hide');
        myTimeVar = setTimeout(showEndScreen, 4000); // delays a move to an end screen

    }
}

// Removes questions container and shows end of quiz screen
function showEndScreen() {
    startButton.innerText = 'Play again!'; // changes text of the button from Play to Play again!
    startButton.classList.remove('hide'); // shows play button for user to try the quiz again
    questionBox.classList.add('hide'); // hides questions container
    resultsContainer.classList.remove('hide'); // shows end of quiz screen
}

// Gives options colored background based on correct/incorrect answers
function setCorrectnessClass(element, correct) {
    clearCorrectnessClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

// Hides the colored background
function clearCorrectnessClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}


let questions = [

    {
        question: "What is the world's most venomous fish?",
        options: [{
                text: 'Lionfish',
                correct: false
            },
            {
                text: 'Pufferfish',
                correct: false
            },
            {
                text: 'Stonefish',
                correct: true
            } // popOut: "Found in the waters of Australia, these camouflaged bottom dwellers are incredibly poisonous. The stonefish can inject a venom through its dorsal fin spines, and is capable of killing an adult person in less than an hour. Yikes!"
        ],
    },
    {
        question: "How many languages are written from right to left?",
        options: [{
                text: '3',
                correct: false
            },
            {
                text: '12',
                correct: true
            }, // popOut: "The 12 languages that are written from right to left are Arabic, Aramaic, Azeri, Divehi, Fula, Hebrew, Kurdish, N'ko, Persian, Rohingya, Syriac, and Urdu."
            {
                text: 20,
                correct: false
            }
        ],
    },
    {
        question: "Which finger is responsible for 50% of the strength in your hand?",
        options: [{
                text: 'Thumb',
                correct: false
            },
            {
                text: 'Index finger',
                correct: false
            },
            {
                text: 'Pinky',
                correct: true
            } // popOut: "Your little digit has a lot of power. According to hand therapist Laurie Rogers, via The New York Times, without your pinky finger, you would lose 50% of your hand strength, easily. That's because it aids the ring finger by providing the power to grip and make a fist, while your index, middle finger, and thumb are best for grabbing and pinching."
        ],
    },
    {
        question: "Before it was a called a mouse, what animal was that computer accessory named after?",
        options: [{
                text: 'Clam',
                correct: false
            },
            {
                text: 'Turtle',
                correct: true
            }, // popOut: "First, what we now know of as a mouse had the not-so-catchy name, 'X-Y Position Indicator for a Display System,' then it got the snappier moniker turtle, then rodent, and finally a mouse."                ],
            {
                text: 'Snail',
                correct: false
            }
        ]
    },
    {
        question: "What is ablutophobia?",
        options: [{
                text: 'A fear of bathing',
                correct: true
            }, // popOut: "It is the persistent, abnormal and unwarranted fear of bathing, washing or cleaning. It is a situation-specific phobia."
            {
                text: 'A fear of work or the workplace',
                correct: false
            },
            {
                text: 'A fear of belly buttons',
                correct: false
            }
        ]
    },
    {
        question: "Which planets in our solar system do not have moons?",
        options: [{
                text: 'Mercury and Venus',
                correct: true
            }, // popOut: "Mars has two moons, Neptune has 14, and Uranus has 27, according to NASA. Jupiter has 79 known moons and Saturn has 53, plus nine more that might officially be deemed moons once we know a little more about them. Mercury and Venus, on the other hand, don't have any moons at all."
            {
                text: 'Mars and Mercury',
                correct: false
            },
            {
                text: 'Mars and Neptune',
                correct: false
            }
        ]
    },
    {
        question: "What is the loudest animal on Earth?",
        options: [{
                text: 'Sperm whale',
                correct: true
            }, // popOut: "It's been reported by the BBC that while a jet engine produces around 188 decibels of noise during take-off, the sperm whale tops that with a clicking sound that has been recorded at 230 decibels."
            {
                text: 'Snapping Shrimp',
                correct: false
            },
            {
                text: 'Howler Monkey',
                correct: false
            }
        ]
    },
    {
        question: "Which country has the oldest continuously used national flag?",
        options: [{
                text: 'Netherlands',
                correct: false
            },
            {
                text: 'Nepal',
                correct: false
            },
            {
                text: 'Denmark',
                correct: true
            } // popOut: 'The country of Denmark has been using the same flag design since 1625 and holds the record for the oldest continuously used national flag in the world. A white Scandinavian cross on a bright red background, the bold and instantly recognizable flag is known as the "Dannebrog" or "Danish cloth".'

        ]
    },
    {
        question: "In which country was the largest Tyrannosaurus rex skeleton found?",
        options: [{
                text: 'South Dakota, USA',
                correct: false
            },
            {
                text: 'Saskatchewan, Canada',
                correct: true
            }, // popOut: "In 2019, paleontologists from the University of Alberta announced that they had discovered the biggest Tyrannosaurus rex skeleton ever found. Measuring 42.7 feet long, the beast likely lived in the Canadian province of Saskatchewan around 66 million years ago."
            {
                text: 'Lourinhã, Portugal',
                correct: false
            }
        ]
    },
    {
        question: "What is the world's deepest lake?",
        options: [{
                text: 'Caspian Sea',
                correct: false
            },
            {
                text: 'Lake Vostok',
                correct: false
            },
            {
                text: 'Lake Baikal',
                correct: true
            } // popOut: "Lake Baikal in Southern Siberia is 5,315 feet or 1,620 meters deep. It also holds the record for being the largest freshwater lake in the world and the oldest, dating back about 25 million years."            
        ]
    },
    {
        question: "What percentage of Sweden's household garbage makes it to landfills?",
        options: [{
                text: '2%',
                correct: false
            },
            {
                text: '4%',
                correct: false
            },
            {
                text: '1%',
                correct: true
            } // popOut: "Sweden has figured out how to deal with its garbage in an incredible way. According to The Verge, the country is able to recycle about half of its household trash, and the rest is 'converted into energy through an incineration process called waste-to-energy,' leaving roughly 1% for its landfills."
        ]
    },
    {
        question: "How long is a moment?",
        options: [{
                text: '25 seconds',
                correct: false
            },
            {
                text: '90 seconds',
                correct: true
            }, // popOut: "The term dates back to at least the 8th Century, when the monk St Bede used it to define a period of 90 seconds.An hour in medieval times therefore consisted of 40 moments. The Hebrew calendar has a shorter definition of a moment, referred to as rega, which is roughly equivalent to 5/144 of a second."
            {
                text: '45 seconds',
                correct: false
            }
        ]
    },
];