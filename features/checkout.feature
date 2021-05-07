@buy_products
Feature: Buy products
    In order to buy products
    As a customer
    I want to be able to add several products in the cart

  Scenario: Insert a product in the cart
    Given I search by the product Faded Short Sleeve
    And I add the product in the cart
    When I go to the Cart page
    Then I should see the correct product information
