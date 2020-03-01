// Javascript to run on page load.


highlightTodaysDate();

addClickHandlerToCalDates();

retrieveNotepages();

addClickHandlerToNotes();

setInterval(updateDate(), 10000);




// Functions.





// Add a click handler to each date element in the calendar.
function addClickHandlerToCalDates() {

  document.getElementById('calendar-year').addEventListener('click', function (event) {
    // func(event.target);
    viewNotepage(event.target);
  });

}




// Open the relevant notepage corresponding to date that user clicks.
function viewNotepage(x) {


  // Get id of the clicked date.
  let clickeddateid = x.id;


  // Close any open rich text editor instances.
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // Remove the 'Save' and 'cancel' buttons.
  $('#editorbuttongroup').remove();
  $('#addnotebuttongroup').remove();


  // Create a HTML collection of note pages.
  notepagelist = document.getElementsByClassName('notepage');


  // Check if clicked item is of class = 'date'.
  if (x.classList.contains("date")) {


    // Show the noteview and hide the calendar view if on mobile or tablet device.
    if (window.matchMedia('screen and (max-width: 991px)').matches) {
      $('#sticky-sidebar').css({ display: "none" });
      $('#main').css({ display: "block" });
    };


    // Update the notepage header date.
    document.getElementById("headerdate").innerHTML = formatteddates[clickeddateid];


    // Update the header Add Note button to represent the clicked date.
    let newButtonID = "addnote" + clickeddateid;
    $(".addnotebutton").prop("id", newButtonID);


    // Remove the previous notepage from visibility.
    $(".notepage").addClass("hidden");


    // Show the current relevant notepage.
    let thisNotepage = "#notepage" + clickeddateid;
    $(thisNotepage).removeClass("hidden");


    // Make sure the page opens scrolled to the top of page.
    window.scrollTo(0, 0);

  }

}




// Update the date if day changes.
function updateDate() {


  // Check what date is currently highlighted.
  var currenthighlighted = $(".cal-today").id;


  // Check what the current time actually is.
  var todaysday = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000) + 1


  // Compare the two vars and run.
  if (currenthighlighted != todaysday) {
    highlightTodaysDate();
    console.log("date updated")

  }

}




// Highlight the current date in the calendar view.
function highlightTodaysDate() {


  // Check current date.
  var todaysday = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000) + 1


  // Get a NodeList of date elements in the calendar view.
  let dates = document.getElementsByClassName("date")


  // Loop through the date elements.
  for (var i = 0; i < dates.length; i++) {
    var item = dates[i];


    // Get the id of the current date in the for loop.
    let d1 = item.id;


    // Todays date from operating system.
    let d2 = todaysday;


    // Compare the dates.
    if (d1 == d2) {

      // Assign the date element the class 'cal-today'.
      item.classList.add("cal-today")


      // Scroll the calendar view to the current date when webpage opens.
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });


      // If viewport is larger than 991px: open the current date's notepage.
      if (window.matchMedia('screen and (min-width: 991px)').matches) {
        viewNotepage(item);
      }
    }
    else {
      // Remove the date element the class 'cal-today'.
      item.classList.remove("cal-today")

    }
  }

}




// Add a note to the currently open 'notepage'.
function addNote(x) {


  // Hide the 'back to calendar button' if in mobile view.
  $("#backtocal").css({ "display": "none" });


  // Make the current notepage hidden.
  notes = document.getElementsByClassName('notepage');


  // Make all notepages hidden.
  for (var i = 0; i < notes.length; i++) {
    var item = notes[i];
    item.classList.add("hidden");

  }


  // Launch the editor at correct height and with appropriate toolbar for mobile & tablet display.
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $('#summernote').summernote({
      placeholder: 'Add new note',
      tabsize: 2,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['view', ['fullscreen']],
      ]
    });

    $('#summernote').summernote('focus');

  }
  // Launch the editor at correct height and with appropriate toolbar for laptop/desktop display.
  else {

    $('#summernote').summernote({
      placeholder: 'Add new note',
      tabsize: 2,
      height: 400
    })

    $('#summernote').summernote('focus');

  }


  // Create id's for the buttons corresponding to the notepage paramenter x.
  let currentID = x.id;
  let currentnotepageID = currentID.replace("addnote", "")


  // Create a button group element with the relevant 'id's.
  let currentsavebutton = '<div id="addnotebuttongroup"><button type="button" class="btn btn-secondary cancelnotebutton" id="' + 'cancel' + currentnotepageID + '" onclick="cancelNote(this)">Cancel</button><button type="button" class="btn btn-primary savenotebutton" id="' + 'save' + currentID + '" onclick="saveNote(this)">Save</button></div>'


  // Append the button group.
  $('#note-editor').append(currentsavebutton);


  // Remove the 'Add note' button from view.
  $(".addnotebutton").addClass("hidden");

}




