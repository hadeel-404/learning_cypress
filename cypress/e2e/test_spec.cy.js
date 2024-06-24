import TestPage from './pageObjects/testPage.cy';

describe('Test Page', () => {
  const testPage = new TestPage();

  beforeEach(() => {
    testPage.visit();
  });

  it('should display the login form', () => {
    testPage.getEmailField().should('be.visible');
    testPage.getPasswordField().should('be.visible');
    testPage.getLoginButton().should('be.visible');
  });

  it('should allow a user to log in with valid credentials', () => {
    testPage.enterEmail('your-email@example.com');
    testPage.enterPassword('your-password');
    testPage.clickLoginButton();
    cy.url().should('include', '/home');
  });

  it('should show an error message for invalid credentials', () => {
    testPage.enterEmail('wrong-email@example.com');
    testPage.enterPassword('wrong-password');
    testPage.clickLoginButton();
    testPage.getErrorBox().should('be.visible').and('contain', 'The email or phone number you’ve entered doesn’t match any account.');
  });

 
  it('should select an option from a dropdown', () => {
    testPage.selectDropdown('option1').should('have.value', 'option1');
  });

  
  it('should verify the length of elements', () => {
    cy.get('input').should('have.length', 4);
  });

  it('should check visibility of elements', () => {
    testPage.getHiddenElement().should('not.be.visible');
  });

  it('should use aliases for elements', () => {
    testPage.getEmailField().as('emailField');
    cy.get('@emailField').type('alias@example.com').should('have.value', 'alias@example.com');
  });

  it('should find elements by text', () => {
    cy.contains('Login').should('be.visible');
  });

  it('should find nested elements', () => {
    cy.get('form').find('input[name="email"]').type('nested@example.com').should('have.value', 'nested@example.com');
  });

  it('should get the nth element', () => {
    testPage.getListItem(2).should('contain', 'Item 3');
  });

  it('should get the first and last elements', () => {
    testPage.getListItem(0).should('contain', 'First Item');
    testPage.getListItem(-1).should('contain', 'Last Item');
  });

  it('should get the next and previous elements', () => {
    testPage.getListItem(2).next().should('contain', 'Item 4');
    testPage.getListItem(2).prev().should('contain', 'Item 2');
  });

  it('should get sibling elements', () => {
    cy.get('li.active').siblings().should('have.length', 4);
  });

  it('should get parent and ancestor elements', () => {
    testPage.getEmailField().parent().should('have.class', 'form-group');
    testPage.getEmailField().parents('form').should('have.length', 1);
  });

  it('should invoke a function on an element', () => {
    testPage.getEmailField().invoke('attr', 'placeholder').should('contain', 'Enter your email');
  });

});
