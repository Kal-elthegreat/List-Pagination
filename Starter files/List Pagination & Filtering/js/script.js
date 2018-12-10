/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const mainDiv = document.querySelector('.page');
const listItems = document.getElementsByClassName('student-item')
const studentCollection = document.getElementsByTagName('H3');
const buttons = document.getElementsByTagName('A');

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/


showPage = (list, page) => {
   // hide all items
   for( let i = 0; i < listItems.length; i++){
      listItems[i].style.display = 'none';
   }
   //show items based on page #
      for (let i = 0; i < list.length; i++){
         if ([i] >= (page * 10) - 10 && [i] < page * 10){
         list[i].style.display = ''
      }    
   }
}
showPage(listItems, 1);

appendPageLinks = () => { 
   // create parents
   const div = document.createElement('div');
   div.className = 'pagination'; // assign class to display buttons
   mainDiv.appendChild(div);

   const ul = document.createElement('ul');
   div.appendChild(ul);

   // create new elements & append to parents 
   for (let i = 0; i < studentCollection.length; i += 10){ // increment by 10 bc 10 ppl are shown on each page
      const li = document.createElement('li');
      ul.appendChild(li);
      const link = document.createElement('a');
      link.setAttribute('href', '#');
      link.textContent = (i / 10) + 1; // button numbers
      li.appendChild(link); 
   }
   ul.firstElementChild.firstElementChild.className = 'active';

  // button functionality
  for ( let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener( 'click', function(){
      showPage(listItems,buttons[i].textContent)
   })
}
  
}
appendPageLinks();

/********* IGNORE CODE BELOW THIS LINE.  *************/
// display range of 10
//  range = (start, stop) => {
//    for( let i = start; i < stop; i ++) { 
//    listItems[i].style.display = '';
//    }
// }