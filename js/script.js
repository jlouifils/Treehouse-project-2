/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

//varible with all 54 student inside
const studentsNames = document.getElementsByClassName('student-item cf');
//variables that recognizes the page/page header
const page = document.querySelector('.page');
const header = document.querySelector('.page-header');
//varible that could only up to ten students
const pages = Math.ceil(studentName.length/10);
//creating new variables for pagination
const newDiv = document.createElement('div');
const a = document.createElement('a');


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

//function that a parameter for page and students
const showTenStudents = (page, students) => {
//this is a for loop that hold 10 students per page
  for(let i = 0; i < students.length; i += 1) {
//an if else statement stating that, if the if statement is true show, else block or hide
    if (i >= ((page * 10) -10) && i < ((page * 10))) {
      students[i].style.display = 'block';
    } else {
      students[i].style.display = 'none';
    }
  }
}
//function showing the first page of student names
showTenStudents(1, studentsNames);



// Create and append the pagination links - Creating a function that can do this is a good approach

const pagination = () => {
  //create class call newDiv in order to add page number
  newDiv.className = ('pagination');
  //appends the ul and new div on page
  const ul = document.createElement('ul');
  page.appendChild(newDiv);
  newDiv.appendChild('ul');
  //loop that adds the correct amount of anchor tags based on the number of pages
  for (let i = 1; i <= pages; i++) {
       const li = document.createElement('li');
       const a = document.createElement('a');
       ul.appendChild(li);
       li.appendChild(a);
       //sets the anchor tag's text content equal to the page number
       a.textContent = i;
               a.href = "#";
   }
}
//run function to make pagination link
pagination();

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here

newDiv.addEventListener('click', (e) => {
  // creates a variable that brings up all anchor tags and its page number
  let pageNumber = document.getElementByTagName('a');
   //makes the anchor tags active when clicked by using an event listener
  if (e.target.tagName = 'a') {
            e.target.className = 'active';
            pageNumber = e.target.textContent;
            //shows the correct 10 pages per page using showTenStudents function
            showTenStudents(pageNumber, studentNames);
        }
        //removes the active class when clicking another page
        const active = document.querySelector('.active')
        for (let i = 0; i < pageNumber.length; i += 1) {
            active.classList.remove('active');
        }

});
