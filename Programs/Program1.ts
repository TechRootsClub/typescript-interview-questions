// i/p = "Welcome to TechRoots Club for Learning";
// o/p = "emocleW ot stooRhceT bulC rof gninraeL";

const str: string = "Welcome to TechRoots Club for Learning";

const strArr: string[] = str.split(" ");
let strOutput: string = "";
strArr.forEach((word: string) => {
    for (let i: number = word.length - 1; i >= 0; i--) {
        strOutput = strOutput + word.charAt(i);
    }
    strOutput = strOutput + " ";
});

console.log(strOutput.trim()); // emocleW ot stooRhceT bulC rof gninraeL