// Cancel editing of note and return to note view.
function cancelNote(x) {


  // Select the correct notepage.
  var notepageidentifier = x.id.replace('cancel', '#notepage');


  // Make the editor invisible.
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // Remove the 'Save' and 'cancel' buttons.
  $('#editorbuttongroup').remove();
  $('#addnotebuttongroup').remove();


  // Make the current notepage visible.
  var thecurrentnotepage = $(notepageidentifier);
  thecurrentnotepage.removeClass("hidden");


  // Unhide the 'Add note' button.
  $(".addnotebutton").removeClass("hidden");


  // Unhide the 'back to calendar button' if in mobile view.
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $("#backtocal").css({ "display": "block" })

  }

}




// Save the rich text that user has entered to the relevant notepage and to localStorage.
function saveNote(x) {


  // Retrieve the rich text inputted by user.
  var markupStr = $('#summernote').summernote('code');


  // Create a locally persistant incrementing counter so each new note will have a unique id.
  // Check if there is a latestnodeid initialised in localstorage.
  if ("latestnoteid" in localStorage) {
    // Retrieve the latestnoteid from localstorage.
    var lastnoteid = localStorage.getItem("latestnoteid");
    // Convert the id to a number.
    var lastnoteidint = lastnoteid.replace("note", "");
    var number = parseInt(lastnoteidint);
    // Increment the value.
    var currentnoteid = number + 1;
    // Rename to string format.
    var currentnoteidstring = "note" + currentnoteid;
    // Update local storage.
    localStorage.setItem("latestnoteid", currentnoteidstring);


    // Format the user generated note text in to a 'note' div with a unique id.
    var savedNote = '<div class="note" id="' + currentnoteidstring + '">' + markupStr + '</div>';

  }
  else {
    // Initialise the lastnodeid counter in localStorage.
    var currentnoteidstring = "note1";
    // Set the lastnoteid in localstorage.
    localStorage.setItem("latestnoteid", currentnoteidstring);

    
    // Format the user generated note text in to a 'note' div.
    var savedNote = '<div class="note" id="' + currentnoteidstring + '">' + markupStr + '</div>'

  }


  // Add the new note to the relevant notepage.
  // Select the correct notepage .
  var notepageidentifier = x.id.replace('saveaddnote', '#notepage');


  // Append new note to the relevant notepage div.
  $(notepageidentifier).append(savedNote);


  // Add an event handler to the new note.
  addClickHandlerToNotes()


  // Remove the editor from the DOM.
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // Remove the 'Save' and 'Cancel' buttons.
  $('#addnotebuttongroup').remove();


  // Make the current notepage visible.
  var thecurrentnotepage = $(notepageidentifier);
  thecurrentnotepage.removeClass("hidden");


  // Unhide the 'Add note' button.
  $(".addnotebutton").removeClass("hidden");


  // Unhide the 'back to calendar button' if in mobile view.
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $("#backtocal").css({ "display": "block" })

  }


  // Save the updated notepage to localstorage.
  var currentnotepagehtml = thecurrentnotepage.html();
  localStorage.setItem(notepageidentifier, currentnotepagehtml);

}




// Allow each note to be clickable.
function addClickHandlerToNotes() {


  // Add an eventListener to each note. Use the 'once' parameter as a 'debouncer' to prevent multiple events.
  var notelist = document.querySelectorAll('.note');
  for (var i = 0; i < notelist.length; i++) {
    notelist[i].addEventListener('click', function (event) { editNote(this) }, false, { once: true });
  }


}




// Allow editing of notes when a 'note' element is clicked by user.
function editNote(note) {


  // Retrieve the text of the note.
  let notecontent = note.innerHTML;


  // Hide the 'back to calendar button' if in mobile view.
  $("#backtocal").css({ "display": "none" });


  // Make All the current notepages hidden.
  var notes = document.getElementsByClassName('notepage');


  // Make all notepages hidden.
  for (var i = 0; i < notes.length; i++) {

    var item = notes[i];
    item.classList.add("hidden");

  }


  // Launch the editor at correct height and with appropriate toolbar for mobile & tablet display.
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
      ],
    });

    // Load the original note text into the editor and focus cursor to the editor.
    $('#summernote').summernote('code', notecontent);
    $('#summernote').summernote('focus');

  }
  // Launch the editor at correct height and with appropriate toolbar for laptop/desktop display.
  else {

    $('#summernote').summernote({
      placeholder: 'Add new note',
      tabsize: 2,
      height: 400
    });

    // Load the original note text into the editor and focus cursor to the editor.
    $('#summernote').summernote('code', notecontent);
    $('#summernote').summernote('focus');

  }


  // Create a corresponding id for each of the buttons.
  let currentNoteID = note.id;
  let currentNotepageID = note.parentElement.id;
  let currentNotepageIDInt = currentNotepageID.replace("notepage", "");


  // Create a button group for the relevant note.
  let fulleditbuttons = '<div id="editorbuttongroup"><div class="deletebuttongroup"><button type="button" class="btn btn-danger deletenotebutton" id="' + 'delete' + currentNoteID + '" onclick="deleteNote(this)"><ion-icon name="trash-outline"></ion-icon> Delete</button></div><div id="savecancelbuttongroup"><button type="button" class="btn btn-secondary cancelnotebutton" id="' + 'cancel' + currentNotepageIDInt + '" onclick="cancelNote(this)">Cancel</button><button type="button" class="btn btn-primary savenotebutton" id="' + 'save-edit' + currentNoteID + '" onclick="saveEditedNote(this)">Save</button></div></div>';


  // Append the Save, Delete and the Cancel buttons.
  $('#note-editor').append(fulleditbuttons);


  // Hide the 'Add note' button.
  $(".addnotebutton").addClass("hidden");

}




