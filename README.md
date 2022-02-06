# NF Team profile Generator

## Description
Build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Before running the application the user must perform an npm install to install all required dependencies.

Upon launching the app, the user is asked to describe the first member of their team. The user enters the team member's name, selects that member's role from a list (options include "Engineer," "Intern," and "Manager), enters the member's ID (any string), enters the member's email address, and then must enter another piece of information that will differ depending on what role was selected. If "Engineer" was selected, the app asks the user for the team member's GitHub username; if "Intern" was selected, the member's school is requested; and if "Manager" was chosen, the user is prompted for the team member's phone number.


## Click the link to walkthrough video demonstrating the functionality of the application

## Table of Contents:
### • [Description](#description)
### • [Installation](#installation)
### • [Usage](#usage)
### • [License](#license)
### • [Contributors](#contributors)
### • [Testing](#testing)


## Installation
• node js
• npm jest
• npm install inquirer

## Usage
When all information on the team member has been entered, the user is asked whether there are any more members they would like to add. If so, the user is asked the same questions about the new team member. If not, an HTML file is created with cards displaying the information on all the team members entered by the user in the "outputs" folder titled "index.html." A screenshot of an example team profile is shown below:

![Screenshot the generate html](screen%20shot%20application.png)

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
https://opensource.org/licenses/MIT

## Contributors
N/A

## Testing
Download the code and open terminal and run node index.js. Input all information and open index.html
see walthrough video demo:

![Demo video file](https://user-images.githubusercontent.com/69065671/152664851-ac5155e4-21e0-487a-93d8-ad269074e77c.mp4)

