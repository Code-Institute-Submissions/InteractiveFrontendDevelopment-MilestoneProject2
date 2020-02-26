// Javascript to run on page load.

highlightTodaysDate();

addClickHandlerToCalDates()


// Functions
function addClickHandlerToCalDates() {
  // let dates = document.getElementsByClassName("date");

  //   The best way is to have as few event listeners as possible in your code. So instead of attaching an event listener to each and every button, you can attach 1 single event listener to the area div and make suitable changes based on event.target attribute.

  // Run the below working code snippet:

  document.getElementById('calendar-year').addEventListener('click', function (event) {
    // func(event.target);
    viewNotepage(event.target);
  });
}

function viewNotepage(x) {

  // get id of the clicked date
  let clickeddateid = x.id;

  console.log(clickeddateid);


  // create a HTML collection of note pages.
  notepagelist = document.getElementsByClassName('notepage');


  // check if clicked item is of class = 'date'
  if (x.classList.contains("date")) {


    console.log("this is a date.");

    // make the corresponding note page visible & don't display other note pages 
    for (var i = 0; i < notepagelist.length; i++) {

      var notepage = notepagelist[i];

      // remove the preceding 'note' substring in the id of the notepage.
      var notepageid = notepage.id.replace('note', '')



      // match the clicked date with corresponding notepage
      if (notepageid == clickeddateid) {

        // make the corresponding notepage visible
        notepage.classList.add("visible")



        console.log(notepageid);

      }
      else {
        // do not display other notepages
        notepage.classList.remove("visible")


      }

    }


  }

}


// https://auth0.com/blog/web-components-how-to-craft-your-own-custom-components/
// window.customElements.define('file-bag', class extends HTMLElement {
//   constructor() {
//     super();
//     var shadowRoot = this.attachShadow({ mode: 'open' });
//     shadowRoot.innerHTML = `<strong>Shadow dom super powers for the win!</strong>`;
//   }
// });



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

  // Open the rich text editor in the 'main' area. 


  // make the notepage hidden.
  notes = document.getElementsByClassName('notepage');


  for (var i = 0; i < notes.length; i++) {

    var item = notes[i];

    item.classList.remove("visible")

  }

  // launch the editor
  $('#summernote').summernote({
    placeholder: 'Add new note',
    tabsize: 2,
    height: 500
  })




  // append the Save button
  $('#note-editor').append('<button type="button" class="btn btn-primary" id="savenotebtn" onclick="saveNote()">Save</button>');

}


function saveNote() {

  var markupStr = $('#summernote').summernote('code');

  console.log(markupStr)

  // make the editor invisible
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // remove the 'Save' button.
  $('#savenotebtn').remove();


  // append the notepage again.



}
