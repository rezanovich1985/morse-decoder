const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  result = "";

  for (let i = 0; i < expr.length; i += 10) {
    letter10 = expr.slice(i, i + 10);

    if (letter10 === "**********") {
      result += " ";
      continue;
    }

    letterMorse = "";
    for (let j = 0; j < letter10.length; j += 2) {
      letter10Morse = letter10.slice(j, j + 2);
      switch (letter10Morse) {
        case "10":
          letterMorse += ".";
          break;
        case "11":
          letterMorse += "-";
          break;
      }
    }
    result += MORSE_TABLE[letterMorse];
  }

  return result;
}

module.exports = {
  decode,
};

const expr =
  "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
console.log(decode(expr));
