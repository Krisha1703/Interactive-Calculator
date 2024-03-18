/* Basic Interactive Calculator
   Made By: Krisha Botadara*/

//Default answer
var PreviousAnswer = "ERROR!";
//Declaration of variables using id and class attributes from the HTML file

//The calcualtor body it self
var Calculator = document.getElementById("calculator");

//The display of the calcualtor
var Display = document.getElementById("display");

//The heading od the webpage
var Title = document.getElementById("heading");

//Decimal Point
var Point = document.getElementById("point");

//Equal to button
var Equal = document.getElementById("equal");

//Number buttons from 0 to 9
var num = [];
for (var i = 0; i <= 9; i++){
    num[i] = document.getElementById("n"+i)
}

//Function buttons
var Delete = document.getElementById("del");
var Clear = document.getElementById("clr");
var Answer = document.getElementById("ans");

//Operator buttons
var Multiplication = document.getElementById("mul");
var Divison = document.getElementById("div");
var Subtraction = document.getElementById("sub");
var Addition = document.getElementById("add");
var Percentage = document.getElementById("percent");

//Audio Files
const audioElements = {};
const audioID = [
    "One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Zero",
    "Point","Delete","Clear","Answer","Times","Divide","Plus","Minus","Percentage","Equals","Negative"
];
// var audioOne = document.getElementById("audioOne");
// var audioTwo = document.getElementById("audioTwo");
//........Continue like this for each audio file, 
//however it will be time consuming and take a lot of lines of code......

audioID.forEach(id => {
    audioElements["audio" + id] = document.getElementById("audio" + id);
});

//Add event listeners to the number button

//Number 0
num[0].addEventListener('click', function(){
    if (audioZero){
        audioZero.play();
    }
    ClearInitialText();
    AppendToDisplay('0');
})

//Number 1
num[1].addEventListener('click', function(){
    if (audioOne){
        audioOne.play();
    }
    ClearInitialText();
    AppendToDisplay('1');
})

//Number 2
num[2].addEventListener('click', function(){
    if (audioTwo){
        audioTwo.play();
    }
    ClearInitialText();
    AppendToDisplay('2');
})

//Number 3
num[3].addEventListener('click', function(){
    if (audioThree){
        audioThree.play();
    }
    ClearInitialText();
    AppendToDisplay('3');
})

//Number 4
num[4].addEventListener('click', function(){
    if (audioFour){
        audioFour.play();
    }
    ClearInitialText();
    AppendToDisplay('4');
})

//Number 5
num[5].addEventListener('click', function(){
    if (audioFive){
        audioFive.play();
    }
    ClearInitialText();
    AppendToDisplay('5');
})

//Number 6
num[6].addEventListener('click', function(){
    if (audioSix){
        audioSix.play();
    }
    ClearInitialText();
    AppendToDisplay('6');
})

//Number 7
num[7].addEventListener('click', function(){
    if (audioSeven){
        audioSeven.play();
    }
    ClearInitialText();
    AppendToDisplay('7');
})

//Number 8
num[8].addEventListener('click', function(){
    if (audioEight){
        audioEight.play();
    }
    ClearInitialText();
    AppendToDisplay('8');
})

//Number 9
num[9].addEventListener('click', function(){
    if (audioNine){
        audioNine.play();
    }
    ClearInitialText();
    AppendToDisplay('9');
})

//Operator +
Addition.addEventListener('click', function(){
    if (audioPlus){
        audioPlus.play();
    }
    ClearInitialText();
    AppendToDisplay('+');
})

//Operator -
Subtraction.addEventListener('click', function(){
    if (audioMinus){
        audioMinus.play();
    }
    ClearInitialText();
    AppendToDisplay('-');
})

//Operator *
Multiplication.addEventListener('click', function(){
    if (audioTimes){
        audioTimes.play();
    }
    ClearInitialText();
    AppendToDisplay('x');
})

//Operator /
Divison.addEventListener('click', function(){
    if (audioDivide){
        audioDivide.play();
    }
    ClearInitialText();
    AppendToDisplay('÷');
})

//Operator %
Percentage.addEventListener('click', function(){
    if (audioPercentage){
        audioPercentage.play();
    }
    ClearInitialText();
    AppendToDisplay('%');
})

//Function DEL
Delete.addEventListener('click', function(){
    if (audioDelete){
        audioDelete.play();
    }
    ClearInitialText();
    DeleteFromDisplay();
})

