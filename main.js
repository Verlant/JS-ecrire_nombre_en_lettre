let number_letter_array_object = {
  1: "un",
  2: "deux",
  3: "trois",
  4: "quatre",
  5: "cinq",
  6: "six",
  7: "sept",
  8: "huit",
  9: "neuf",
  10: "dix",
  11: "onze",
  12: "douze",
  13: "treize",
  14: "quatorze",
  15: "quinze",
  16: "seize",
  20: "vingt",
  30: "trente",
  40: "quarante",
  50: "cinquante",
  60: "soixante",
  70: "soixante-dix",
  71: "soixante-et-onze",
  72: "soixante-douze",
  73: "soixante-treize",
  74: "soixante-quatorze",
  75: "soixante-quinze",
  76: "soixante-seize",
  80: "quatre-vingt",
  90: "quatre-vintg-dix",
  91: "quatre-vintg-onze",
  92: "quatre-vintg-douze",
  93: "quatre-vintg-treize",
  94: "quatre-vintg-quatorze",
  95: "quatre-vintg-quinze",
  96: "quatre-vintg-seize",
  100: "cent",
  1000: "mille",
};
function number_to_letter(number) {
  for (let key in number_letter_array_object) {
    if (number == key) {
      return number_letter_array_object[key];
    }
  }
  if (number == 0) {
    return "zéro";
  } else if (number < 100) {
    return (
      number_letter_array_object[Math.trunc(number / 10) * 10] +
      "-" +
      number_to_letter(number % 10)
    );
  } else if (number == 100) {
    return (
      number_letter_array_object[Math.trunc(number / 100) * 100] +
      "-" +
      number_to_letter(number % 100)
    );
  } else if (number > 100 && number < 1000) {
    return (
      number_letter_array_object[Math.trunc(number / 100)] +
      "-" +
      number_letter_array_object[100] +
      "-" +
      number_to_letter(number % 100)
    );
  } else if (number == 1000) {
    return (
      number_letter_array_object[1000] + "-" + number_to_letter(number % 1000)
    );
  } else {
    return (
      number_letter_array_object[Math.trunc(number / 1000)] +
      "-" +
      number_letter_array_object[1000] +
      "-" +
      number_to_letter(number % 1000)
    );
  }
}

function one_number_to_letter(number) {
  alert(number + " = " + number_to_letter(number));
}

function boucle_number_to_letter(number) {
  for (i = 0; i <= number; i++) {
    if (number_to_letter(i).indexOf("-zéro") > 0) {
      console.log(
        i +
          " = " +
          number_to_letter(i).slice(0, number_to_letter(i).indexOf("-zéro"))
      );
    } else {
      console.log(i + " = " + number_to_letter(i));
    }
  }
}
