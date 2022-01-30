const fs = require('fs');

const generateInfo = infoArr => {
    
    return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${infoArr
        .map(({ name, id, emailAddress, officeNumber, githubUsername, school }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              ID:
              ${id}
            </h5>
            <h5 class="portfolio-languages">
              Email: 
              <a href="mailto:${emailAddress}" target="_blank">${emailAddress}</a>
            </h5>
            <h5 class="portfolio-languages">
              Office number: 
              ${officeNumber}
            </h5>
            <h5 class="portfolio-languages">
              Github: 
              ${githubUsername}
            </h5>
            <h5 class="portfolio-languages">
              School: 
              ${school}
            </h5>
          </div>
        `;
        })
        .join('')}
  `;
};

// module.exports = teamData => {
//     console.log(teamData);

//     const { project...header } = teamData;

//     return `
//     <!DOCTYPE html>
//     <html lang='en'>
    
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>NF Team Profile Generator</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//         <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//         <link rel="stylesheet" href="style.css">
//         </head>

//     <body>
//     <header>
//     <div class="container flex-row justify-space-between align-center py-3">
//       <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//     </div>
//     </header>
//     <main class="container my-5">
//     ${generateInfo}
//   </main>
//   <footer class="container text-center py-3">
//   </footer>
//   </body>
//   </html>
//   `;
//   };

  fs.writeFile('./index.html', generateInfo(infoArr), err => {
    if (err) throw err;
    console.log('generate complete! Check out index.html')
});

module.exports = generateInfo;