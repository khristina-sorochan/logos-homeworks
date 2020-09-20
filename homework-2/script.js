//Модуль Калькулятора
let calculator = (function () {
  //Оголошення змінних
  let currNumber = document.getElementById("input"); // теперішнє значення
  let operator, //запис опеоатора
    operatorSet = false, //контроль отримання оператора
    equalsPressed = false, //контроль нажаття на дорівнює
    lastNumber = null; //останнє значення

  //Дає можливість вставити одну крапку/кому і цифри
  const validate = (inp) => {
    inp.value = inp.value
      .replace(/[^\d,.]*/g, "")
      .replace(/([,.])[,.]+/g, "$1")
      .replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, "$1");
  };

  //Фунуція додавання
  const add = function (x, y) {
    return x + y;
  };

  //Фунуція віднімання
  const subtract = function (x, y) {
    return x - y;
  };

  //Фунуція множення
  const multiply = function (x, y) {
    return x * y;
  };

  //Фунуція ділення
  const divide = function (x, y) {
    //на нуль ділити не можна
    if (y == 0) {
      currNumber.style.fontSize = "35px";
      return "Це не число";
    }
    return x / y;
  };

  //Вивести значення на екран
  const setVal = (val) => {
    currNumber.value = val;
  };

  //Функція на клік AC (обнулити всі значення)
  const clearNumbers = () => {
    lastNumber = null;
    operatorSet = false;
    equalsPressed = false;
    setVal("0");
    console.log("clear");
  };

  //Функція на клік зміни знаку
  const invertNum = () => {
    //мінямо знак, якщо не нуль
    if (currNumber.value != 0) {
      currNumber.value *= -1;
      setVal(currNumber.value);
      console.log("invert");
    }
  };

  //Фунуція на клік %
  const profitNum = () => {
    currNumber.value /= 100;
    setVal(currNumber.value);
    console.log("profit");
  };

  //Фунуція на клік цифри
  const numberClick = (e) => {
    let button = e.target;
    if (currNumber.value == "0" && button.value == ",")
      setVal(currNumber.value + button.value);
    //якщо значення нуль, або перед тим був натиснутий оператор/дорівнює
    if (
      currNumber.value == "0" ||
      operatorSet == true ||
      equalsPressed == true
    ) {
      setVal(""); //стираємо значення на екрані, яке було
      operatorSet = false; //так, як натиснули на число
    }
    setVal(currNumber.value + button.value); //тоді записуємо нове значення на екран
    validate(currNumber); //валідвція на кому
    console.log(`button: ${button.value}`);
  };

  //Фунуція на клік оператора
  const setOperator = function (newOperator) {
    //якщо отриманий оператор = виконуємо і виходимо
    if (newOperator == "=") {
      equalsPressed = true; //помічаємо, що = натиснуте
      calculate(); //виклик обрахунку
      return;
    }

    //щоб порахувати коли більше ніж 1 дія, але без =
    if (!equalsPressed) calculate();
    equalsPressed = false;
    operator = newOperator; //записуємо оператор
    operatorSet = true; //помічаємо, що оператор отриманий
    console.log(`operator: ${operator}`);
    lastNumber = parseFloat(currNumber.value.replace(/,/, ".")); //записуємо число в останнє значення
  };

  //Функція обрахування
  const calculate = function () {
    //якщо оператор не отриманий або lastNumber пусте виходимо
    if (!operator || lastNumber == null) return;
    let newCurrNumber = parseFloat(currNumber.value.replace(/,/, ".")); //записуєио нове теперішнє значення
    let newVal = 0;
    //рахуємо
    switch (operator) {
      case "+":
        newVal = add(lastNumber, newCurrNumber);
        break;
      case "-":
        newVal = subtract(lastNumber, newCurrNumber);
        break;
      case "*":
        newVal = multiply(lastNumber, newCurrNumber);
        break;
      case "/":
        newVal = divide(lastNumber, newCurrNumber);
        break;
    }
    setVal(newVal); //тоді записуємо нове значення на екран
    lastNumber = newVal; //і останнє значення
    console.log(`result: ${currNumber.value}`);
  };

  return {
    clearNumbers,
    invertNum,
    profitNum,
    numberClick,
    setOperator,
  };
})();

//   //Фунуція - стерти останню цифру
//   const backspace = () => {
//     removeLastNum(result.toString());
//     console.log(result);
//   };
//   const removeLastNum = (str) => {
//     str = str.split("");
//     str.pop();
//     str = str.join("");
//     if (!str) {
//       result = 0;
//     } else result = parseFloat(str);
//   };
