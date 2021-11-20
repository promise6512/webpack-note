function getString() {
  return new Promise((resolve, reject) => {
    resolve("helloworld");
  });
}
async function helloWorld() {
  console.log("helloworld !!!");
  const res = await getString();
  console.log(res);
}
export default helloWorld;
