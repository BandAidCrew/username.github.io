# Readme
Website for the band Ham Crate.
Hosted on: http://hamcrate.rocks
## About
Welcome to the promotion-website for the talented up-and-coming band "Ham-Crate".
The webpage is made by the team "BandAidCrew" consisting of:
  - Lundeby, Daniel
  - Sjøen, Henry S.
  - Vatne, Magnus Nesje
  - Ulvund, Nils Joakim

## Hosting the site locally
The site needs a server that supports simple post/get-requests.
This is needed for our simple template-engine to work.
Therefore if you want to host the website on your computer (for dev-purposes)
you may run a simple server with python.

Open a terminal, navigate to the projects root-folder and run the command:
`python3 -m http.server
`
The website should then be served at localhost:8000

## Quick Folder structure overview
Each document should have a quick explanation of its purpose in the top-section of the file.
Here is a quick overview of the folders and whats inside.

| What                         | Folder/file    | Description                                                                           |
|------------------------------|----------------|---------------------------------------------------------------------------------------|
| 404-page                     |  404.html      | This is what is beeing shown when a user is lost/something is broken.                 |
| CNAME-record                 |  CNAME         | We need this file for the domain to work while hosting on github.io                   |
| Project assignment documents |  Documents/    | Folder containing all the documents that we were asked to deliver during the project. |
| Readme file                  |  README.md     | You're looking at it!                                                                 |
| Style-sheets                 |  css/          | All stylesheets are put into this folder                                              |
| Favicon folder               |  favicons/     | All favicons goes in here                                                             |
| Humans                       |  humans.txt    | Check http://humanstxt.org/ for more information                                      |
| Image folder                 |  img/          | All image-assets goes in here (except favicons)                                       |
| Index-page                   |  index.html    | The homepage. The index page needs to be at the root of the server.                   |
| Javascript-folder            |  js/           | All Javascript code goes in this folder                                               |
| Folder for Subpages          |  pages/        | All subpages goes into this folder.                                                   |
| Robot-textfile               |  robots.txt    | Check http://www.robotstxt.org/robotstxt.html for more information                    |
| Template folder              |  templates/    | All our template-files goes in this folder.                                           |
