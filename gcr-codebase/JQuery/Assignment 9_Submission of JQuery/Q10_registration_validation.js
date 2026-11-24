// Q10. Registration Form Validation (jQuery)

$(document).ready(function () {
  // Emails that are already registered (used to check uniqueness)
  const registeredEmails = ["test@mail.com", "admin@mail.com", "vanshika@mail.com"];

  const emailPattern = /^[\w.+-]+@[\w-]+(\.[\w-]+)+$/;

  // Marks a field as invalid: red border (using .css()) and an error message
  function markInvalid($field, message) {
    $field.css("border", "2px solid red");
    $("#" + $field.attr("id") + "Error").text(message);
  }

  // Marks a field as valid: green border and no error message
  function markValid($field) {
    $field.css("border", "2px solid green");
    $("#" + $field.attr("id") + "Error").text("");
  }

  // Each validate function returns true when the field is valid
  function validateName() {
    const $name = $("#name");
    if ($name.val().trim() === "") {
      markInvalid($name, "Name cannot be empty.");
      return false;
    }
    markValid($name);
    return true;
  }

  function validateEmail() {
    const $email = $("#email");
    const email = $email.val().trim().toLowerCase();

    if (!emailPattern.test(email)) {
      markInvalid($email, "Enter a valid email like example@domain.com.");
      return false;
    }
    // Uniqueness check: .indexOf() returns -1 when the email is not in the list
    if (registeredEmails.indexOf(email) !== -1) {
      markInvalid($email, "This email is already registered.");
      return false;
    }
    markValid($email);
    return true;
  }

  function validatePassword() {
    const $password = $("#password");
    if ($password.val().length < 8) {
      markInvalid($password, "Password must be at least 8 characters.");
      return false;
    }
    markValid($password);
    return true;
  }

  // Validate a field again when the user leaves it (blur)
  $("#name").on("blur", validateName);
  $("#email").on("blur", validateEmail);
  $("#password").on("blur", validatePassword);

  $("#registrationForm").on("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    // Run ALL validations (do not stop at the first error) so every invalid field is highlighted
    const results = [validateName(), validateEmail(), validatePassword()];
    const allValid = results.every(function (result) {
      return result === true;
    });

    if (allValid) {
      // 4. Show the success message
      $("#successMessage").text("Registration successful! Welcome, " + $("#name").val().trim() + ".").fadeIn(300);

      // Remember this email so it cannot be used again
      registeredEmails.push($("#email").val().trim().toLowerCase());

      // Clear the form and remove the coloured borders
      this.reset();
      $("#registrationForm input").css("border", "");
    } else {
      $("#successMessage").hide();
    }
  });
});