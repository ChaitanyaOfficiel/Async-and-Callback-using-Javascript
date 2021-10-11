const posts = [
  {title:'post one', body:'This is post one'},
   {title:'post two', body:'This is post two'}
];

function getPosts(){
  setTimeout(() => {
    let output = '';
    posts.forEach((post,index) => {
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);

        const error = false;

        if(!error){
          resolve();
        }else{
          reject('Error : something went wrong');
        }
   
  }, 2000);
    });
}


// Async / Await 
// async function init() {
//   await createPost( {title:'post two', body:'This is post two'});

//   getPosts();
// }

// init();

// Async / Await / fetch 
async function fetchUsers(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();
  console.log(data);
}




// createPost({title:'post three', body:'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// creating promise.all
// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resovle, reject) => 
//   setTimeout(resolve, 2000, 'GOODBYE')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4])
// .then(values => console.log(values));

