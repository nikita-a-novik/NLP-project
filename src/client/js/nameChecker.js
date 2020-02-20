const isUrlCorrect = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}
function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (!isUrlCorrect(inputText)) {
        alert("Please provide a correct URL in a format [protocol]://[uri]")
        return false;
    }
    return true;
}

export { checkForName, isUrlCorrect }
