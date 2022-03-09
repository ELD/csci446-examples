let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

// console.log("before timeout promise");
// timeoutPromise
//   .then(() => fetch("https://pokeapi.co/api/v2/"))
//   .then((body) => body.json())
//   .then((json) => console.log(json));
// console.log(end - start);
// console.log("is this after the promise runs?");

// async function fetchData() {
//   let response = await fetch("https://pokeapi.co/api/v2/");
//   console.log(await response.json());
// }

// let start = performance.now();
// console.log(fetchData());
// let end = performance.now();
// console.log(end - start);

function measurePromise(fn) {
  let onPromiseDone = () => performance.now() - start;

  let start = performance.now();
  return fn().then(onPromiseDone, onPromiseDone);
}

measurePromise(() => fetch("https://pokeapi.co/api/v2/")).then((duration) =>
  console.log(duration)
);
