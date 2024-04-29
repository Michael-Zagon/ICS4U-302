/**
 * Program for 302
 *
 * By: Michael Zagon
 * Version: 1.0
 * Since:   2024-04-28
 */

import { createPrompt } from 'bun-promptx'

function factorial(userNumber: number): number {
  if (userNumber < 0) {
    return -1
  } else if (userNumber === 0) {
    return 1
  } else {
    return factorial(userNumber - 1) * userNumber
  }
}

// Asks for the users input
const userNum = prompt('Enter number: ')
const userNumber = parseInt(userNum)

if (!isNaN(userNumber)) {
  // Shows the factorial of the number
  console.log(`The factorial is: ${factorial(Number(userNumber))}`)
} else {
  // Shows if the number is invalid
  console.log('Invalid Input!')
}
console.log('\nDone.')
