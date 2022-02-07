------Landing Page-------

1.  Header
2.  Log in/ Sign up buttons

-----Login Form-----

1.  Username / Password inputs
2.  Log in btn
3.  reset password
4.  New User ? link to sign up form
5.  Hide / Show password?

### ------Sign Up form Logic-------

###

### --App Requirements --

### -Full Name input must not be blank.

### -Email inout must not be blank, must be a valid Email(use HTML email validation?)

### -Password input must not be blank, must be 8 characters

### -Confirm Password input must match password exactly

### -DOB must contain valid date(external library to do this??)

    --Create a max character length for the date inputs, so that month can only be 2 digits, year 4 digits, etc...

### -Credit Card input must contain valid card number

### -CVC must contain 3 digit number

###

### -Submit button checks if all data entered is valid

### -Displays error message for individual inputs with invalid data

### -Success message if all data is valid

###

###


///////// Sunday Feb 6 2022====
1.  Reset Button
    -clears all fields

2.  Error text
    -make much smaller/ not break layout

3.  Make sure all fields have appropriate error messages.

4.  Functions/Hooks
    -Export to their own file???



***********************************************************************************************
Sign Up Form Error Message tests...

Does Error message appear when field is blank?

<!-- 1. Full Name -->
<!-- 2. Email -->
3. Password *** yes, but displays incorrect password msg, not blank field msg.
4. Re-enter Password *** yes, but just the red error border
5. MM *** yes, but just the red error border
6. DD *** yes, but just the red error border
7. YYYY *** yes, but just the red error border
8. Card Number *** yes, but just the red error border
9. Card cvc *** yes, but just the red error border

Does Error message appear when field is not complete (too short, number/text instead of number/text)?

1. Full Name
2. Email
3. Password
4. Re-enter Password
5. MM
6. DD
7. YYYY
8. Card Number
9. Card cvc
Does Error message appear when field is blank?

1. Full Name
2. Email
3. Password
4. Re-enter Password
5. MM
6. DD
7. YYYY
8. Card Number
9. Card cvc

Does Error message appear when Email is invalid?

2. Email

Does Error message appear when passwords do not match?

3. Password
4. Re-enter Password

