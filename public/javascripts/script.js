// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
// }

// const imgDiv = document.getElementById("#table");
// imgDiv.innerHTML += '<img src="../images/steak.jpg">';
// imgDiv.innerHTML += '<img src="../images/mashPotatoes.jpg">';
// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {});
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  for (let i = 1; i < mashPotatoes.length; i++) {
    addFood(mashPotatoes[i], "#mashPotatoes");
  }
});

// Iteration 3 using async/await

async function makeFood(steps, id) {
  for (let step of steps) {
    await addFood(step, id);
  }
}
makeFood(brusselSprouts, "#brusselSprouts");
Promise.all([]).then(() => {
  alert("dinner served");
});
