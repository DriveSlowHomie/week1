function addWholeNumber(a, b) {
    if (Math.floor(a) !== a || Math.floor(b) !== b) {
        throw new Error('Only numbers!');
    }
    if (Math.abs(a) !== a || Math.abs(b) !== b) {
        throw new Error('Only postive numbers!');
    }
    var result = a + b;
    return result;
}
