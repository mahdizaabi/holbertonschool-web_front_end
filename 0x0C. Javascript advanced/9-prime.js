/* Prime numbers & timing execution */
const countPrimeNumbers = () => {
  const t0 = performance.now();

  let x = 0;

  for (let i = 2; i <= 100; i++) {
    x = 0;
    for (let k = 2; k <= i; k++) {
      if (i % k === 0 && i != k) {
        x = 1;
      }
    }
    if (x == 0) {
      console.log(i);
    }
  }
  const t1 = performance.now();
  console.log(
    `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
  );
};

countPrimeNumbers();
