# neuRave
## Rave About Your Rave

## Contributors
**Project Manager:-**
[Christopher Leblanc](https://github.com/ChristopherLeBlanc2)
**Porject Architect:-**
[Ben Tanaka](https://github.com/BTanaka11)
**Project UI Team:-**
[Gabi Olarte](https://github.com/babsjohnson)
[Sarah Handley](https://github.com/SarahHandley)
**project Team:-**
[Miles Owens](http://github.com/milrilowe)
[Jojo Ortiz](https://github.com/jojortz)
[Drew Henderson](http://github.com/gthellter)
[Georgina Lin](https://github.com/xialin0702)

## Description

A music social media and event planning web app with a rave theme, for a mock client named Rae Vyn Harrd. It allows users to search for upcoming music events, create groups for them, see notifications of upcoming events, and group chat with other attendees. Our team had a tight deadline of one week and were able to deliver a viable product of the client’s requirements/features but also added functionality outside the scope of the project to improve the user experience.

**Login and Home Page -**

Users login through their spotify account to get to the Home Page, which shows the user’s groups, each representing one concert or music festival event from Seatgeek API data. They also can see notifications for upcoming events.

**Group Page -**

Clicking a group from the home page or profile page redirects the user to the Group page. This page includes a map from Google maps API showing where the event will be taking place. This page also included the description of the event and all attendees that have chosen to be part of the group. Users have the ability to add other users to the group as well. All attendees in the group have access to a chat box feature to communicate with each other to plan out the events.

**Discover page -**

Allows users to search the Seatgeek API database and create groups. Results are limited to 50 events at a time and sorted by the soonest upcoming event date. Each card can be clicked to redirect the user to seat geek’s website for that concert in order to purchase tickets.Each card also has the ability to join the events group or create a group if one has not been made. If both of those choices are not applicable due to the user being in that group already the button will dynamically change to show that status.

**Profile page -**

Allows users to save information such as age, location, photo, and bio, which other users can see. Past and upcoming event names can also be seen on this page, as well as, notifications.

## Tech Stack

PostsgreSQL
Express
Axios
React
Node.js
Zustand
Socket.io
Mantine

## Technical Challenges

One of the biggest challenges was organizing state.  There were a lot of states that were shared throughout the application in different components, which would have required an intense amount of passing and drilling of props.  We used Zustand as our state-management solution, however, there was still the issue where there were some states that seemed to only be needed in one component but then it was later realized that multiple components shared this state.

Saving Images to the backend was another big challenge in this project. Storing images in the backend while also allowing the users to view the profile Images in the various components.

We opted to use Spotify’s API not just for playing music, but also as our only way of authentication.  Spotify uses the OAuth 2.0 authentication system, which in itself was just conceptually difficult to unravel.

For the Discover page, managing the interaction between the Seatgeek API data and the data stored separately in our own postgres database was a challenge. Upon executing a search, a join of the API results with our members database was needed to determine the group card buttons’ text. And upon the user clicking “Create New Group”, a subset of the API data’s fields had to be written to our database.


## App Demo

Login/Home Page
![Login Page GIF](walkThroughGifs/Login_and_Home_Page.gif)

Group Page
![Group Page GIF](walkThroughGifs/GroupPageGIF.gif)

Discover Page
![Discover Page GIF](walkThroughGifs/Discover_Page.gif)

Profile Page
![Profile Page GIF](walkThroughGifs/Profile_Page.gif)

## How the App Works

The Rave App has multiple pages that provide the user a clean UI. The following diagram shows how the pages can be accessed.

![Graph](Screen%20Shot%202022-11-28%20at%206.12.01%20PM%202.jpg)

## Required Research

OAuth 2.0
Spotify API
SeatGeeks API

## Key Takeaways

Communication throughout the project is a priority in creating something efficiently and with consistency.

Stand ups create a safe place to ask for help and communicate in a way that does not interrupt other work.

Having an engineering team of more than 5 can allow the creation of very complex application as long as organization is chosen as a priority.

## Notes From Sprint Retro

Each member agreed that the other members in the team held their own and had a hand in creating the application.

Everyone was happy in choosing how to disperse the responsibilities into components with pairs and allowing them to choose how to tackle that particular component in a way that they saw fit.

Communication through slack was paramount in working with partners while also being available to the team if they were needed.

Team decisions were made efficiently with everyone's input and through conflicts the voting system that was put into place worked well.

Everyone felt respect was maintained throughout the project and disagreements were handled appropriately.

Noone expressed that they felt that they were not heard or their ideas were pushed aside.

## Future Improvements

Plans to implement a notification sign up system that would allow all members in the group to set personalized notification time and have that individual receive an email or text based on preference at those times.

Customizable playlists where each group member can add to a group's spotify playlist.

Have access to other users’ profiles to learn more about them.

Have the ability to see the discovery page and user profiles (that are public) to be accessible to guests.

Each user to have the ability to add friends via request to other users and save those users to their profile.

Each user to have the ability to add photos of the previous events to share with other attendees.

Ability to add photos to your profile and integrate Instagram.

