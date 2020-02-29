// Javascript to run on page load.

highlightTodaysDate();

addClickHandlerToCalDates();

setInterval(updateDate(), 10000);

retrieveNotepages()


// retrieve the notepages from localstorage



// create an array of dates.
// using a placeholder item for index [0] of the array.
// {
var formatteddates = ["-", "1 Jan, 2020", "2 Jan, 2020", "3 Jan, 2020", "4 Jan, 2020", "5 Jan, 2020", "6 Jan, 2020", "7 Jan, 2020", "8 Jan, 2020", "9 Jan, 2020", "10 Jan, 2020", "11 Jan, 2020", "12 Jan, 2020", "13 Jan, 2020", "14 Jan, 2020", "15 Jan, 2020", "16 Jan, 2020", "17 Jan, 2020", "18 Jan, 2020", "19 Jan, 2020", "20 Jan, 2020", "21 Jan, 2020", "22 Jan, 2020", "23 Jan, 2020", "24 Jan, 2020", "25 Jan, 2020", "26 Jan, 2020", "27 Jan, 2020", "28 Jan, 2020", "29 Jan, 2020", "30 Jan, 2020", "31 Jan, 2020", "1 Feb, 2020", "2 Feb, 2020", "3 Feb, 2020", "4 Feb, 2020", "5 Feb, 2020", "6 Feb, 2020", "7 Feb, 2020", "8 Feb, 2020", "9 Feb, 2020", "10 Feb, 2020", "11 Feb, 2020", "12 Feb, 2020", "13 Feb, 2020", "14 Feb, 2020", "15 Feb, 2020", "16 Feb, 2020", "17 Feb, 2020", "18 Feb, 2020", "19 Feb, 2020", "20 Feb, 2020", "21 Feb, 2020", "22 Feb, 2020", "23 Feb, 2020", "24 Feb, 2020", "25 Feb, 2020", "26 Feb, 2020", "27 Feb, 2020", "28 Feb, 2020", "29 Feb, 2020", "1 Mar, 2020", "2 Mar, 2020", "3 Mar, 2020", "4 Mar, 2020", "5 Mar, 2020", "6 Mar, 2020", "7 Mar, 2020", "8 Mar, 2020", "9 Mar, 2020", "10 Mar, 2020", "11 Mar, 2020", "12 Mar, 2020", "13 Mar, 2020", "14 Mar, 2020", "15 Mar, 2020", "16 Mar, 2020", "17 Mar, 2020", "18 Mar, 2020", "19 Mar, 2020", "20 Mar, 2020", "21 Mar, 2020", "22 Mar, 2020", "23 Mar, 2020", "24 Mar, 2020", "25 Mar, 2020", "26 Mar, 2020", "27 Mar, 2020", "28 Mar, 2020", "29 Mar, 2020", "30 Mar, 2020", "31 Mar, 2020", "1 Apr, 2020", "2 Apr, 2020", "3 Apr, 2020", "4 Apr, 2020", "5 Apr, 2020", "6 Apr, 2020", "7 Apr, 2020", "8 Apr, 2020", "9 Apr, 2020", "10 Apr, 2020", "11 Apr, 2020", "12 Apr, 2020", "13 Apr, 2020", "14 Apr, 2020", "15 Apr, 2020", "16 Apr, 2020", "17 Apr, 2020", "18 Apr, 2020", "19 Apr, 2020", "20 Apr, 2020", "21 Apr, 2020", "22 Apr, 2020", "23 Apr, 2020", "24 Apr, 2020", "25 Apr, 2020", "26 Apr, 2020", "27 Apr, 2020", "28 Apr, 2020", "29 Apr, 2020", "30 Apr, 2020", "1 May, 2020", "2 May, 2020", "3 May, 2020", "4 May, 2020", "5 May, 2020", "6 May, 2020", "7 May, 2020", "8 May, 2020", "9 May, 2020", "10 May, 2020", "11 May, 2020", "12 May, 2020", "13 May, 2020", "14 May, 2020", "15 May, 2020", "16 May, 2020", "17 May, 2020", "18 May, 2020", "19 May, 2020", "20 May, 2020", "21 May, 2020", "22 May, 2020", "23 May, 2020", "24 May, 2020", "25 May, 2020", "26 May, 2020", "27 May, 2020", "28 May, 2020", "29 May, 2020", "30 May, 2020", "31 May, 2020", "1 Jun, 2020", "2 Jun, 2020", "3 Jun, 2020", "4 Jun, 2020", "5 Jun, 2020", "6 Jun, 2020", "7 Jun, 2020", "8 Jun, 2020", "9 Jun, 2020", "10 Jun, 2020", "11 Jun, 2020", "12 Jun, 2020", "13 Jun, 2020", "14 Jun, 2020", "15 Jun, 2020", "16 Jun, 2020", "17 Jun, 2020", "18 Jun, 2020", "19 Jun, 2020", "20 Jun, 2020", "21 Jun, 2020", "22 Jun, 2020", "23 Jun, 2020", "24 Jun, 2020", "25 Jun, 2020", "26 Jun, 2020", "27 Jun, 2020", "28 Jun, 2020", "29 Jun, 2020", "30 Jun, 2020", "1 Jul, 2020", "2 Jul, 2020", "3 Jul, 2020", "4 Jul, 2020", "5 Jul, 2020", "6 Jul, 2020", "7 Jul, 2020", "8 Jul, 2020", "9 Jul, 2020", "10 Jul, 2020", "11 Jul, 2020", "12 Jul, 2020", "13 Jul, 2020", "14 Jul, 2020", "15 Jul, 2020", "16 Jul, 2020", "17 Jul, 2020", "18 Jul, 2020", "19 Jul, 2020", "20 Jul, 2020", "21 Jul, 2020", "22 Jul, 2020", "23 Jul, 2020", "24 Jul, 2020", "25 Jul, 2020", "26 Jul, 2020", "27 Jul, 2020", "28 Jul, 2020", "29 Jul, 2020", "30 Jul, 2020", "31 Jul, 2020", "1 Aug, 2020", "2 Aug, 2020", "3 Aug, 2020", "4 Aug, 2020", "5 Aug, 2020", "6 Aug, 2020", "7 Aug, 2020", "8 Aug, 2020", "9 Aug, 2020", "10 Aug, 2020", "11 Aug, 2020", "12 Aug, 2020", "13 Aug, 2020", "14 Aug, 2020", "15 Aug, 2020", "16 Aug, 2020", "17 Aug, 2020", "18 Aug, 2020", "19 Aug, 2020", "20 Aug, 2020", "21 Aug, 2020", "22 Aug, 2020", "23 Aug, 2020", "24 Aug, 2020", "25 Aug, 2020", "26 Aug, 2020", "27 Aug, 2020", "28 Aug, 2020", "29 Aug, 2020", "30 Aug, 2020", "31 Aug, 2020", "1 Sep, 2020", "2 Sep, 2020", "3 Sep, 2020", "4 Sep, 2020", "5 Sep, 2020", "6 Sep, 2020", "7 Sep, 2020", "8 Sep, 2020", "9 Sep, 2020", "10 Sep, 2020", "11 Sep, 2020", "12 Sep, 2020", "13 Sep, 2020", "14 Sep, 2020", "15 Sep, 2020", "16 Sep, 2020", "17 Sep, 2020", "18 Sep, 2020", "19 Sep, 2020", "20 Sep, 2020", "21 Sep, 2020", "22 Sep, 2020", "23 Sep, 2020", "24 Sep, 2020", "25 Sep, 2020", "26 Sep, 2020", "27 Sep, 2020", "28 Sep, 2020", "29 Sep, 2020", "30 Sep, 2020", "1 Oct, 2020", "2 Oct, 2020", "3 Oct, 2020", "4 Oct, 2020", "5 Oct, 2020", "6 Oct, 2020", "7 Oct, 2020", "8 Oct, 2020", "9 Oct, 2020", "10 Oct, 2020", "11 Oct, 2020", "12 Oct, 2020", "13 Oct, 2020", "14 Oct, 2020", "15 Oct, 2020", "16 Oct, 2020", "17 Oct, 2020", "18 Oct, 2020", "19 Oct, 2020", "20 Oct, 2020", "21 Oct, 2020", "22 Oct, 2020", "23 Oct, 2020", "24 Oct, 2020", "25 Oct, 2020", "26 Oct, 2020", "27 Oct, 2020", "28 Oct, 2020", "29 Oct, 2020", "30 Oct, 2020", "31 Oct, 2020", "1 Nov, 2020", "2 Nov, 2020", "3 Nov, 2020", "4 Nov, 2020", "5 Nov, 2020", "6 Nov, 2020", "7 Nov, 2020", "8 Nov, 2020", "9 Nov, 2020", "10 Nov, 2020", "11 Nov, 2020", "12 Nov, 2020", "13 Nov, 2020", "14 Nov, 2020", "15 Nov, 2020", "16 Nov, 2020", "17 Nov, 2020", "18 Nov, 2020", "19 Nov, 2020", "20 Nov, 2020", "21 Nov, 2020", "22 Nov, 2020", "23 Nov, 2020", "24 Nov, 2020", "25 Nov, 2020", "26 Nov, 2020", "27 Nov, 2020", "28 Nov, 2020", "29 Nov, 2020", "30 Nov, 2020", "1 Dec, 2020", "2 Dec, 2020", "3 Dec, 2020", "4 Dec, 2020", "5 Dec, 2020", "6 Dec, 2020", "7 Dec, 2020", "8 Dec, 2020", "9 Dec, 2020", "10 Dec, 2020", "11 Dec, 2020", "12 Dec, 2020", "13 Dec, 2020", "14 Dec, 2020", "15 Dec, 2020", "16 Dec, 2020", "17 Dec, 2020", "18 Dec, 2020", "19 Dec, 2020", "20 Dec, 2020", "21 Dec, 2020", "22 Dec, 2020", "23 Dec, 2020", "24 Dec, 2020", "25 Dec, 2020", "26 Dec, 2020", "27 Dec, 2020", "28 Dec, 2020", "29 Dec, 2020", "30 Dec, 2020", "31 Dec, 2020"];
// }





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


    console.log(formatteddates[clickeddateid]);


    // console.log("this is a date.");


    // Update the notepage header date :
    // today = mydates.clickeddateid; 
    document.getElementById("headerdate").innerHTML = formatteddates[clickeddateid];



    // Update the header Add Note button to represent the clicked date.
    let newButtonID = "addnote" + clickeddateid;
    $(".addnotebutton").prop("id", newButtonID);


    // Remove the previous notepage from visibility.
    // $(".notepage").remove();
    $(".notepage").addClass("hidden");


    // Retrieve the corresponding note page and append to 'mainnoteview'.


    // Access the notes from the relevent localStorage string & append them to the notepage.

    // retrieve the appropriate notepage content to the clicked date
    // from localstorage
    // var notepagecontent = localStorage.clickeddateid;


    // $("#mainnoteview").append(notepagecontent);


    let thisNotepage = "#notepage" + clickeddateid;
    // $("")
    console.log("xx" + thisNotepage);
    $(thisNotepage).removeClass("hidden");





    // for (var i = 0; i < notepagelist.length; i++) {

    //   var notepage = notepagelist[i];

    //   // remove the preceding 'note' substring in the id of the notepage.
    //   var notepageid = notepage.id.replace('note', '')

    //   // match the clicked date with corresponding notepage
    //   if (notepageid == clickeddateid) {

    //     // make the corresponding notepage visible
    //     notepage.classList.add("visible")

    //     console.log(notepageid);

    //   }
    //   else {
    //     // do not display other notepages
    //     // notepage.classList.remove("visible")
    //   }

    // }


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

  // 1. Loop through all the nodes in 'lessons' , making sure they don't have the 'today' class.  Use ClassList.remove('today') to do this ... 

  // 2. find the lesson row(s) with the current do-date in the DOM.. getElementsByAttribute - do date ?

  // 3. Give this node element the class 'today' with ClassList.add('today').

  // 4. If the no lesson date matches the system date, then highlight the nearest previous date with 'today' class.


  var todaysday = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000) + 1


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


