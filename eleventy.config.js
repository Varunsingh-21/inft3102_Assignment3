const fs = require('fs');
const markdownIt = require("markdown-it");
require('dotenv').config();
const { type } = require('os');

module.exports=function(eleventyConfig){
  const md = new markdownIt({
    html: true, // Preserve existing HTML
  breaks: true, // Convert newlines to <br>
  linkify: true,
  });

  // Register the markdown filter
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content); // Convert Markdown to HTML
  });


    const directoryPath='/dist';
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/webhooks");
    eleventyConfig.addPassthroughCopy("src/JS")
    eleventyConfig.on("eleventy.before", async ({ dir, runMode, outputMode }) => {
		
        fs.rm(directoryPath, { recursive: true, force: true }, (err) => {
            if (err) {
                console.error('Error deleting directory:', err);
            } else {
                console.log('Directory and its contents deleted successfully');
            }
        });


        
	});
// FETCH LIMIT CHANGED IN STRAPI
  async function fetchStrapiData() {
    try{
      const STRAPI_BEARER_1 =process.env.STRAPI_BEARER_1
      // http://localhost:1337/api/mycollections?filters[type][$eq]=lion
      const r =await fetch("https://honorable-serenity-0b100dacc0.strapiapp.com/api/mycollections?populate=image&sort=createdAt:ASC",{ method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${STRAPI_BEARER_1}`
        },})
        const data= await r.json();
       console.log(data.data);
       
       
       return data.data;
      }
      catch(err){
        console.error(err);
        return [];
      }
  }
  
  eleventyConfig.addGlobalData("strapi_data", async () => {
    const data = await fetchStrapiData(); 
    return data;

//to see a particular type

    // const uniqueTypes = [...new Set(data.map((item) => item.type))];
    // console.log("unique types",uniqueTypes);
    // const selectedCollection = data.filter(item => item.type === 'dog');
    // return selectedCollection; 
  });
  


  //for demo only
  eleventyConfig.addCollection("types", async () => {
    const data=await fetchStrapiData();
    const uniqueTypes = [...new Set(data.map((item) => item.type))];
    console.log("unique types",uniqueTypes);
    

      return uniqueTypes;
  })

// This is for demo
  eleventyConfig.addGlobalData("collect",async ()=>{
    const data=await fetchStrapiData();
      const uniqueTypes = [...new Set(data.map((item) => item.type))];
      array_of_collections=[data]
      uniqueTypes.forEach((type) => {
          array_of_collections.push(data.filter((item) => item.type === type));
      });
      return array_of_collections
  });


  eleventyConfig.addGlobalData("strapi_posts", async () =>{
    try{
      const STRAPI_BEARER_2=process.env.STRAPI_BEARER_2
      const r =await fetch("https://honorable-serenity-0b100dacc0.strapiapp.com/api/writeupss?populate=image&sort=createdAt:DESC",{ method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${STRAPI_BEARER_2}`
        },})
        console.log("POSTS");
        const data= await r.json();
        data.data = data.data.map((post) => ({
          ...post, 
          write_up: md.render(post.write_up), 
        }));
        return data.data;
      }
      catch(err){
      console.error(err);
      return [];
    }
  });

    eleventyConfig.setBrowserSyncConfig({
       files: './_site/**/*',
        callbacks: {
          ready: function(err, browserSync) {
            const content404 = fs.readFileSync("404.html");
    
            browserSync.addMiddleware("*", (req, res) => {
              res.write(content404);
              res.end();
            });
          }
        }
      });
   
    return {
        dir:{output:"dist",
        input:"src"
        },
        templateFormats: ["md", "ejs"], // Ensure EJS is in the list of supported template formats
        markdownTemplateEngine: "ejs",  // Set EJS as the template engine for Markdown
        htmlTemplateEngine: "ejs",
        dataTemplateEngine: "ejs"
    };
} 