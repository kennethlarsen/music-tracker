export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
  function formEncodedToJson(encoded) {
    var result = {};
    encoded.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

  this.post('/token', function(db, request) {
    var params = formEncodedToJson(request.requestBody);
    if(params.username === "test@email.com" && params.password === "secret") {
      return {
        "access_token":"PA$$WORD",
        "token_type":"bearer"
      };
    }
  });

  this.get('/artists/:id');
  this.get('/artists');

  this.get('/albums');
  this.get('/albums/:id');

  this.get('/users');
  this.get('/users/:id');
  this.get('/users/:id/collections');
}
