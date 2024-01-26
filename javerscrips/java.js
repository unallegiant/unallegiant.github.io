// ------------------------------------------------------------------
// |               THE IMPLEMENTATION JAVA BEGINs HERE              |
// ------------------------------------------------------------------

// terminal var for ease of use for me
var terminal = document.getElementById("terminal");
// clear the terminal in the site
function resetTerm()
{
    terminal.innerHTML = "<b><u>The Terminal</u></b><br>";
}
function userReset()
{
    terminal.innerHTML = "<b><u>The Terminal</u></b><br><span style='color:gray'>--console cleared--</span><br>";
}
// print text to the terminal per-line, like in Python
function print(input)
{
    terminal.innerHTML += input + "<br>";
}
// prompts the user for input so that I can use it in my applets
function input(question)
{
    let intput = prompt(question);
    if (intput != null) {
        print("<span style='color:lime'>&gt;  input - " + intput + "</span>");
    }
    else {
        print("<span style='color:red'>&gt; input cancelled by user</span>");
        return null;
    }
    return intput;
}
// this will create a form with an input box with the specified
// placeholder and id. the input's id is whatever id was sent,
// with 'input' appended to the end of it.
function createInput(placeholder, id)
{
    var form = document.createElement("form");
    form.id = id;
    var textBox = document.createElement("input");
    document.getElementById("terminal").appendChild(form);
    document.getElementById(form.id).appendChild(textBox);
    textBox.id = id + "input";
    textBox.placeholder = placeholder;
}
// ------------------------------------------------------------------
// |                 THE APPLETS THEMSELVES BEGIN HERE              |
// ------------------------------------------------------------------
function printSomething()
{
    print(prompt("enter something to print"));
}
function manyNumbers()
{
    resetTerm();
    let x = 0;
    while (x < 1000)
    {
        x++;
        print(x);
    }
}
function stringTraversal()
{
    resetTerm();
    let index = 1;
    print("");
    let straverse = input("enter any string of characters your heart desires.");
    if (straverse != null)
    {
        print("now printing each character of that string line-by-line:<br>");
    }
    for(i = 0; i < straverse.length; i++)
    {
        print(straverse.substring(i, i+1));
    }
}
function mathSqrting()
{
    resetTerm();
    let sixteenInstead = 16;
    let dumber = sixteenInstead;
    let somethingStupid = dumber;
    let allOverThePlace = somethingStupid;
    let Public = Math.sqrt(allOverThePlace);
        
    print("<br>math is really sqrting all over the place in public<br>");
    print("<i style='color:cyan'>let</i> sixteenInstead <span style='color:red'>=</span> 16;");
    print("<i style='color:cyan'>let</i> dumber <span style='color:red'>=</span> sixteenInstead;");
    print("<i style='color:cyan'>let</i> somethingStupid <span style='color:red'>=</span> dumber;");
    print("<i style='color:cyan'>let</i> allOverThePlace <span style='color:red'>=</span> somethingStupid;");
    print("<i style='color:cyan'>let</i> Public <span style='color:red'>=</span> <span style='color:lime'>Math</span>.<span style='color:cyan'>sqrt</span>(allOverThePlace);<br>");
    print("Math, sqrting allOverThePlace in Public: " + Public);
}
function quizGame()
{
    resetTerm();
    
    // the header and counter
    print("<br><i>Java vs Python Quiz Game</i><br>");
    let counter = 0;
    
    // question one
    print("<i>What is the java equivalent of print()?</i><br>a) System.out.println();<br>b) println();<br>c) std::cout <<;<br>d) printf();")
    createInput("enter answer here", "q1");
    q1.addEventListener('submit', function(e) {
        e.preventDefault();
        q1.style.display = "none";
        if (document.getElementById("q1input").value == "a")
        {
            print("<span style='color:lime'>correct!</span>");
            counter++;
            questionTwo();
        }
        else
        {
            print("<span style='color:red'>incorrect, or invalid.</span>");
            questionTwo();
        }
    });
    
    // question two
    function questionTwo()
    {
        print("<br><i>2. What does Java use instead of functions?</i><br>a) Classes<br>b) Div's<br>c) Java uses functions.<br>d) Methods");
        createInput("enter answer here", "q2");
        q2.addEventListener('submit', function(e) {
            e.preventDefault();
            q2.style.display = "none";
            if (document.getElementById("q2input").value == "d")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                questionThree();
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                questionThree();
            }
        });
    }
    
    function questionThree()
    {
        print("<br><i>3. What is the Java if/elif/else equivalent?</i><br>a) if/elif/otherwise<br>b) try/catch<br>c) if/else if/else<br>d) look/elseif/else");
        createInput("enter answer here", "q3");
        q3.addEventListener('submit', function(e) {
            e.preventDefault();
            q3.style.display = "none";
            if (document.getElementById("q3input").value == "c")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                questionFour();
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                questionFour();
            }
        });
    }
    function questionFour()
    {
        print("<br><i>4. How do you declare a variable in Java?</i><br>a) name = value;<br>b) type name = value<br>c) name type = value<br>d) value = type name");
        createInput("enter answer here", "q4");
        q4.addEventListener('submit', function(e) {
            e.preventDefault();
            q4.style.display = "none";
            if (document.getElementById("q4input").value == "b")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                questionFive();
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                questionFive();
            }
        });
    }
    function questionFive()
    {
        print("<br><i>5. After importing the correct utility, what command lets you take user input in Java?</i><br>a) Create a variable, and set the value to input.nextInt,Double, or Line.<br>b) variable = System.in();<br>c) std::cin <<;<br>d) userIn()");
        createInput("enter answer here", "q5");
        q5.addEventListener('submit', function(e) {
            e.preventDefault();
            q5.style.display = "none";
            if (document.getElementById("q5input").value == "a")
            {
                print("<span style='color:lime'>correct!</span>");
                counter++;
                print("<i><br>Quiz complete!!!</i><br>You answered " + counter + " out of 5 questions correctly.");
            }
            else
            {
                print("<span style='color:red'>incorrect, or invalid.</span>");
                print("<i><br>Quiz complete!!!</i><br>You answered " + counter + " out of 5 questions correctly.");
            }
        });
    }
}
function bandCYOA()
{
    resetTerm();
    let fChoice;
    let sChoice;
        
        // Intro
        print("<br>So, you want to be in band.<br>Coolio, time to pick your first instrument.");
        
        // First Choice: Brass or Woodwind
        print("Do you want a [b]rass or [w]oodwind instrument?");
        createInput("'b' or 'w'", "BorW");
        BorW.addEventListener('submit', function(e) {
            e.preventDefault();
            BorW.style.display = "none";
            if (document.getElementById("BorWinput").value == "b")
            {
                print("<br>Ooh, nice! You'll be a nice and loud player right from the start.<br>Would you like to play a [tru]mpet or a [tro]mbone to start off?");
                createInput("'tru' or 'tro'", 'brass');
                brass.addEventListener('submit', function(e) {
                    e.preventDefault();
                    brass.style.display = "none";
                    if (document.getElementById("brassinput").value == "tru")
                    {
                        print("<br>Oh dear. Just, please don't deafen somebody either intentionally<br>or unintentionally, thanks!");
                    }
                    else if (document.getElementById("brassinput").value == "tro")
                    {
                        print("<br>OOh, the sliding trumpet! You're gonna look very cool, no matter<br>your skill level.");
                    }
                    else
                    {
                        print("<span style='color:red'>not a valid input, please restart</span>");
                    }
                });
                
            }
            else if (document.getElementById("BorWinput").value == "w")
            {
                print("<br>Good choice. You'll be quieter, but eventually you'll be better<br>and more technical than the brass crowd because of your buttons.<br>Would you like to play a [c]larinet or a [f]lute to start off?");
                createInput("'c' or 'f'", 'ww');
                ww.addEventListener('submit', function(e) {
                    e.preventDefault();
                    ww.style.display = "none";
                    if (document.getElementById("wwinput").value == "c")
                    {
                        print("<br>Good, good. It'll only be a matter of time until you harass<br>the whole band with Jungle Dance.")
                    }
                    else if (document.getElementById("wwinput").value == "f")
                    {
                        print("<br>Ah, a flute. A quiet instrument. I'm sure you'll do very well with<br>it, even though we're always gonna tell you to be louder.")
                    }
                    else
                    {
                        print("<span style='color:red'>not a valid input, please restart</span>");
                    }
                });
            }
            else
            {
                print("<span style='color:red'>not a valid input, please restart</span>");
            }
        });
}
function flippydo()
{
    // reset site terminal
    resetTerm();
    print('');
    // initialize the let to store the end result
    let result = 0;
    
    // a list of the int values 
    const binVals = [1, 2, 4, 8, 16, 32, 64, 128];
    
    // asking user for their binary num
    let binary = String(input("enter a binary number that's 1-8 digits long"));
    
    // reversing the string
    binary = binary.split('').reverse().join('');
    
    // if input is valid, convert
    if(binary.length <= 8 && binary.length >= 1)
    {
        // traversing the binary string
        for(let i = 0; i < binary.length; i++)
        {
            // the char to check
            let substr = binary.substring(i, i + 1);
            
            // if substr is 1, add the appropriate value to result
            if(substr === "1")
            {
                result += binVals[i];
            }
            
            // if substr is 0, carry on
            else if(substr === "0")
            {
                continue;
            }
            
            // if character is invalid, tell the user they suck
            else
            {
                print("<br><span style='color:red'>The only valid characters are '0' and '1', please try again.</span>");
                return;
            }
            
        }
        // print the final result if an error didn't stop the function
        print("<br><span style='color:lime'>binary to int conversion --&gt;</span> " + result);
    }
    
    // if input isn't a valid length, tell the user to be better
    else
    {
        print("<br><span style='color:red'>Your input can only be 1-8 digits long.</span>");
    }
}