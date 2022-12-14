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
  21: "vingt-et-un",
  30: "trente",
  31: "trente-et-un",
  40: "quarante",
  41: "quarante-et-un",
  50: "cinquante",
  51: "cinquante-et-un",
  60: "soixante",
  61: "soixante-et-un",
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

/**convertie un nombre en lettre, exemple : 121 = cent-vingt-et-un
 * @param {int} number
 * @returns {string}
 */
function number_to_letter(number) {
  for (let key in number_letter_array_object) {
    if (number == key) {
      return number_letter_array_object[key];
    }
  }
  if (number == 0) {
    return "zéro";
  } else if (Math.trunc(number / 10) <= 9) {
    return (
      number_letter_array_object[Math.trunc(number / 10) * 10] +
      "-" +
      number_to_letter(number % 10)
    );
  } else if (Math.trunc(number / 100) == 1) {
    return (
      number_letter_array_object[Math.trunc(number / 100) * 100] +
      "-" +
      number_to_letter(number % 100)
    );
  } else if (Math.trunc(number / 100) <= 9 && Math.trunc(number / 100) != 1) {
    return (
      number_letter_array_object[Math.trunc(number / 100)] +
      "-" +
      number_letter_array_object[100] +
      "-" +
      number_to_letter(number % 100)
    );
  } else if (Math.trunc(number / 1000) == 1) {
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
  if (number_to_letter(number).indexOf("-zéro") > 0) {
    alert(
      number +
        " = " +
        number_to_letter(number).slice(
          0,
          number_to_letter(number).indexOf("-zéro")
        )
    );
  } else {
    alert(number + " = " + number_to_letter(number));
  }
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
