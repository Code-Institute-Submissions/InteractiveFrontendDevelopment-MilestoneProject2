# DailyNotes web app


This is an interactive website that allows the user to add and view daily notes. Each day has it's own page for adding notes, allowing the user to keep a journal, as well and to plan tasks and events for days in the future.


There is a live demo available [here](https://evmcodi.github.io/InteractiveFrontendDevelopment-MilestoneProject2/index.html).

![Desktop Demo](/assets/images/dailynotes1.png "Desktop Demo")
![Desktop Demo](/assets/images/dailynotes2.png "Desktop Demo")



## UX




### Strategy

The goal for this site is to make it easy and intuitive for users to keep daily notes, daily tasks and future tasks on a cross-platform web app.

#### User Stories

- As a student, I want to keep track of new things I learn each day through writing notes. I also want to be able to plan for assignment deadlines and exam dates set at a future day. I want this to be achieved in an intuitive and simple structure so I don't get confused.

- As a developer, I want to keep a record of tasks that I have completed, as well as new things that I learn each day. I also want to be able to plan milestones for dates in the future so I can provide clients with projects that are on time.

### Scope

DailyNotes has a content scope focused on user-generated notes. The user can create notes in rich text (including images and embedded videos).


### Structure

The site's content structure contains two main views.

- The calendar view.
- The daily note page view.

The site is coded to allow the user to select a date from the calendar in order to view, add, edit or delete notes for that day.


### Skeleton

The site's content skeleton includes a scrollable view for the calendar year 2020.

It also includes a scrollable daily note page with an 'Add note' button at the top along with a date header to help users to know what date they are adding the note to, especially on mobile and tablet screens.

There is a wireframe available to view at https://evmcodi.github.io/InteractiveFrontendDevelopment-MilestoneProject2/assets/wireframes/DailyNotes_v1.html. 




### Surface

The colour scheme is a minimalistic so users are comfortable with the site.

The background is white and the notes background is light grey to give some definition to them.

All text is well contrasted with the backgrounds for easier readability.

The green 'Add note' button gives a clear understanding to the user about how to interact with the page initially.

The edit note page's buttons are appropriately coloured and positioned within CSS flexboxes so that a person is less likely to accidentally delete a note, as shown below.

![Desktop Demo](/assets/images/dailynotes3.png "Desktop Demo")





## Technologies Used

Languages:
- HTML
- CSS
- Javascript

Libraries:
- JQuery
- Bootstrap 4
- Summernote Rich text editor



## Features

### Features implemented


#### Interactive calendar view & day selelctor.
User can click on a date to view it's corresponding note page.

#### Daily notes view.
The user can view all rich text notes for the corresponding day in a list view.

#### Note editor.
The user can Save, Edit or Delete a note in the note editor view.

#### Responsive Design.
Users on mobile, tablet, laptop and desktop can use all the features of the web app.


### Features to Implement


#### A way to assign different tags to notes.

This would allow a user to tag notes with e.g. 
- a 'task' tag
- an 'event' tag

#### A way to add recurring tasks/events.

E.g. The user could add an event that happens every two weeks to remind them to call a friend.

#### A search function.
This would allow a user to search their notes for keywords or tags.

## Testing

### Process

The site was tested on multiple devices to ensure consistent and working deployment of the web app. These include a Linux desktop with Firefox, a Windows 10 laptop with Chrome, a Sony Xperia with Firefox and a Google Nexus table with Chrome.

All buttons and interactive features have been tested manually in order to ensure that they work as expected. 

A defensive design process was used to ensure no sequence of user interactions could result in an error.



### Issues Fixed

#### In this project the media queries in CSS weren't sufficient for responsive design.

This was overcome by detecting the window width in Javascript with the following function.

```js
  if (window.matchMedia('screen and (max-width: 991px)').matches) {

    $("#backtocal").css({ "display": "block" })

  }
```


### Issues to Resolve

#### Handle the 'Back' button on Android devices and browser windows more effectively.

During testing on different devices an issue was found where the back button doesn't work as a user might expect. 
This was mitigated by adding a prominent 'Back to calendar view' button on mobile and tablet devices.

In future the back button could be handled better through URL hash and browser history methods.

#### Summernote rich text editor only accepts height in pixels.

This makes it a bit more difficult to ensure the Save, Delete and Cancel buttons are visible during editing of a note on very low height windows and screens.

A workaround should be found through encapsulation of the editor or different placement of the button group.



## Deployment

DailyNotes is hosted on Github pages [here](https://evmcodi.github.io/InteractiveFrontendDevelopment-MilestoneProject2/index.html).

It was deployed following the procedure outlined in the [Github Pages documentation](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site).

There was an issue with the relative links of the favicon files when the site was uploaded to Github, which resulted in a 404 http error being shown in Firefox Developer Tools for each of these files. 

In order to fix this deployment issue a change in the linking was added with the addition of "../../" before the assets folder link.

### Cloning and editing

This site can be cloned by clicking the 'Download as .zip' button at the top of this repo and the files can be edited directly and viewed in a browser.

## Credits

### Libraries used

- JQuery
- Bootstrap 4
- Summernote Rich text editor

### Devlopment tools used

#### VSCode

- Free IDE developed by Microsoft.

#### Live server extension for VSCode 
- Auto-reloads the site preview in the browser after a file is edited and saved. 
- Also allows viewing and testing your site on other devices connected to the same local network.
- https://github.com/ritwickdey/vscode-live-server

#### Beautify css/sass/scss/less
- Extension for VSCode that allows instant formatting of CSS files with Ctrl-Shift-I shortcut.

#### Firefox & Developer Tools
- Browser with developer tools for previewing UI.

#### Git & Github
- Git is used for version control of code is preinstalled on most Linux distributions. 
- Github.com is used for storing version-controlled code online and as a cloud backup.

#### Github Pages
- Github Pages is used for deployment of the code online.

#### quickMockup
- https://jdittrich.github.io/quickMockup/

- Free open sourece tool for wireframing websites. Allows export to html.




<br><br>
*This site is not intended for commercial use*
