// Javascript to run on page load.

highlightTodaysDate();

addClickHandlerToCalDates();

setInterval(updateDate(), 10000);

retrieveNotepages()

addClickHandlerToNotes()

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


    // if viewport is smaller than 991, hide the calendar view:
    // code obtained from StackOverflow https://stackoverflow.com/questions/31162606/how-to-detect-screen-size-for-responsive-web-design
    if (window.matchMedia('screen and (max-width: 991px)').matches) {

      $('#sticky-sidebar').css({ display: "none" });


      $('#main').css({ display: "block" });

    }



    // Update the notepage header date :
    // today = mydates.clickeddateid; 
    document.getElementById("headerdate").innerHTML = formatteddates[clickeddateid];



    // Update the header Add Note button to represent the clicked date.
    let newButtonID = "addnote" + clickeddateid;
    $(".addnotebutton").prop("id", newButtonID);


    // Remove the previous notepage from visibility.
    // $(".notepage").remove();
    $(".notepage").addClass("hidden");


    let thisNotepage = "#notepage" + clickeddateid;
    // $("")
    // console.log("xx" + thisNotepage);
    $(thisNotepage).removeClass("hidden");

    // Make sure the page opens scrolled to the top of page.
    window.scrollTo(0, 0);




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


// Update the date if day changes:
function updateDate() {

  // check what date is currently highlighted:
  var currenthighlighted = $(".cal-today").id;

  // check what the current time actually is
  var todaysday = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000) + 1

  // compare the two vars and run
  if (currenthighlighted != todaysday) {
    highlightTodaysDate();
    console.log("date updated")

  }

}

// Highlight the current date in the calendar view.
function highlightTodaysDate() {


  var todaysday = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000) + 1


  let dates = document.getElementsByClassName("date")

  // let taskcomplete = false;



  for (var i = 0; i < dates.length; i++) {

    var item = dates[i];

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

      // Scroll the calendar view to the current date when webpage opens.
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // if viewport is larger than 991px: open the current date's notepage:
      if (window.matchMedia('screen and (min-width: 991px)').matches) {

        viewNotepage(item);

      }

    }
    else {
      item.classList.remove("cal-today")

    }




  }
}



function addNote(x) {


  // Add a note to the currently open 'notepage'.


  // console.log(x);


  // hide the 'back to calendar button' if in mobile view:
  $("#backtocal").css({ "display": "none" });




  // make the current notepage hidden.
  notes = document.getElementsByClassName('notepage');

  // make all notepages hidden.
  for (var i = 0; i < notes.length; i++) {

    var item = notes[i];

    item.classList.add("hidden");
  }


  // launch the editor at correct height and with appropriate toolbar for responsive display:
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $('#summernote').summernote({
      placeholder: 'Add new note',
      tabsize: 2,
      // height: 500
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['view', ['fullscreen']],
      ]
    })

  }
  else {

    $('#summernote').summernote({
      placeholder: 'Add new note',
      tabsize: 2,
      height: 500
    })
  }





  // Create a corresponding id for the Save button.
  let currentID = x.id;

  let currentsavebutton = '<div class="editorbuttongroup"><button type="button" class="btn btn-primary savenotebutton" id="' + 'save' + currentID + '" onclick="saveNote(this)">Save</button><button type="button" class="btn btn-warning cancelnotebutton" id="' + 'cancel' + currentID + '" onclick="cancelNote(this)">Cancel</button></div>'

  // append the Save button and the Cancel button
  $('#note-editor').append(currentsavebutton);


  // hide the 'Add note' button.
  $(".addnotebutton").addClass("hidden");



}


function cancelNote(x) {

  // select the correct notepage
  var notepageidentifier = x.id.replace('canceladdnote', '#notepage');

  // make the editor invisible
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // remove the 'Save' and 'cancel' buttons.
  $('.editorbuttongroup').remove();


  // make the current notepage visible
  var thecurrentnotepage = $(notepageidentifier);
  thecurrentnotepage.removeClass("hidden");

  // console.log(thecurrentnotepage)


  // Unhide the 'Add note' button.
  $(".addnotebutton").removeClass("hidden");


  // Unhide the 'back to calendar button' if in mobile view:
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $("#backtocal").css({ "display": "block" })

  }


}


function saveNote(x) {

  var markupStr = $('#summernote').summernote('code');


  // Format the user generated note text in to a 'note' div.
  var savedNote = '<div class="note">' + markupStr + '</div>'

  console.log(savedNote)



  // Add the new note to the relevant notepage.

  // select the correct notepage 
  var notepageidentifier = x.id.replace('saveaddnote', '#notepage');

  // console.log("notepageidentifier: " + notepageidentifier);

  // append new note to the relevant notepage div:
  $(notepageidentifier).append(savedNote);



  // make the editor invisible
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // remove the 'Save' and 'cancel' buttons.
  $('.editorbuttongroup').remove();



  // make the current notepage visible
  var thecurrentnotepage = $(notepageidentifier);
  thecurrentnotepage.removeClass("hidden");


  // Unhide the 'Add note' button.
  $(".addnotebutton").removeClass("hidden");

  // Unhide the 'back to calendar button' if in mobile view:
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $("#backtocal").css({ "display": "block" })

  }



  // save the updated notepage to localstorage.
  // Store
  var currentnotepagehtml = thecurrentnotepage.html();

  localStorage.setItem(notepageidentifier, currentnotepagehtml);

  // console.log(localStorage.getItem(notepageidentifier));



}


function addClickHandlerToNotes() {
  // let dates = document.getElementsByClassName("date");

  //   The best way is to have as few event listeners as possible in your code. So instead of attaching an event listener to each and every button, you can attach 1 single event listener to the area div and make suitable changes based on event.target attribute.

  // Run the below working code snippet:

  // $('.notepage').addEventListener('click', function (event) {
  //   // func(event.target);
  //   console.log("you clicked the notepage")
  // });

  var notes = document.getElementsByClassName("note");

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    note.addEventListener('click', function (note){
      openEditOrDeleteModal(note)
    });
    // console.log(note.innerHTML)
  }
}



function openEditOrDeleteModal(note) {
  // alert(note);
  mynote = note.id;
  console.log(mynote);
  
}


function retrieveNotepages() {

  // loop through each notepage, retrieving the relevent notepage from localStorage.

  let htmlnotepages = document.getElementsByClassName("notepage");
  // console.log(htmlnotepages)


  for (var i = 0; i < htmlnotepages.length; i++) {


    // retrieve relevent localstorage value:

    // reformat the id to match localstorage key:
    var myincrementor = i + 1;
    // console.log(myincrementor);
    var mykey = "#notepage" + myincrementor;
    // console.log()

    var releventnotepage = localStorage.getItem(mykey);
    // console.log(releventnotepage)



    htmlnotepages[i].innerHTML = releventnotepage;


  }
}


function backToCalendar() {

  $('#sticky-sidebar').css({ display: "block" });


  $('#main').css({ display: "none" });


}