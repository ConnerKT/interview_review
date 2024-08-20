// So for example I remade the divideCookies function to use reduce instead of for loop, the function becomes pure because it returns the same finalArray for the same containers input
//It also doesn't rely on any external states or global variables

function divideCookies(containers) {

    let total = containers.reduce((acc, num) => acc + num, 0);
    let amount = total / containers.length;

    let rounded = Math.floor(amount);


    let finalArray = containers.map(() => rounded);
    let remainingCookies = total - rounded * containers.length;


    for (let i = 0; i < remainingCookies; i++) {
        finalArray[i] += 1;
    }
    return finalArray;
  }