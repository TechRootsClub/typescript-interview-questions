const areAnagrams = (str1: string, str2: string): boolean => {
    const normalizeStr1: string = str1.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
    const normalizeStr2: string = str2.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();

    const arr1: string[] = normalizeStr1.split('');
    const arr2: string[] = normalizeStr2.split('');

    const sortedStr1: string = arr1.sort().join('');
    const sortedStr2: string = arr2.sort().join('');

    return sortedStr1 === sortedStr2;
}

const string1: string = "Eleven plus two !!";
const string2: string = "Twelve plus one";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are NOT anagrams.`);
}