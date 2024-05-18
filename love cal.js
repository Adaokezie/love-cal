document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();

    if (name1 === "" || name2 === "") {
        document.getElementById('result').innerText = "Please enter both names.";
        return;
    }

    const combinedNames = name1 + name2;
    const uniqueChars = new Set(combinedNames).size;
    let result;

    if (uniqueChars < 4) {
        result = "Lovers";
    } else if (uniqueChars >= 4 && uniqueChars <= 7) {
        result = "Crushes";
    } else if (uniqueChars >= 8 && uniqueChars <= 10) {
        result = "Friends";
    } else {
        result = "Enemies";
    }

    document.getElementById('result').innerText = `Result: ${result}`;
});
