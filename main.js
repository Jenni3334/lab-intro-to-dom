//Add a class of "featured" to the first `section` element on the page.
const firstSection =document.querySelector("section");
firstSection.classList.add("featured");


//Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
const article = document.createElement("article");
// article.innerHTML = '
//   <img
//     src="./images/paul-gilmore-unsplash.jpg"
//     alt="Image of a mountain in front of a lake."
//   />
//   <h3>Stop Planning</h3>
//   <p>
//     You -- yes you! You're an over-planner, I can tell. It's time to stop
//     planning so much and instead focusing on relaxing. Taking a break at all is
//     so stressful these days; why add to the stress by overworking yourself?
//   </p>
//   <aside>
//     <p>
//       <span><strong>Read Time:</strong> 4 Minutes</span
//       ><a href="#">Read more...</a>
//     </p>
//   </aside>';

//   - [ ] Move the first article from inside the `section.posts` element to become the second article 
// declare the first and second article 
const firstArticle = sectionPosts.querySelectorAll('first article');
const secondArticle = sectionPosts.querySelector('second artilce');

sectionPosts.insertBefore(secondArticle, firstArticle);

// and move the second article so that it is the first article.
sectionPosts.insertBefore(secondArticle, section.firstArticle);

// [ ] Remove the "All Posts" link from the header.
const allPosts = document.querySelector('header ul');
const allPostsLink = document.querySelector('header li');
allPosts.removeChild(allPostsLink)
//  ] Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first 
const firstReadMe = document.querySelector('aside p');
const firstSpan = document.querySelector('span');
firstReadMe.replaceChild(firstSpan)

// ] Remove the last post from the page, titled "Stop Planning".
const lastPost =  sectionPosts.querySelector(' article: last post');
lastPosts.remove();

//[ ] Remove all titles from all non-featured posts.
const nonFeaturedArticles = sectionPosts.querySelector('article: not(.featured)');
nonFeaturedArticles.array.forEach(element => {
    const title = article. querySelector('h3');
    title.remove();
});