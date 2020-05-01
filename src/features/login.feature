Feature: Login

   Scenario: Login to vacation management
   Given I go to 'https://vacations-management.herokuapp.com/users/sign_in' page
   When I log in to the page
   #Then I should see the home page