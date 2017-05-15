After integration testing is performed:
1) Repair bugs and errors that occur
2) Test repaired code
3) Test untouched pieces of code again
4) Repeat

-------------------

Tests that we be re-run during regression testing:

1. All tests under the /tests/unit & /tests/integration directories
    ...Ember CLI (command line interface) allows to spin up a test server that runs these tests. The image following shows an example of this.
2. Any assersions made in the serializers will be verified to ensure that any data getting passed from the API server is properly formatted.

![ember cli testing](https://github.com/chancebrilz/reservedu/raw/master/tests/testing.png)
