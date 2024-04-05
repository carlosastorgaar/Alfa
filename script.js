function showInfo() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var fullName = firstName + " " + lastName;
        
        
        
        document.getElementById("result").innerText =` El nombre completo es: ${fullName} `
    }

function toggleMenu() {
        var navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
    }

