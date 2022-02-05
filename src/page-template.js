const fs = require('fs');

const generateInfo = (team)=> {
  console.log(team);

    const html =[];

    const generateManager = manager => {
      console.log(manager);
      
      let managerHTML = `
        <div class='card' style='width:18rem;'>
          <div class='card-header'>
            ${manager.name} <br>
            <i class="fas fa-coffee"></i>Manager
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id} </li>
            <li class="list-group-item">Email: <span id='email'><a href='mailto:${manager.emailAddress}'> ${manager.emailAddress}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
          </ul>
        </div>
      `;
      html.push(managerHTML);
    }

    const generateEngineer = engineer => {
      console.log(engineer);
      
      let engineerHTML = `
        <div class='card' style='width:18rem;'>
          <div class='card-header'>
            ${engineer.name} <br>
            <i class="fas fa-laptop-code"></i>Engineer
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id} </li>
            <li class="list-group-item">Email: <span id='email'><a href='mailto:${engineer.emailAddress}'> ${engineer.emailAddress}</a></span></li>
            <li class="list-group-item">Github Username: <a target='_blank' href='https://github.${engineer.githubUsername}'>${engineer.githubUsername} </a></li>
          </ul>
        </div>
      `;
      html.push(engineerHTML);
    }

    const generateIntern = intern => {
      console.log(intern);

      let internHTML = `
        <div class='card' style='width:18rem;'>
          <div class='card-header'>
            ${intern.name} <br>
            <i class="fas fa-user-graduate"></i>Intern
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id} </li>
            <li class="list-group-item">Email: <span id='email'><a href='mailto:${intern.emailAddress}'> ${intern.emailAddress}</a></span></li>
            <li class="list-group-item">School: ${intern.school} </li>
          </ul>
        </div>
      `;
      html.push(internHTML);
    }

    //create a loop for all of the team
    for (let i = 0; i<team.length; i++) {
      if (team[i].getRole() === 'Manager') {
        generateManager(team[i]);
      }
      if (team[i].getRole() === 'Engineer') {
        generateEngineer(team[i]);
      }
      if (team[i].getRole() === 'Intern') {
        generateIntern(team[i]);
      } 
    }

    //join the html
    return html.join('');
  }

module.exports = team => {

  return `
  <!DOCTYPE html>
  <html lang='en'>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>NF Team Profile Generator</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
      </head>

  <body>
  <header>
    <h1> My Team </h1>
  </header>
  <main>
  ${generateInfo(team)}
</main>

<script src="https://kit.fontawesome.com/493bea5fd9.js" crossorigin="anonymous"></script>
</body>
</html>
`;
}
