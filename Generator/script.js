function* gitHubDetails(orgName) {
    var baseUrl = "https://jsonplaceholder.typicode.com/posts/";
    var url = baseUrl + orgName;
  
    var reposUrl = yield wrapperOnFetch(url);
    // console.log(reposUrl);
    // var repoFullName = yield wrapperOnFetch(reposUrl);
//   console.log(repoFullName);
    yield wrapperOnFetch(`https://jsonplaceholder.typicode.com/users/${reposUrl}`);
    
  }
  
  function wrapperOnFetch(url) {
    var headers = new Headers();
    //  headers.append('Accept', '');
    var request = new Request(url, {
    //   headers: headers
    });
  
    return fetch(request).then(function(res) {
      return res.json();
    });
  }
 var ran = Math.floor(Math.random() * 101);
//  console.log(ran);
  var generator = gitHubDetails(ran);
  
  generator.next().value.then(function(userData) {
  
    console.log(userData);
  
    return generator.next(userData.userId).value.then(function(reposData) {
     return reposData;
    });
  }).then(function(reposData) {
    console.log(reposData);
  });