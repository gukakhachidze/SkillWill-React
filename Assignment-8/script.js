/* 
● დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს არგუმენტად: 
● ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული ციფრის ხარისხს მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5) */

function expo(num, degree, callback) {
  if (degree === 1) {
    return callback(num);
  }

  return callback(num * expo(num, degree - 1, callback));
}

expo(5, 3, (result) => {
  console.log(result);
});

// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ
// ყველაფერი კარგად არის, გამოიძახოს
// resolve კოპირებული ობიექტით

function deepCopyAsync(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== 'object' || obj === null) {
      reject('Error: argument is not an object');
      return;
    }

    const copied = JSON.parse(JSON.stringify(obj));
    resolve(copied);
  });
}

deepCopyAsync({ name: 'Guka', info: { age: 30 } })
  .then((result) => {
    console.log('Copied:', result);
  })
  .catch((error) => {
    console.log(error);
  });

// ----------------------------------
const postsContainer = document.getElementById('posts');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.style.border = '1px solid #ccc';
      postDiv.style.margin = '10px';
      postDiv.style.padding = '10px';
      postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch((error) => {
    console.error('Error fetching posts:', error);
  });