//Function CLR
Clear.addEventListener('click', function(){
    if (audioClear){
        audioClear.play();
    }
    ClearFromDisplay();
})

//Function ANS
Answer.addEventListener('click', function(){
    if (audioAnswer){
        audioAnswer.play();
    }
    ClearInitialText();
    AppendToDisplay('ANS');
    LastAnswer();
})

//Equal to =
Equal.addEventListener('click', function(){
    ClearInitialText();
    if (audioEquals){
        audioEquals.addEventListener('ended', function(){
            Calculate();
        });
        audioEquals.play();
    }
    else{
        Calculate();
    }
    
})

//Point .
Point.addEventListener('click', function(){
    if (audioPoint){
        audioPoint.play();
    }
    ClearInitialText();
    AppendToDisplay('.');
})

//Dark Mode
function Dark(){
    //Audio for the Dark mode
    var audioDark = new Audio('DarkMode.mp4');
    audioDark.play();

    //Body of the calculator
    Calculator.style.backgroundColor = "rgb(38,38,229)";

    //Heading of the webpage
    Title.style.color = "#03045E";

    //Numbers - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, .
    var nums = document.querySelectorAll(".number") //Select all element with class number
    //Iterates until all the elements of the class number
    for(var i = 0; i < nums.length; i++){
        nums[i].style.color = "white"; //Applies white color to the font to elements with class number
        //Applies background color to the elements with class number
        nums[i].style.backgroundColor = "#03045E"; 
    }

    //Operators - +, -, *, /, %
    var oper = document.querySelectorAll(".operator") //Select all element with class operator
    //Iterates until all the elements of the class operator
    for(var i = 0; i < oper.length; i++){
        oper[i].style.color = "white"; //Applies white color to the font to elements with class operator
        //Applies background color to the elements with class operator
        oper[i].style.backgroundColor = "#FFBF00"; 
    }

    //Functions - DEL, CLR, ANS
    var func = document.querySelectorAll(".function") //Select all element with class function
    //Iterates until all the elements of the class function
    for(var i = 0; i < func.length; i++){
        func[i].style.color = "white"; //Applies white color to the font to elements with class function
        //Applies background color to the elements with class function
        func[i].style.backgroundColor = "#DD571C"; 
    }

    //Main - Display, =
    var main = document.querySelectorAll(".main") //Select all element with class main
    //Iterates until all the elements of the class main
    for(var i = 0; i < main.length; i++){
        main[i].style.color = "white"; //Applies white color to the font to elements with class main
        //Applies background color to the elements with class main
        main[i].style.backgroundColor = "black"; 
    }
}

//Light Mode
function Light(){
    //Audio for the Dark mode
    var audioLight = new Audio('LightMode.mp4');
    audioLight.play();

    //Body of the calculator
    Calculator.style.backgroundColor = "rgb(128,189,233)";

    //Heading of the webpage
    Title.style.color = "rgb(128,189,233)";

    //Numbers - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, .
    var nums = document.querySelectorAll(".number") //Select all element with class number
    //Iterates until all the elements of the class number
    for(var i = 0; i < nums.length; i++){
        nums[i].style.color = "#333333"; //Applies white color to the font to elements with class number
        //Applies background color to the elements with class number
        nums[i].style.backgroundColor = "#E0E0E0"; 
    }

    //Operators - +, -, *, /, %
    var oper = document.querySelectorAll(".operator") //Select all element with class operator
    //Iterates until all the elements of the class operator
    for(var i = 0; i < oper.length; i++){
        oper[i].style.color = "#333333"; //Applies white color to the font to elements with class operator
        //Applies background color to the elements with class operator
        oper[i].style.backgroundColor = "#FFDC26"; 
    }

    //Functions - DEL, CLR, ANS
    var func = document.querySelectorAll(".function") //Select all element with class function
    //Iterates until all the elements of the class function
    for(var i = 0; i < func.length; i++){
        func[i].style.color = "#333333"; //Applies white color to the font to elements with class function
        //Applies background color to the elements with class function
        func[i].style.backgroundColor = "#F89851"; 
    }

    //Main - Display, =
    var main = document.querySelectorAll(".main") //Select all element with class main
    //Iterates until all the elements of the class main
    for(var i = 0; i < main.length; i++){
        main[i].style.color = "#333333"; //Applies white color to the font to elements with class main
        //Applies background color to the elements with class main
        main[i].style.backgroundColor = "white"; 
    }
}

