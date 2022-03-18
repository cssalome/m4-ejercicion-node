  // const pwd = () => {
  //   process.stdout.write(process.cwd())
  // }

  // const date = () => {
  //   process.stdout.write(Date())
  // }

  // const ls = () => {
  //   fs.readdir('.', function(err, files) {
  //     if (err) throw err;
  //     files.forEach(function(file) {
  //       process.stdout.write(file.toString() + "\n");
  //     })
  //     process.stdout.write("prompt > ");
  //   });
  // }

  //   const echo = () => {
  //   fs.readdir('.', function(err, files) {
  //     if (err) throw err;
  //     files.forEach(function(file) {
  //       process.stdout.write(file.toString() + "\n");
  //     })
  //     process.stdout.write("prompt > ");
  //   });
  // }



  
// const fs = require('fs');
// const request = require('request');
  

// const done = (output) => {
//   process.stdout.write(output.length);
//   process.stdout.write('prompt >');
// }

// const pwd = (file) => {
//   process.stdout.write(process.cwd());
// }

// const date = (file) => {
//   process.stdout.write(Date());
// }

// const ls = (file) => {
//   fs.readdir('.', (err, files) => {
//     if (err) throw err;
//     let res = '\n'
//     files.forEach((file) => {
//       process.stdout.write(file.toString() + "\n");
//     })
//     process.stdout.write("prompt > ");
//     });
//   }

// const echo = (file) =>{
//   done(file);
// }

// const curl = (file) =>{
//   resquest (file, (err, res, body) => {
//     done(body);

//   })
// }


const fs = require("fs");
const request = require("request");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("prompt > ");
};

const pwd = (file) => {
  done(process.cwd());
};
const date = (file) => {
  done(Date());
};
const ls = (file) => {
  let output = "";
  fs.readdir(".", (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      output += file.toString() + "\n";
    });
    done(output);
  });
};

const echo = (file) => {
  done(file);
};
const curl = (file) => {
  request(file, (err, res, body) => {
    done(body);
  });
};
module.exports = {
  pwd,
  date,
  ls,
  echo,
  curl,
};


