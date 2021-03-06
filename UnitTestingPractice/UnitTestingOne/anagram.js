//Function to check for anagrams
function isAnagram(str1, str2)
{
    return formatStr(str1) === formatStr(str2);
}

//Helper function
function formatStr(str)
{
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

//Export module
module.exports = isAnagram;