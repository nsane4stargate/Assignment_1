var colors = ['red', 'blue', 'gold'];
var chicagoStartups = [
    '  Interior   Define  ',
    'Classkick',
    'teaBOT  .$',
    'Pritzker Group Venture Capital',
    'Teln!yx !!',
    'ShipBob ~~$$$',
    'Hologram',
    'Tovala    ',
    '    MANOR',
    'ShuttleCloud 999987',
    'gtrot @@@@@',
    'DealsGoRound ****',
    ' Groovebug',
    'Stage$$$Bloc',
    'Shiftgig',
    'ParkWhiz'
];

function clearDocument() {
    var rootDiv = document.getElementById('rootContainer');
    if (rootDiv) {
        while (rootDiv.hasChildNodes()) {
            rootDiv.removeChild(rootDiv.lastChild);
        }
    }
}

function initDocument() {
    clearDocument();
    var rootDiv = document.createElement('div');
    rootDiv.id = 'rootContainer';
    var companyNamesContainer = document.createElement('div');
    companyNamesContainer.id = 'startupsContainer'
    chicagoStartups.forEach( function(chicagoStartup, index) {
        var childDiv = document.createElement('div');
        var text = document.createTextNode(index.toString().concat(' .) ').concat(chicagoStartup));
        childDiv.appendChild(text);
        companyNamesContainer.appendChild(childDiv);
    });
    rootDiv.appendChild(companyNamesContainer);
    document.body.appendChild(rootDiv);
}

function renderReversedElements() {
    var reverseContainer = document.getElementById('reverseContainer');
    var reversedChicagoStartups = [];
    if (reverseContainer) {
        if (reverseContainer.hasChildNodes()) {
            while (reverseContainer.hasChildNodes()) {
                reversedChicagoStartups.push(reverseContainer.lastChild.innerHTML);
                reverseContainer.removeChild(reverseContainer.lastChild);
            }
            reversedChicagoStartups.forEach(function(chicagoStartup, index) {
                console.log(chicagoStartup);
                var childDiv = document.createElement('div');
                var text = document.createTextNode(chicagoStartup);
                childDiv.appendChild(text);
                reverseContainer.appendChild(childDiv);
            });
        }
        else {
            /* REPLACED [chicagoStartups.reverse()] WITH A FUNCTION CALLED "chicagoStartupsReverse" */
            chicagoStartupsReverse().forEach( function(startup) {
                var childDiv = document.createElement('div');
                var text = document.createTextNode(startup);
                childDiv.appendChild(text);
                reverseContainer.appendChild(childDiv);
            });
        }
    }
}

function chicagoStartupsReverse() {
    var reversedStartups = chicagoStartups;
    /*
        REVERSE THE CONTENTS OF THE ARRAY WITHOUT USING THE BUILT IN REVERSE METHOD
              RETURN THE REVERSED ARRAY
    */
    var i = 0, temp, reversedIndex = reversedStartups.length-1;
    for(; i < reversedStartups.length/2; i++){
        temp = reversedStartups[reversedIndex];
        reversedStartups[reversedIndex] = reversedStartups[i];
        reversedStartups[i] = temp;
        reversedIndex--;
    }
    return reversedStartups;
}

function cleanAndCountCharacters() {
   console.log('CLEAN AND COUNT CHARACTERS');
    /*
        REMOVES ANY SPECIAL CHARACTERS FROM EACH COMPANY NAME AND
        DISPLAYS THE NUMBER OF REMAINING CHARACTERS NEXT TO THE FULL WORD.
        DONT FORGET TO REMOVE LEADING AND TRAILING WHITESPACES AS WELL
    */
    var container = document.getElementById('startupsContainer');
    var count, pattern = new RegExp(/[^A-Z a-z]/g);
    if(container.hasChildNodes){    
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
    }
    
    chicagoStartups.forEach(function(chicagoStartup,index,object){
        count = (object[index].match(pattern) || []).length;
        count += (object[index].match(/(^\s)/g) || []).length;
        object[index] = object[index].replace(/[^A-Z a-z]/g, "");
        count += (object[index].match(/\s+$/g) || []).length;
       
        object[index] =  object[index].trimRight().trimLeft();
        var childDiv = document.createElement('div');
        var text = document.createTextNode(index.toString().concat(' .) ').concat(object[index]).concat(": ").concat(count).concat(" occurrences!"));
        childDiv.appendChild(text);
        container.appendChild(childDiv);
    });
}

