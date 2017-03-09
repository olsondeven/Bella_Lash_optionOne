# Option_One

This is the answer to the coding challenge issued by Bella Lash. I was asked to select one out of four options. Option one is what I decided you go with. The reason I felt compelled to
choose option one is because of the problem. In my previous coding experience I have not needed to uploaded or read through files on the clients side(local files).

###Option 1-

Using any language, write some code that will read 100 local text files and return the file that contains the text "Find me" on it.

### Web Technologies

HTML5, CSS, SCSS(SASS), JavaScript, AngularJS, Gulp, Babel, Node Package Manager, and Google Fonts. If downloading this to your own device you will need to NPM install all the dependencies. After completing
install of all dependencies you will need to run gulp. (for shipping reasons I have allowed gulp to uglify my code, if you want this taken off please go into the gulpfile.babel.js file and comment this out.)

##Landing Page

The title that I have given this project is File Finder. First you will want to create some test txt files. Included is a folder that contains 9 txt files and three of these files
have the text "Find me". Second you will want to click the choose file button/input box. The application is programmed to take a folder/directory of files(1-100 files). Once uploaded you can either select your own
phrase by writing it into the provided input box or you can just press "Find Phrase" button. If pressed without entering a specific phrase the default phrase is "Find me". Now the magic starts, the application
will read through all the files and find any matches. These matches will be displayed in the middle of the screen. The text and file name will be shown for each individual file that contains a match.
I have also allowed the select phrase to be highlighted in green. If the user is finished with that query there is a clear button in the middle right of the page or near the find phrase button. If you are
wondering how many files were matched? There is a count of those files in the middle right of the page.

##Fun Points

###Reading through files
I was able to learn how to upload files to my application. Then after uploading the necessary files I was given the chance to learn how to read through these files. Vanilla JavaScript seemed to be the best
option for me. I researched ways to upload data using AngularJS and JQuery. These seemed like ok options but I felt that JavaScript's built in uploader was efficient enough. The solution to this problem in my
application was an event listener on an input element(type=file). The listener looks for any changes and when changes happen it uploads the selected folder containing the target files. Then the event listener
creates a new FileReader. FileReader is necessary for its ability to read through files. This is how I scrapped each individual file's content and stored it as a property/key on an object. FileReader has two
two methods that help with this. They are readAsBinaryString() and readAsText(). The method I used was readAsText() because readAsBinaryString() has not been standardized. This is according to
MDN(Mozilla Developer Network).

###Finding a needle in the haystack
Approaching this challenge was fun. My first thought was to use Regular Expressions to find the files that contained the target phrase. I used the string prototype search and placed it in a (if) statement.
If the search returned anything that isn't -1 then I was able to assume that the file had the phrase I was sorting for. I used the array prototype push to place the file info onto the back of a declare array.
To display the info I utilized ng-repeat. I repeated through an array of objects that contained files that matched.

###Highlighting the phrase in displayed content
I was determined to do this. I'm sure there are a lot of solutions to this problem. Mine was manipulating the content of the file by wrapping the selected phrase in a tag(span). Then I utilized CSS and SASS
to change the background color of the selected phrase giving it the illusion of being highlighted. The biggest bug I ran into during this project was figuring out how to force my application to trust the HTML
that was printing to the DOM. I used AngularJS $sce.trustAsHTML to fix this problem. Injecting $sce into my controller allowed me access to trust the info manipulating the DOM.

## Author

* **Deven Olson**
