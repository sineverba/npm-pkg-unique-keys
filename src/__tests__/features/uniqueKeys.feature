Feature: Adds a unique key fo an object in an array
  It adds  a unique key fo an object in an array

  Scenario: Start from {data: "foo"} and returns {uniqueKey: "1234-5678-90", data: "foo"}
    Given {data: "foo"}
    When run function
    Then the final object is {uniqueKey: "1234-5678-90", data: "foo"}