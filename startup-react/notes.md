
# cs260 Web Programming Notes

** Important to Know **
ssh -i [key pair file] ubuntu@davinruns.click

git add (filename)
git commit -m "message"
git push
./startup-html/deployFiles.sh -k 260websitekey.pem  -h davinruns.click -s startup


** 9/12 **
git commit -m "your message" (use for committing to github from the command line)
git add . (add the files you want to commit your changes for)
git push origin main (push your changes to github)

** 9/14 **
EC2 Amazon Web Services
elastic IP address: 44.223.154.230

** 9/26 **
Clone simon github repository 
deploy simon to my remote environment ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon
simon.davinruns.click

<div> puts a line horizontally down the screen to divide up sections of the website
You can add a photo from your local machine by putting it in the same file as your HTML file and reference it from there
<! -- words --> is the way to add notes in HTML

10/4
add the bootstrap link to the head element in your HTML file like so:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>


10/14
Web Frameworks: introduction react
runs in web browser like HTML or JavaScript
connect to web server
simplify common patterns, improve performance, increase device coverage
in codepen set the compiler as babel



**MIDTERM REVIEW**
Midterm Questions
In the following code, what does the link element do?
In the following code,  what does a div tag do?
In the following code, what is the difference between the #title and .grid selector?
In the following code, what is the difference between padding and margin?
Given this HTML and this CSS how will the images be displayed using flex?
What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?
What does the following code using map with an array output?
What does the following code output using getElementByID and addEventListener?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: 
How would you use CSS to change all the div elements to have a background color of rsHow would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS.
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?
What will the following code using Promises output when executed?

