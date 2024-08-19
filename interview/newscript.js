function main() {
  let numContainers = parseInt(prompt("Enter the number of containers:"));
  let containers = [];

  for (let i = 0; i < numContainers; i++) {
    let cookies = parseInt(
      prompt(`Enter the number of cookies for container ${i + 1}:`)
    );
    containers.push(cookies);
  }
  let result = divideCookies(containers);
  console.log("Final Distribution:", result);
}

function divideCookies(containers) {
  let total = 0;
  let finalArray = [];
  let finalTotal = 0;

  for (let i = 0; i < containers.length; i++) {
    // containers has 3 containers
    // we were right about the syntax (idk why it didnt work)
    total += containers[i];
  }

  let amount = total / containers.length;
  console.log("total", total);
  console.log("amount", amount);
  let rounded = Math.floor(amount);
  console.log("rounded", rounded);
  for (let i = 0; i < containers.length; i++) {
    finalArray.push(rounded);
    finalTotal = finalTotal + rounded;
  }
  console.log("Final Total: ", finalTotal);
  // We want to compare finalArray to total
  // we want to subtract the rounded to the amount
  let remainingCookies = total - finalTotal;
  for (let i = 0; i < remainingCookies; i++) {
    finalArray[i] += 1;
  }
  return finalArray;
}

main();
