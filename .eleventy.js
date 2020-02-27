module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("pages/admin/*.yml");

    return {
        dir: {
            input: "pages",
            includes: "../_includes"
        }
    }
}