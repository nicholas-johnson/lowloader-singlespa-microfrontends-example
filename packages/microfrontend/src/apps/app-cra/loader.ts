import lowloader from "lowloader";

const bundle = "http://localhost:9000/app-cra/js/bundle.js";
const mainChunk = "http://localhost:9000/app-cra/js/main.chunk.js";

export const loader = () =>
  lowloader
    .import(bundle)
    .then(b => {
      console.log("b", b);
      return lowloader.import(mainChunk);
    })
    .then(c => {
      console.log("c", c);
      return c;
    });

// <script src="js/bundle.js"></script><script src="js/1.chunk.js"></script><script src="js/main.chunk.js"></script>
