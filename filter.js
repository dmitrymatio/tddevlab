function filter(inputArr, searchTerm) {
    if (!searchTerm) throw Error('Search term cant be empty');
    return inputArr.filter(word => {
        return word.url.toLowerCase().includes(searchTerm.toLowerCase())
    });
}

module.exports = filter