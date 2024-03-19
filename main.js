let prompText = prompt`Ismingizni kiriting`

let prompHarf = prompt`harfni kiriting`


let result = prompText.includes(prompHarf)


if (result == true) {
    console.log(`siz kiritgan ${ prompText } texti ichida bor`);
}

else {
    console.log(`siz kiritgan ${ prompHarf } textni ichida yoq`);
}