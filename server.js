const app = require("./index");

/* Start the server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Example app listening on port '+ PORT));
