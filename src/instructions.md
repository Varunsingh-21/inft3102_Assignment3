---
layout: layouts/mylayout.ejs
---
<div class="container mt-2">

# Unit 2 Practical Requirements
---

### Helpful Links

TBD

### General Information

-   Submission
    -   Delete the `node_modules` folder.
    -   Delete the `dist` folder.
    -   If you have a `.env` file, delete it too.
        -   Remove your API key if it's been hard coded anywhere.
    -   Zip up everything else and put the resulting file in the dropbox.
-   Rubric
    -   `/5` Functionality
    -   `/5` Creativity and Design
    -   `/5` Documentation
    -   `/5` Understanding of Project Requirements
    -   `-5 (25%)` Late
    -   `-20 (100%)` More than 72 hours late


### Requirements

You will modify your existing project demonstrating the use of a headless CMS in the context of modern web development practices.

-   API Interaction - Demonstrate fetching content from a Headless CMS via RESTful APIs.

-   Content Modeling - Structure content types and fields within the Headless CMS to fit the needs of the SSG.

-   Data Fetching - Implement fetching strategies for data, build-time, depending on the project's needs.

-   Template Design - Leverage modern templating languages to render dynamic content from the Headless CMS.

-   Pagination & Filtering - Implement dynamic features like pagination, filtering, and search functionalities that leverage Headless CMS content.

Further you will provide documentation that indicates all key aspects of the project and guidance on how to maintain. If the scope of the project has significantly shifted since Lab 2, this is not necessarily a problem, but indicate how and why.

### Content

You will have two different sections of your site.

#### Blog

Create a blog section. 

-   If there isn't one already, create a schema for a blog post.
    -   It should have at minimum, `title` and `content` or something along those lines.
    -   You may add extra fields if you like.

-   Put your lab writeups in the CMS.
    -   Your writeup should have an introduction explaining what you're writing about and why.
        -   (You may have to go back to your Lab 1 and add this paragraph in)
    -   Have them render with permalinks in your site.
    -   When you go to add your screenshots, you may find you need extra fields in your schema.

-   Create two or three other posts about something you're interested in.
    -   Preferably, something technology-based that shows you're enthusiastic about your future career.

-   For pagination, this should have forward and back buttons (based on date).

-   Please remove any instructions files that are in your project after they have been moved to the CMS.

-   Remember, while you are writing this for me to grade, hopefully you're going to put enough effort into it where you'd be happy to show potential employers.

#### Custom Schema

In assignment 1, we used a `.json` file to define some data that we used to display on the page.  
Now we will put that data into our CMS.

-   This should generally be the same idea as your existing content.

-   If you copied my animals example, please don't.

-   You should have a field for an image to put on the page.
    -   You'll have to figure out how/where to host this image.

-   Figure out a way to filter specific pieces of content.
    -   In 11ty, you'll probably use collections
    -   ie, in my example, what if I only want to see a list of dogs?

</div>
