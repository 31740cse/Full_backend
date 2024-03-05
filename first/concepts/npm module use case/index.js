var v = require("figlet");
v("Ravi", (err, data) => {
    if (err) {
        console.log("Something went wrong");
        return;
    }
    console.log(data);
});