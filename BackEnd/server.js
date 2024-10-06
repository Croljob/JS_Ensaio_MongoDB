import "dotenv/config";
import app from "./src/app.js";

const PORT = 3003;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
