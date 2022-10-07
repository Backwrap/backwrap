const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const newApp = () => {
  readline.question("Name of the app: ", (path) => {
    readline.question("Description of the app: ", (description) => {
      console.log(description);
      fs.access(path, (error) => {
        // To check if the given directory
        // already exists or not
        if (error) {
          // If current directory does not exist
          // then create it
          fs.mkdir(path, (error) => {
            if (error) {
              console.log(error);
            } else {
              const details = `const ${path} = () => {\n\n}\nmodule.exports = ${path}`;
              fs.writeFile(`${path}/index.js`, details, function (err) {
                if (err) throw err;
              });
              console.log(`${path} has been created`);
            }
          });
        } else {
          console.log(`${path} already exist`);
        }
        readline.close();
      });
    });
  });
};

module.exports = newApp;
