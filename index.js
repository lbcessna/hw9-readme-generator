const fs = require('fs');
const inquirer = require('inquirer');

function createReadMe(ansData) {

return `
# - ${ansData.title}
    
## - Installation instructions
<pre>
npm init
</pre>

## - Other dependencies?
<pre>
${ansData.installation}
</pre>

## - Description
${ansData.description}

## - Contributors
http://github.com/${ansData.contributors}

## - Tests
${ansData.tests}

`
}

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "what is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Not counting 'npm init', what other dependencies are there to include?",
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Please provide the contributors' github aliases?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Did you run tests and were they successful?"
    }
]).then(function (ansData) {
    const readMeFileString = createReadMe(ansData);
    fs.writeFile("generatedReadme.md", readMeFileString, function (err) {
        if (err) {
            console.log("Error!");
            console.log(err);
        }else{
            console.log("Successfully created!");
        }
    })
})