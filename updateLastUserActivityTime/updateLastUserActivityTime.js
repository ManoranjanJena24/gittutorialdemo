const posts = [{ title: 'POST1' }];
let lastActivityTime = null;

// Do not touch this function
function create2ndPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST2' });
            resolve();
        }, 3000);
    });
}

// Do not touch this function
function create3rPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve();
        }, 2000);
    });
}

// Do not touch this function
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

// New function to update last user activity time
function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date().toLocaleTimeString();
            console.log("Last activity time updated:", lastActivityTime);
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Using Promise.all to handle concurrent promises
Promise.all([create2ndPost(), updateLastUserActivityTime()])
    .then(() => {
        console.log("All posts and last activity time:", { posts, lastActivityTime });
        return Promise.all([create3rPost(), updateLastUserActivityTime()]);
    })
    .then(() => {
        console.log("All posts and last activity time:", { posts, lastActivityTime });
        return deletePost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost.title);
        console.log("Remaining Posts:", posts);
    })
    .catch((msg) => console.log(msg));