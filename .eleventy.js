module.exports = function (eleventyConfig) {

    eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false, // warning: don’t do this!
      });
      
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addFilter('log', value => {
        console.log(value)
    })
    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}