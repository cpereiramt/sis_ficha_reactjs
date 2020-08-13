

function fetchPosts() {
    // The API where we're fetching data from
    fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json`)
      // We get a response and receive the data in JSON format...
      .then(response => response.json())
      // ...then we update the state of our application
      .then(
        data =>   {
            console.log(data);
             return data;
         }
      )
      // If we catch errors instead of a response, let's update the app
      .catch(error => { error });
  }

  export default fetchPosts;