# SauceDemo - Login Test Cases

## Application

SauceDemo

## Feature

Login

## Test Environment

- Browser: Google Chrome
- Automation Tool: Cypress
- Test Type: End-to-End (E2E)

---

## TC-001 - Login with valid credentials

**Type:** Positive

**Priority:** High

### Preconditions

- User is on the SauceDemo login page.
- A valid username and password are available.

### Test Data

- Username: `standard_user`
- Password: `secret_sauce`

### Steps

1. Access the SauceDemo login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click the Login button.

### Expected Result

The user should be successfully logged in and redirected to the Products page.

### Validations

- URL should contain `/inventory.html`.
- "Products" should be visible.

### Status

PASS

---

## TC-002 - Login with invalid password

**Type:** Negative

**Priority:** High

### Preconditions

- User is on the SauceDemo login page.
- A valid username is available.

### Test Data

- Username: `standard_user`
- Password: `invalid_password`

### Steps

1. Access the SauceDemo login page.
2. Enter a valid username.
3. Enter an invalid password.
4. Click the Login button.

### Expected Result

The login should not be completed and an error message should be displayed.

### Validations

- The error message should be visible.
- The error message should indicate that the username and password are not valid.

### Status

PASS