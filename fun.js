function isAnagramInArray(phrase, arr) {
    // Function to sort characters in a word and return the sorted word
    function sortWord(word) {
        return word.toLowerCase().split('').sort().join('');
    }

    const phraseSorted = sortWord(phrase);

    // Filter the array to find anagrams matching the phrase
    const matchingAnagrams = arr.filter((anagram) => {
        return sortWord(anagram) === phraseSorted;
    });

    return matchingAnagrams;
}

const anagrams = [
    "oz bilal tochberer",
    "it's razorbill beachcomber",
    "och robe tilblazer",
    "bib chorizo cellarmaster",
    "thor bble carizole",
    "zll borcht aberoie",
    "brzl orche atobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
];

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
