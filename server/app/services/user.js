var marklogic = require("../marklogic/utils")
var db = marklogic.connection()
var q = marklogic.query();

// assigns the collection for this service
// note: collection could be many
var COLLECTION = ['users']

exports.get = function() {
  console.log("eeee");
  var x =  require("../marklogic/utils").q();

  return db.documents.query(
    x.where(
      x.byExample(
        {
          gender: "male",
          age: { $gt: 25 },
          tags: ["ex"],
          $filtered: true
        }   
      )
    )
  );

}

exports.find = function(uri) {
  return db.documents.query(uri);
}

exports.create = function(document) {
  document.collections = COLLECTION;
  return db.documents.write(document);
}

exports.update = function(document) {
  document.collections = COLLECTION;
  return db.documents.patch(document);
}

exports.update = function(document) {
  document.collections = COLLECTION;
  return db.documents.patch(document);
}

exports.remove = function(uri) {
  document.collections = COLLECTION;
  return db.documents.remove({uri: uri});
}

