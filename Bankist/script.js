'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*// Slice
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // - sign is used to get the last element of array
console.log(arr.slice(1, -2));
console.log(arr.slice());

// Splice

console.log(arr.splice(2)); // It change the original array
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));

// forEach with array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`Deposite: ${movement}`);
  } else {
    console.log(`Withdraw: ${Math.abs(movement)}`);
  }
}
// ForEach
console.log(`---- forEach ----`);
movements.forEach(function (action, i, arr) {
  if (action > 0) {
    console.log(`Action ${i + 1}: Deposite - ${action}`);
  } else {
    console.log(`Action ${i + 1}: Withdraw - ${Math.abs(action)}`);
  }
  console.log(arr[i]);
});


// forEach with map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian Rupee'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// forEach with Sets
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'INR', 'USD', 'GBP']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
});

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const inrToUsd = 0.014;

// map method

const movementsUsd = movements.map(function (action) {
  return action * inrToUsd;
});
const movementsUsd = movements.map(action => action * inrToUsd);
console.log(movementsUsd);

// for of method
const moveUsd = [];
for (const mov of movements) {
  moveUsd.push(mov * inrToUsd);
}
console.log(moveUsd);

movements.map((action, i) =>
  action > 0
    ? console.log(`Action ${i + 1}: Deposite - ${action}`)
    : console.log(`Action ${i + 1}: Withdraw - ${Math.abs(action)}`)
);

movements.map((action, i) =>
  console.log(
    `Action ${i + 1}: ${action > 0 ? 'Deposite' : 'Withdraw'} - ${Math.abs(
      action
    )}`
  )
);


// Filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposite = movements.filter(function (action) {
  return action > 0;
});
//console.log(deposite);

const withdrwals = movements.filter(action => action < 0);
//console.log(withdrwals);

// Forof loop
const depositeFor = [];
for (const action of movements) {
  if (action > 0) {
    depositeFor.push(action);
  }
}
//console.log(depositeFor);

// Reduce Method
console.log(movements);

const balance = movements.reduce(
  (accumulator, action) => accumulator + action,
  0
);
console.log(balance);

// Maximum value of array

const max = movements.reduce(
  (acc, action) => (acc > action ? acc : (acc = action)),
  movements[0]
);
console.log(max);

const min = movements.reduce(function (acc, action) {
  const value = acc < action ? acc : (acc = action);
  return value;
}, movements[0]);
console.log(min);

//forof loop
let sum = 0;
for (const action of movements) {
  sum += action;
}
console.log(sum);

// Pipeline
const inrToUsd = 0.014;
const totalDepositeUSD = movements
  .filter(action => action > 0)
  .map(action => action * inrToUsd)
  .reduce((acc, action) => acc + action, 0);

console.log(totalDepositeUSD);


// Find Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdraw = movements.find(function (action) {
  return action < 0;
});

console.log(firstWithdraw);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Bishal Kumar Shaw');
console.log(account);

//For of Loop

let found;
for (const account of accounts) {
  if (account.owner === 'Bishal Kumar Shaw') {
    found = account;
  }
}
console.log(found);

// flatMap is use to reduce the map and flat method in one method

const totalNew = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(total);

// Sorting
// it works with the stings only
const owners = ['Bishal', 'Kajal', 'Jyoti', 'Bharti'];

console.log(owners.sort());

// Sorting for numbers

// return <0, A,B (Keep order)
// return >0, A,B (Switch order)
console.log(account1.movements);
// accending
account1.movements.sort((a, b) => (a > b ? 1 : -1));

console.log(account1.movements);
// desending
account1.movements.sort((a, b) => b - a);

console.log(account1.movements);


// Some and every method

console.log(account1.movements);
console.log(account1.movements.includes(-130));

const anyDeposite = account1.movements.some(mov => mov > 500);
console.log(anyDeposite);

console.log(account1.movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Seperate Callback
const deposit = mov => mov > 0;
console.log(account1.movements.some(deposit));
console.log(account4.movements.every(deposit));
console.log(account1.movements.filter(deposit));

// flat and flatMap Method

const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8, 9];
console.log(arrDeep.flat(2));

const accMov = accounts.map(acc => acc.movements);
console.log(accMov);
const allDeposite = accMov.flat();
console.log(allDeposite);

const totalBal = allDeposite.reduce((acc, mov) => acc + mov, 0);
console.log(totalBal);

const total = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(total);
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Bishal Kumar Shaw',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Kajal Das',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Bishal Das',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Kajal Shaw',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMove(movements, sort = false) {
  containerMovements.innerHTML = '';

  const action = sort ? movements.slice().sort((a, b) => a - b) : movements;

  action.forEach(function (mov, i) {
    const action = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                  <div class="movements__type movements__type--${action}">${i} ${action.toUpperCase()}</div>
                  <div class="movements__value">${mov}INR</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function createUN(accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
}

createUN(accounts);

function calcPrintBal(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} INR`;
}

function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}INR`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}INR`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((sum, int) => sum + int, 0);
  labelSumInterest.textContent = `${interest}INR`;
}

function reloadUI(currentAcc) {
  // Display movements
  displayMove(currentAcc.movements);

  // Display balance
  calcDisplaySummary(currentAcc);

  //Display Summary
  calcPrintBal(currentAcc);
}

// Event Handlers
let currentAcc;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAcc = accounts.find(acc => acc.userName === inputLoginUsername.value);
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome ${currentAcc.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear Input Field
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    reloadUI(currentAcc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciver = accounts.find(acc => acc.userName === inputTransferTo.value);
  if (
    amount > 0 &&
    reciver &&
    currentAcc.balance > amount &&
    currentAcc.userName !== reciver?.userName
  ) {
    // Doing the transfer
    currentAcc.movements.push(-amount);
    reciver.movements.push(amount);
    reloadUI(currentAcc);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
});

// Loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
    currentAcc.movements.push(amount);
    reloadUI(currentAcc);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// Find index method

// Close account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAcc.userName === inputCloseUsername.value &&
    currentAcc.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAcc.userName
    );
    // Delete Account
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMove(currentAcc.movements, !sorted);
  sorted = !sorted;
});

//fill method

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

//x.fill(1);
x.fill(1, 3, 4);
console.log(x);
x.fill(1);
console.log(x);

const arr = [1, 2, 3, 4, 5, 6];
arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const arrNew = Array.from({ length: 7 }, () => 1);
console.log(arrNew);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