function addNote(x) {


  // Add a note to the currently open 'notepage'.


  console.log(x);




  // make the current notepage hidden.
  notes = document.getElementsByClassName('notepage');

  // make all notepages hidden.
  for (var i = 0; i < notes.length; i++) {

    var item = notes[i];

    item.classList.add("hidden");
  }




  // launch the editor
  $('#summernote').summernote({
    placeholder: 'Add new note',
    tabsize: 2,
    height: 500
  })


  // Create a corresponding id for the Save button.
  let currentID = x.id;

  let currentsavebutton = '<button type="button" class="btn btn-primary savenotebutton" id="' + 'save' + currentID + '" onclick="saveNote(this)">Save</button>'

  // append the Save button
  $('#note-editor').append(currentsavebutton);

}


function saveNote(x) {

  var markupStr = $('#summernote').summernote('code');


  // Format the user generated note text in to a 'note' div.
  var savedNote = '<div class="note">' + markupStr + '</div>'

  console.log(savedNote)



  // Add the new note to the corresponding notepage.

  // change 
  var notepageidentifier = x.id.replace('saveaddnote', '#notepage');

  console.log("notepageidentifier: " + notepageidentifier);

  // append new note to the corresponding notepage div:
  $(notepageidentifier).append(savedNote);



  // make the editor invisible
  $('#summernote').summernote('reset');
  $('#summernote').summernote('destroy');


  // remove the 'Save' button.
  $('.savenotebutton').remove();



  // make the current notepage visible
   var thecurrentnotepage = $(notepageidentifier);
   thecurrentnotepage.removeClass("hidden");

   console.log(thecurrentnotepage)

   var currentnotepagehtml = thecurrentnotepage.html();



  // save the updated notepage to localstorage.
  // Store
  localStorage.setItem(notepageidentifier, currentnotepagehtml);

  console.log(localStorage.getItem(notepageidentifier));



}



function retrieveNotepages() {
  
  // loop through each notepage, retrieving the relevent notepage from localStorage.

  let htmlnotepages = document.getElementsByClassName("notepage");
  // console.log(htmlnotepages)


  for (var i = 0; i < htmlnotepages.length; i++) {


    // retrieve relevent localstorage value:

    // reformat the id to match localstorage key:
    var myincrementor = i +1;
    // console.log(myincrementor);
    var mykey = "#notepage" + myincrementor;
    // console.log()

    var releventnotepage = localStorage.getItem(mykey);
    // console.log(releventnotepage)



    htmlnotepages[i].innerHTML = releventnotepage;


  }






}