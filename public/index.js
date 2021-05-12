console.log("Hello Markdown!");
let source = document.getElementById("preview");
let preview = document.getElementById("preview");
console.log("The marked package is a " + typeof marked + "!");
console.log(marked("# Hello world!"));
/* 
  Now you should use the source and preview elements with
  the 'marked' function that has been sourced as a script.

  Check the index.html file to see how the 'marked' function
  was added, and read the documentation at https://marked.js.org/
  for additional information about how to pass markdown text to
  the function for conversion into HTML.
*/
