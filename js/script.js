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
showPage(listItemCollection, 1);

/*
* Create & append parent divs to the main page
*/
const studentCollection = document.getElementsByTagName('H3');
appendPageLinks = () => {
   // grab main div and create div to hold link buttons 7 append
   const mainDiv = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
   mainDiv.appendChild(div);
   
   const ul = document.createElement('ul');
   div.appendChild(ul);
   
   // create links & append to parents 
   for (let i = 0; i < studentCollection.length; i += 10){ // increment by 10 bc 10 ppl are shown on each page
      const li = document.createElement('li');
      ul.appendChild(li);
      const link = document.createElement('a');
      link.setAttribute('href', '#'); // <--- adapted from https://www.peterbe.com/plog/createelement-a
      link.textContent = (i / 10) + 1; // button numbers
      li.appendChild(link); 
   }
   ul.firstElementChild.firstElementChild.className = 'active';
   selectPage();
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

appendPageLinks();