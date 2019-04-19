export default function(server) {
  let artist = server.create('artist');

  server.create('album', 4, { artist });
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
