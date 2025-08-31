document.getElementById("regForm").addEventListener("submit", function (e) {
    let valid = true;
    let msg = "";

    // Name
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        valid = false;
        msg += "Name must be at least 3 characters long.\n";
    }

    // Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        msg += "Enter a valid email.\n";
    }

    // Age
    const age = document.getElementById("age").value;
    if (age < 18 || age > 60) {
        valid = false;
        msg += "Age must be between 18 and 60.\n";
    }

    // Checkbox (at least one hobby)
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    if (hobbies.length === 0) {
        valid = false;
        msg += "Select at least one hobby.\n";
    }

    // Password
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).{6,}$/;
    if (!passPattern.test(password)) {
        valid = false;
        msg += "Password must be 6+ chars, include uppercase, lowercase, number, and special char.\n";
    }
    if (password !== confirmPassword) {
        valid = false;
        msg += "Passwords do not match.\n";
    }

    // File
    const file = document.getElementById("file").files[0];
    if (file) {
        const allowed = ["image/jpeg", "image/png", "application/pdf"];
        if (!allowed.includes(file.type)) {
            valid = false;
            msg += "File must be JPG, PNG, or PDF.\n";
        }
        if (file.size > 2 * 1024 * 1024) {
            valid = false;
            msg += "File size must be less than 2MB.\n";
        }
    }

    if (!valid) {
        e.preventDefault();
        alert(msg);
    }
});
