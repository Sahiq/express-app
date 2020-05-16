

exports.slugify = (slugString) => {

    // removing Trailing and leading space
    slugString = slugString.trim().toLowerCase()
    slugString = slugString.replace(/ /g, '-')

    return slugString;

}