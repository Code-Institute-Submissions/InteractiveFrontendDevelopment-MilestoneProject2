// Javascript to run on page load.

highlightTodaysDate();






// Functions

function saveNote() {

  var markupStr = $('#summernote').summernote('code');

  console.log(markupStr)

}

// https://auth0.com/blog/web-components-how-to-craft-your-own-custom-components/
window.customElements.define('file-bag', class extends HTMLElement {
  constructor() {
    super();
    var shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `<strong>Shadow dom super powers for the win!</strong>`;
  }
});



function selectTodaysDate() {

  todaysday = Math.round((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000) + 1

}

function highlightTodaysDate() {

  // 1. Loop through all the nodes in 'lessons' , making sure they don't have the 'today' class.  Use ClassList.remove('today') to do this ... 

  // 2. find the lesson row(s) with the current do-date in the DOM.. getElementsByAttribute - do date ?

  // 3. Give this node element the class 'today' with ClassList.add('today').

  // 4. If the no lesson date matches the system date, then highlight the nearest previous date with 'today' class.


  todaysday = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000) + 1


  let dates = document.getElementsByClassName("date")

  // let taskcomplete = false;



  for (var i = 0; i < dates.length; i++) {

    var item = dates[i];

    // lessons[112].children[2].innerText

    // let lessondateNode = item.children[2].innerHTML
    // let lessondate = lessondateNode.toString()

    // Get the id of the current date in the for loop.
    let d1 = item.id;

    // Todays date from operating system.
    let d2 = todaysday;


    // Compare the dates.
    if (d1 == d2) {
      item.classList.add("cal-today")
      // console.log('this is todays lesson')
      console.log(d1)
      console.log(d2 + 'yes')
    }
    else {
      item.classList.remove("cal-today")
      // console.log(d1)
      // console.log(d2 + 'no')
    }


    // if (taskcomplete == false) {
    //   if (d1 > d2) {
    //     // j = i-2;
    //     // lessons[j].classList.add("today")
    //     console.log('fixed')

    //     item.previousElementSibling.classList.add('today');
    //     taskcomplete = true;
    //   }
    // }


  }
}


function newNote() {
  notes = document.getElementsByClassName('note');


  for (var i = 0; i < notes.length; i++) {

    var item = notes[i];

    
    item.classList.add("cal-today")

  }



}