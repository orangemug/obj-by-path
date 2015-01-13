var assert    = require("assert");
var objByPath = require("../");

var TEST_OBJ = {
  foo: {
    bar: {
      notme: false
    },
    baz: {
      target: "hello"
    }
  }
}

describe("obj-by-key", function() {

  it("should succeed with a valid key", function() {
    var res = objByPath(TEST_OBJ, ["foo","baz","target"]);
    assert.equal(res, "hello");
  });

  it("should fail with a invalid path", function() {
    var thrown;
    try {
      objByPath(TEST_OBJ, ["foo","baz","target","wooo"]);
    } catch(err) {
      thrown = true;
    }
    assert(thrown);
  });

});
