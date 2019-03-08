# ReactJS Project - Olabode Adeloye & Jay Andrews

Mobile App Link:
https://compassionate-minsky-07b1c3.netlify.com

# Task 1: Trello Board

View the trello board to see the scrum process:
https://trello.com/b/myfPu1ZI

#### Features:

- [x] Google Maps showing location of where the user is and tasks avaliable in the area.

- [x] Tasks section which shows active tasks and allows users to create new tasks for other users to view and completed

- [x] Login and Register at the start of the mobile app. Users will not be able to access the app without logging in. Moreover, information is hashed in a firebase database.

- [x] Website is accessible according to the Web Accessiblity Checker

- [] RSS Feed of all the local news in the area, based on being green.

- [] Messaging other users who are close by to you

### 2.1 Technical Criteria: (15%)

- [x] Data is INSERTED AND FETCHED from the firebase database
- [x] User data is stored in the firebase database
- [x] Deploys automatically on a push to the master branch to live site.
- [x] Deploys automatically on a push to the test branch to test site.
- [x] Offline App - Write data offline

If a client loses its network connection, your app will continue functioning correctly.

Every client connected to a Firebase database maintains its own internal version of any active data. When data is written, it's written to this local version first. The Firebase client then synchronizes that data with the remote database servers and with other clients on a "best-effort" basis.

As a result, all writes to the database trigger local events immediately, before any data is written to the server. This means your app remains responsive regardless of network latency or connectivity.

Once connectivity is reestablished, your app receives the appropriate set of events so that the client syncs with the current server state, without having to write any custom code.

# What I Have Used:

- ReactJS
- Netlify
- Firebase
- HTML, CSS and JS
