class TestPage {
    visit() {
      cy.visit('http://127.0.0.1:8080/myWeb.html'); // ضع المسار الصحيح لصفحة الاختبار
    }
  
    getEmailField() {
      return cy.get('input[name="email"]');
    }
  
    getPasswordField() {
      return cy.get('input[name="pass"]');
    }
  
    getLoginButton() {
      return cy.get('button[name="login"]');
    }
  
    getErrorBox() {
      return cy.get('#error_box');
    }
  
    getFooter() {
      return cy.get('#footer');
    }
  
    getHiddenElement() {
      return cy.get('#hidden-element');
    }
  
    getCheckbox() {
      return cy.get('input[type="checkbox"]');
    }
  
    getRadioButton() {
      return cy.get('input[type="radio"]');
    }
  
    getDropdown() {
      return cy.get('select');
    }
  
    getListItem(index) {
      return cy.get('li').eq(index);
    }
  
    enterEmail(email) {
      this.getEmailField().type(email);
    }
  
    enterPassword(password) {
      this.getPasswordField().type(password, { log: false });
    }
  
    clickLoginButton() {
      this.getLoginButton().click();
    }
  
    clearEmail() {
      this.getEmailField().clear();
    }
  
    clearPassword() {
      this.getPasswordField().clear();
    }
  
    checkCheckbox() {
      this.getCheckbox().check();
    }
  
    uncheckCheckbox() {
      this.getCheckbox().uncheck();
    }
  
    selectDropdown(option) {
      this.getDropdown().select(option);
    }
  
    triggerChangeEvent() {
      this.getEmailField().trigger('change');
    }
  
    scrollToFooter() {
      this.getFooter().scrollIntoView();
    }
  }
  
  export default TestPage;
  
