/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
const listItemCollection = document.getElementsByClassName('student-item')
showPage = (list, page) => {
   [...list].forEach( item => item.style.display = 'none');
   
   [...list].forEach( (item,index) => {
      if ( index < (page * 10) && index >= (page * 10) - 10){
         item.style.display = '';
      }
   });
}
/*
* Create & append parent divs to the main page
*/
appendPageLinks = () => {
   //grab student collection
   const studentCollection = document.getElementsByTagName('H3');

   // grab main div & create div to hold link buttons & append
   const mainDiv = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
   mainDiv.appendChild(div);
   
   const ul = document.createElement('ul');
   div.appendChild(ul);
   
   // create links & append to parents 
   [...studentCollection].forEach(function(student,index){ // student is only present to satisfy forEach element requirement
      if(index % 10 === 0){
         const li = document.createElement("li");
         ul.appendChild(li);
         const link = document.createElement("a");
         link.setAttribute("href", "#"); // <--- adapted from https://www.peterbe.com/plog/createelement-a
         link.textContent = index / 10 + 1; // add 1 to offeset counting from 0
         li.appendChild(link);
      }
   })
   
   ul.firstElementChild.firstElementChild.className = 'active'
}
/*
* Adds event listener to each page link
*/
selectPage = () => {
   const buttons = document.getElementsByTagName("A");
   [...buttons].forEach(function(button){
      button.addEventListener("click", function () {
         showPage(listItemCollection, button.textContent);
         [...buttons].forEach(button => button.className = '');
         button.className = 'active';
      });
   });
}
/*
* creates the page, add links, adds functionality
*/
creatPage = (arr, num) => {
   showPage(arr, num);
   appendPageLinks();
   selectPage();
}

creatPage(listItemCollection, 1);