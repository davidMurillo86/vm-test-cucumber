Feature: Employees

    Scenario: Create Employee
    Given I go to 'https://vacations-management.herokuapp.com/users/sign_in' page
    When I log in to the page
    And I click create new employee
    When I create new employee
    Then Validate created user
        | firstName | lastName | identification | leadName             | startDate  |
        | James     |  Smith   | 1234567890     | David Murillo Gamboa | 21-01-2015 | 
    And log the user index in table

    Scenario: Delete Employee
    Given I go to 'https://vacations-management.herokuapp.com/users/sign_in' page
    When I log in to the page
    And I search for the employee with leadName 'David Murillo Gamboa'
    Then I delete the user
    And I Validate user does not exist
        


    