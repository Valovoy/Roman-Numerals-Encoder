function solution(number) {
  const ONE = "I",
    FIVE = "V",
    TEN = "X",
    FIFTY = "L",
    ONE_H = "C",
    FIVE_H = "D",
    ONE_T = "M",
    NINE = "IX",
    NINETY = "XC",
    NINE_H = "CM";

  let romanNumberArr = [];

  let numberArr = number.toString().split("").reverse();

  const addUnits = (num, index) => {
    while (num > 0) {
      romanNumberArr.push(
        index === 0 ? ONE : index === 1 ? TEN : index === 2 ? ONE_H : ONE_T
      );

      num--;
    }
  };

  const addFive = (index) => {
    romanNumberArr.push(
      index === 0 ? FIVE : index === 1 ? FIFTY : index === 2 ? FIVE_H : ""
    );
  };

  numberArr.forEach((item, index) => {
    let num = Number(item);

    if (num === 5) {
      addFive(index);
    } else if (num < 5) {
      if (num === 5 - 1) {
        addFive(index);
        addUnits(1, index);
      } else {
        addUnits(num, index);
      }
    } else {
      if (num === 10 - 1) {
        romanNumberArr.push(
          index === 0 ? NINE : index === 1 ? NINETY : index === 2 ? NINE_H : ""
        );
      } else {
        if (num > 5) {
          addUnits(num - 5, index);

          addFive(index);
        }
      }
    }
  });

  return romanNumberArr.reverse().join("");
}