//Neutral Mode
function Neutral(){
    //Audio for the Dark mode
    var audioNeutral = new Audio('NeutralMode.mp4');
    audioNeutral.play();

    //Body of the calculator
    Calculator.style.backgroundColor = "rgb(71,70,70)";

    //Heading of the webpage
    Title.style.color = "white";

    //Numbers - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, .
    var nums = document.querySelectorAll(".number") //Select all element with class number
    //Iterates until all the elements of the class number
    for(var i = 0; i < nums.length; i++){
        nums[i].style.color = "rgb(71,70,70)"; //Applies white color to the font to elements with class number
        //Applies background color to the elements with class number
        nums[i].style.backgroundColor = "white"; 
    }

    //Operators - +, -, *, /, %
    var oper = document.querySelectorAll(".operator") //Select all element with class operator
    //Iterates until all the elements of the class operator
    for(var i = 0; i < oper.length; i++){
        oper[i].style.color = "rgb(71,70,70)"; //Applies white color to the font to elements with class operator
        //Applies background color to the elements with class operator
        oper[i].style.backgroundColor = "#rgb(216,195,8)"; 
    }

    //Functions - DEL, CLR, ANS
    var func = document.querySelectorAll(".function") //Select all element with class function
    //Iterates until all the elements of the class function
    for(var i = 0; i < func.length; i++){
        func[i].style.color = "rgb(71,70,70)"; //Applies white color to the font to elements with class function
        //Applies background color to the elements with class function
        func[i].style.backgroundColor = "orange"; 
    }

    //Main - Display, =
    var main = document.querySelectorAll(".main") //Select all element with class main
    //Iterates until all the elements of the class main
    for(var i = 0; i < main.length; i++){
        main[i].style.color = "rgb(71,70,70)"; //Applies white color to the font to elements with class main
        //Applies background color to the elements with class main
        main[i].style.backgroundColor = "rgb(8,159,108)"; 
    }
}

//Function to display the input on the display section
function AppendToDisplay(Value){
    Display.textContent += Value;
}

//Function to delete or backspace
function DeleteFromDisplay(){
    if(Display.textContent.length > 0){
        Display.textContent = Display.textContent.slice(0,-1); //Removes the last character of the display section
    }
    else{
        Display.textContent = "ERROR!";
    }
}

//Function to clear content from the display section
function ClearFromDisplay(){
    Display.textContent = "";
}

//Function to clear initial text on the display section
function ClearInitialText(){
    if (Display.textContent === '#MADE BY: KRISHA'){
        ClearFromDisplay();
    }
    else if(Display.textContent === 'ERROR!'){
        ClearFromDisplay();
    }
}

//Function to validate user input
function ValidateInput(){
    //Iterates each character of the display section until reached the last character of the content
    for(let i = 0; i < Display.textContent.length; i++){
        //IF the first character is *, /, or % can it would show error
        //This because the first character should be a number
        //For operators like + and -, we will handle this case little different
        if(Display.textContent[0] === 'x' || Display.textContent[0] === '%' || Display.textContent[0] === '÷'){
            Display.textContent = "ERROR!";
        }
        else{ //If the first character is not any of the above operator
            //Plus and minus operators
            if((Display.textContent[i] === '+' && Display.textContent[i+1] === '+') || //Two plus signs 3 + + 4  =  3 + 4
               (Display.textContent[i] === '+' && Display.textContent[i+1] === '-') || //Plus followed by minus sign 3 + - 4  =  3 - 4
               (Display.textContent[i] === '-' && Display.textContent[i+1] === '+') || //Minus followed by plus sign 3 - + 4  =  3 - 4
               (Display.textContent[i] === '-' && Display.textContent[i+1] === '-') ||//Two minus sign  3 - - 4  =  3 + 4

               //Percentage operator with plus and minus
               (Display.textContent[i] === '%' && Display.textContent[i+1] === '+') || // % followed by plus sign 6 % + 3 = 3.06
               (Display.textContent[i] === '%' && Display.textContent[i+1] === '-') || // % followed by minus sign 6 % - 3 = -2.94

               //Multiplication operator with plus and minus
               (Display.textContent[i] === 'x' && Display.textContent[i+1] === '+') || // x followed by plus sign 6 x + 3 = 6 x 3 = 24
               (Display.textContent[i] === 'x' && Display.textContent[i+1] === '-') || // x followed by minus sign 6 x - 3 = 6 x (-3) = -24

               //Division operator with plus and minus
               (Display.textContent[i] === '÷' && Display.textContent[i+1] === '+') || // x followed by plus sign 6 ÷ + 3 = 6 ÷ 3 = 2
               (Display.textContent[i] === '÷' && Display.textContent[i+1] === '-')  // x followed by minus sign 6 ÷ - 3 = 6 ÷ (-3) = -2
        
            ) {  /*Do nothing if satify any of the above conditions*/  }

            //When the above valid conditions are not met
            //The below conditions ensures that no two invalid operators other then the above valid operators exist consecutively.
            //First operator at index i
            else if((Display.textContent[i] === '÷' || Display.textContent[i] === 'x' || 
                    Display.textContent[i] === '%' || Display.textContent[i] === '+' || Display.textContent[i] === '-')
                    &&
                    //Second operator at index i + 1
                    (Display.textContent[i+1] === '÷' || Display.textContent[i+1] === 'x' || 
                    Display.textContent[i+1] === '%' || Display.textContent[i+1] === '+' || Display.textContent[i+1] === '-')

            ) { Display.textContent = "ERROR!";  }
        }
    }
}

