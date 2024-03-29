export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toUppercase(str) {
  return str.toUpperCase();
}

export function getAlphabetCharacter(charA, charZ) {
  let a = [];

  let i = charA.charCodeAt(0);

  let j = charZ.charCodeAt(0);
  ß;
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}

export function formatCardInput(input, hide = false) {
  let cleaned = ("" + input).replace(/\W/g, "");
  let match = cleaned.match(
    /^([a-zA-Z0-9]{4})([a-zA-Z0-9]{4})([a-zA-Z0-9]{4})([a-zA-Z0-9]+)$/,
  );
  if (match) {
    return match[1] + " " + match[2] + " " + match[3] + " " + match[4];
  } else {
    return input;
  }
}

export function toLowerCase(input) {
  return input.toLowerCase();
}

export function toUpperCase(input) {
  return input.toUpperCase();
}

export function changeVietnameseAlias(alias) {
  let str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " ",
  );
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str;
}

export function stripeHTMLTags(text) {
  const regex = /(<([^>]+)>)/gi;
  const regex2 = /\r?\n|\r/g;
  return text.replace(regex, "").replace(regex2, "");
}

export function removeLineBreak(description = "") {
  return description.replace(/(\r\n|\n|\r)/gm, "");
}
