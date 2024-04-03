// Events
// Mouse events
// click

fetch("http://localhost:3000/posts")
.then((data)=> data.json() )
.then((posts)=>{

  console.log(posts);

  let cardsContainer = document.getElementById("cardsContainer");

  for(post of posts){
    cardsContainer.innerHTML += `        
    <a href="#" class="block mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img src="./images/blog1.avif" class="w-full" alt="loading..." />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${post.title}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </a>`
    // post.title
  }
  // 

  // displayData(data)

})



// [
//   {
//       "id": "1",
//       "title": "a title",
//       "views": 20
//   },
//   {
//       "id": "2",
//       "title": "another title",
//       "views": 200
//   }
// ]