// Save the edited note.
function saveEditedNote(x) {


  // Retrieve rich text user had entered in the editor.
  var markupStr = $('#summernote').summernote('code');


  // Replace the current contents of the relevent note with the new contents.
  let mysaveeditid = x.id;
  let mynoteid = mysaveeditid.replace("save-edit", "#");
  $(mynoteid).html(markupStr);


  // Make the editor invisible.
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // Remove the 'Save', 'Delete' and 'Cancel' buttons.
  $('#editorbuttongroup').remove();


  // Make the current notepage visible.
  var currentnoteJs = mynoteid.replace("#", "");
  var currentnotepage = document.getElementById(currentnoteJs).parentElement;
  var currentnotepageid = currentnotepage.id;
  var notepageidentifier = "#" + currentnotepageid;
  var thecurrentnotepage = $(notepageidentifier);
  thecurrentnotepage.removeClass("hidden");


  // Unhide the 'Add note' button.
  $(".addnotebutton").removeClass("hidden");


  // Unhide the 'back to calendar button' if in mobile view:
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $("#backtocal").css({ "display": "block" })

  }


  // Get the innerhtml of the notepage
  var currentnotepagehtml = thecurrentnotepage.html();


  // Save the updated notepage to localstorage. 
  localStorage.setItem(notepageidentifier, currentnotepagehtml);

}




// Delete a note.
function deleteNote(x) {


  // Find the current note's id.
  let deletednoteid = x.id;
  let mynoteid = deletednoteid.replace("delete", "#");


  // Find the current notepage's id.
  var currentnoteJs = mynoteid.replace("#", "");
  var currentnotepage = document.getElementById(currentnoteJs).parentElement;
  var currentnotepageid = currentnotepage.id;


  // Remove the relevent note from the notepage.
  $(mynoteid).remove();


  // Make the editor invisible.
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // Remove the 'Save', 'Delete' and 'Cancel' buttons.
  $('#editorbuttongroup').remove();


  // Make the current notepage visible.
  var notepageidentifier = "#" + currentnotepageid;
  var thecurrentnotepage = $(notepageidentifier);
  thecurrentnotepage.removeClass("hidden");


  // Unhide the 'Add note' button.
  $(".addnotebutton").removeClass("hidden");


  // Unhide the 'back to calendar button' if in mobile view:
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $("#backtocal").css({ "display": "block" })

  }


  // Get the innerhtml of the notepage.
  var currentnotepagehtml = thecurrentnotepage.html();


  // Store the updated notepage in localstorage. 
  localStorage.setItem(notepageidentifier, currentnotepagehtml);

}




// Retrieve all notepages from localStorage and load them into the DOM.
function retrieveNotepages() {


  // Create a NodeList of all notepages.
  let htmlnotepages = document.getElementsByClassName("notepage");


  // Loop through each notepage, retrieving the relevent notepage from localStorage.
  for (var i = 0; i < htmlnotepages.length; i++) {

    // Reformat/recalculate the incrementor i to match localstorage key:
    var myincrementor = i + 1;
    var mykey = "#notepage" + myincrementor;


    // Retrieve relevant notepage.
    var releventnotepage = localStorage.getItem(mykey);


    // Load the notepage into the NodeList & DOM.
    htmlnotepages[i].innerHTML = releventnotepage;

  }

}




// Move back to the calendar view from the notepage view when on mobile or tablet.
function backToCalendar() {


  // Show the sidebar (calendar) and hide the main view (notepage);
  $('#sticky-sidebar').css({ display: "block" });
  $('#main').css({ display: "none" });


  // Scroll the calendar view to the current date when webpage opens.
  var item = $(".cal-today")[0];
  item.scrollIntoView({ behavior: 'auto', block: 'center' });

}