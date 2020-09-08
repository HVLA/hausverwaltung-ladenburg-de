module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy({"_assets/fonts":"assets"});
    eleventyConfig.addPassthroughCopy({"_assets/images":"assets"});
    eleventyConfig.addPassthroughCopy("pages/admin/*.yml");

    return {
        dir: {
            input: "pages",
            includes: "../_includes"
        }
    }
}