//Calculate function to evaluate the input expression
function Calculate(){
    try{
        if (Display.textContent !== ''){ //The display section should not be empty
            ValidateInput();//Validates the input expression

            //Using eval function so replacing some unfamiliar characters
            //1. For multiplication -> x replaced with *
            //2. For division -> ÷ replaced with /
            //3. For percentage ->  % replaced with /100
            //4. For answer (ANS button) ->  ANS replaced with PreviousAnswer
            //5. For two minus -> - - replaced with +
            //6. For two plus ->  + + replaced with +

            Display.textContent = Display.textContent.replace(/x/g, '*').replace(/÷/g, '/').replace(/%/g, '/100')
            .replace('ANS', PreviousAnswer).replace('--', '+').replace('++', '+');

            Result = eval(Display.textContent); //use eval function to evaluate the input expression
            Result = Number(Result.toFixed(6)); //round ups the final answer to 6 d.p.
            Display.textContent = Result; // Final answer is displayed on the display section
            PreviousAnswer = Result; //Last answer is set to the PreviousAnswer, so the value of ANS is updated
            AudioResult();

        }
        else{
            Display.textContent = "ERROR!";
        }
    }

    catch (error) {
        Display.textContent = "ERROR!";
        if (Display.textContent = "ERROR!"){ //Plays the audio files for "Error" when error is displayed
            var audioError = new Audio('audioError.mp4');
            audioError.play();
        }
    }
}

//Function answer to display and evaluate expression using the last answer
function LastAnswer(){
    if (Display.textContent !== ''){
        //append the operator and calculate using the previous answer
        AppendToDisplay(operator);
        Calculate();
    }
}

//Function to output audio files for the final answer
function AudioResult(){
    let ResultString = Result.toString(); //Converts the final answer into string
    let audioFiles = []; //audioFiles for each character is appended here

    for (var i = 0;i < ResultString.length;i++){
        let character = ResultString.charAt(i); //Retrieves each character from the converted string
        let audioFile = ''; //Initially the audioFile is set to null

        switch(character){
            case '0': audioFile = 'Zero'; break; //Audio file for number 0 is output when final answer contains 0
            case '1': audioFile = 'One'; break; //Audio file for number 1 is output when final answer contains 1
            case '2': audioFile = 'Two'; break;
            case '3': audioFile = 'Three'; break;
            case '4': audioFile = 'Four'; break;
            case '5': audioFile = 'Five'; break;
            case '6': audioFile = 'Six'; break;
            case '7': audioFile = 'Seven'; break;
            case '8': audioFile = 'Eight'; break;
            case '9': audioFile = 'Nine'; break;
            case '.': audioFile = 'Point'; break; //Audio file for . is output when final answer contains point
            case '-': audioFile = 'audioNegative'; break; //Audio file for negative answer is output when final answer contains - (negative sign)
        }

        if (audioFile !== ''){ //append each audioFile into audioFiles array until the audioFile is not empty
            audioFiles.push(audioFile);
        }
    }
    //Play audio files sequentially
    PlayAudioFile(audioFiles, 0);
}

function PlayAudioFile(audioFiles, index){
    if (index < audioFiles.length){ //Checks that the current index is less than the length of audioFiles array
        var audio = new Audio(audioFiles[index] + '.mp4');
        audio.onended = function (){
            //Play the next audio when the current one ends
            PlayAudioFile(audioFiles, index + 1);
        };
        audio.play();
    }
}

