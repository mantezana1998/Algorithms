const posts = [
    { id: 1, 
     title: "Antezana House", 
     description: "Peruvians live here" },
    { id: 2, 
     title: "Palomino House", 
     description: "Mexicans live here" },
    { id: 3, 
     title: "Campbell House", 
     description: "Americans live here" },
  ];

//map method to print out a new array

let postId = posts.map((post) => post.id)

let postTitle = posts.map((post) => post.title)

let postDescription = posts.map((post) => post.description)

let postEverything = posts.map((post) => ({
    sumId: post.id,
    sumTitle: post.title,
    sumDescription: post.description
}))

console.log(postEverything)