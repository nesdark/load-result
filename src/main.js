let userFirstNumber = parseInt(window.prompt("Enter a number"))
while (isNaN(userFirstNumber + userFirstNumber)) {
  userFirstNumber = parseInt(window.prompt("Enter a {number}"))
}

let userSecondNumber = parseInt(window.prompt("Enter another number"))
while (isNaN(userSecondNumber + userSecondNumber)) {
  userSecondNumber = parseInt(window.prompt("Enter another {number}"))
}

window.alert(
  `The sum between ${userFirstNumber} + ${userSecondNumber} = ${
    userFirstNumber + userSecondNumber
  }`
)

window.alert(
  `The subtraction between ${userFirstNumber} - ${userSecondNumber} = ${
    userFirstNumber - userSecondNumber
  }`
)

window.alert(
  `The multiplication between ${userFirstNumber} x ${userSecondNumber} = ${
    userFirstNumber * userSecondNumber
  }`
)

window.alert(
  `The division between ${userFirstNumber} ÷ ${userSecondNumber} = ${
    userFirstNumber / userSecondNumber
  }`
)

window.alert(
  `The remainder of division between ${userFirstNumber} / ${userSecondNumber} is ${
    userFirstNumber % userSecondNumber
  }`
)

const oddOrEven =
  (userFirstNumber + userSecondNumber) % 2 === 0 ? "even" : "odd"

const equalOrDifferent =
  userFirstNumber === userSecondNumber ? "the same" : "different"

document.querySelector("main").innerHTML = `
        <div class="container">
          <p>
            The sum between ${userFirstNumber} + ${userSecondNumber} = ${
  userFirstNumber + userSecondNumber
}
          </p>
          <p>
            The subtraction between ${userFirstNumber} - ${userSecondNumber} =
            ${userFirstNumber - userSecondNumber}
          </p>
          <p>
            The multiplication between ${userFirstNumber} x ${userSecondNumber}
            = ${userFirstNumber * userSecondNumber}
          </p>
          <p>
            The division between ${userFirstNumber} ÷ ${userSecondNumber} = ${
  userFirstNumber / userSecondNumber
}
          </p>
        </div>
        <div class="container">
          <p>
            The remainder of division between ${userFirstNumber} ÷
            ${userSecondNumber} is ${userFirstNumber % userSecondNumber}
          </p>
          <p>
            The sum of ${userFirstNumber} + ${userSecondNumber} is ${oddOrEven}
          </p>
          <p>Your numbers are ${equalOrDifferent}</p>
          <p>
            The square root of the sum of their numbers is approximately
            ${Math.floor(Math.sqrt(userFirstNumber + userSecondNumber))}
          </p>
        </div>
`
