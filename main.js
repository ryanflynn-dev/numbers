async function fetchNumberFacts() {
    const response = await fetch('https://api.math.tools/numbers/nod');
    const data = await response.json();

    const number = data.contents.nod.numbers.number;
    const romanNumber = data.contents.nod.numbers.numerals.roman.value;
    const chineseNumber = data.contents.nod.numbers.numerals.chinese.value;
    const egyptianNumber = data.contents.nod.numbers.numerals.egyptian.value;
    const binary = data.contents.nod.numbers.bases.binary.value;

    let facts = document.getElementById("facts");
    facts.innerHTML = `
        <p>The number of the day is ${number}.</p>
        <p>In Roman numerals, it's ${romanNumber}.</p>
        <p>In Chinese numerals, it's ${chineseNumber}.</p>
        <p>In Egyptian numerals, it's ${egyptianNumber}.</p>
        <p>In Binary, it's ${binary}.</p>


        `;
}