function initReverse() {
    var reverseContainer = document.createElement('div');
    reverseContainer.id = 'reverseContainer';
    var reverseBtn = document.createElement('button');
    var btnText = document.createTextNode('Reverse');
    reverseBtn.onclick = renderReversedElements;
    reverseBtn.appendChild(btnText);
    var reverseButtonContainer = document.createElement('div');
    reverseButtonContainer.appendChild(reverseBtn);    
    document.getElementById('rootContainer').appendChild(reverseButtonContainer);
    document.getElementById('rootContainer').appendChild(reverseContainer);
}

function toggleDisplay() {
    /*
    TODO: REVIEW THE CODE IN THE PROVIDED REVERSE EXAMPLE, USE JAVASCRIPT TO ADD A CLICKABLE BUTTON 
    CALLED "Toggle Display" ... WHEN THE USER CLICKS THE BUTTON, IT RENDERS THE DISPLAY OF THE COMPANY NAMES 
    FROM VERTICAL, TO HORIZONTAL.
    IF THE USER CLICKS THE TOGGLE BUTTON AGAIN THE NAMES SHOULD ONCE AGAIN BE DISPLAYED VERTICALLY.

    TIPS: 
        1.  MAKE SURE TO READ AND UNDERSTAND THE DIFFERENCE BETWEEN BLOCK ELEMENTS SUCH AS A DIV, 
            AND INLINE ELEMENTS SUCH AS A SPAN.

        2.  DIVIDE AND CONQUER.

        3.  
    */
}

function run() {
    initDocument();
    initReverse();
}
run();

var flags = {
    displayInstructions: true
};

//TODO INVOKE THIS ANONYMOUS FUNCTION TO DISPLAY HOMEWORK INSTRUCTIONS IN THE CONSOLE
(function() {
    if (flags.displayInstructions) {
        console.log(`
                        
                        MY GITHUB SOLUTION: https://github.com/nsane4stargate/Assignment_1

                        Feel free to complete the exercises in whatever order you like.  

                        Make sure to push your code to your own github repo as well as SUBMIT A ZIPFILE TO D2L.
                        HOMEWORK IS DUE WEDNESDAYS AT MIDNIGHT NO EXCEPTIONS.
                        dont forget to slack me the url to your github account as well.  

                        You can earn extra credit by using the provided css classes in the style tag or additionally 
                        you can pull in an external css library like bootstrap.  if you bring in bootstrap make sure to style
                        the buttons using bootstraps built in button styling classes.

                        Additionally, can earn extra credit by using an object to count the number of occurrences 
                        of each character accross all startup names and style and display the results as part of the
                        "cleanAndCountCharacters" function.

                        If you are having trouble getting started, I would spend a lot of time reviewing the source code provided in the reverse example.
                        Make sure I understand whats going on and do a google search on anything that is confusing.  
                        THE BETTER YOU UNDERSTAND THE EXAMPLE THE EASIER THIS SHOULD BE. THEN REVIEW THE TODOS AND START BY TRYING TO SOLVE THE EASIEST
                        PROBLEM.

                        FROM MY OWN EXPERIENCE, I FIND THAT WHEN IM STRUGGLING WITH A PROBLEM, IT USUALLY MEANS
                        I DONT FULLY UNDERSTAND THE TOOLS THAT I AM USING.

                        GOOD LUCK, SEE YOU ON THE FLIPPITY FLOP "\_(**/)_/"

                    `);
    }
    
}());
