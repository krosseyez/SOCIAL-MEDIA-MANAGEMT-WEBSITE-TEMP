// Initialize international telephone input
const phoneInput = window.intlTelInput(document.querySelector("#phoneNumber"), {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    preferredCountries: ["us", "gb", "ca", "ke"],
    separateDialCode: true,
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
    }
});

// Countdown Timer
// Set deadline to July 31, 2025, 23:59:59 Kenya time (UTC+3)
const deadline = new Date('2025-06-20T23:59:59+03:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 0) {
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
        return false;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

    return true;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Form submission handling
const form = document.getElementById('registrationForm')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Check if registration deadline has passed
    if (!updateCountdown()) {
        Toastify({
            text: "Registration deadline has passed. Registration is no longer available.",
            duration: 5000,
            gravity: "top",
            position: "right",
            className: "error",
            stopOnFocus: true,
            style: {
                background: "#000",
                borderLeft: "4px solid #e74c3c"
            }
        }).showToast();
        return;
    }
    
    // In a real application, you would fetch a backend endpoint here.
    // For this template, we'll just show a success message.
    
    Toastify({
        text: "Thank you! Your form has been submitted successfully.",
        duration: 3000,
        gravity: "top",
        position: "right",
        className: "success",
        stopOnFocus: true,
        style: {
            background: "#000",
            borderLeft: "4px solid #2ecc71"
        }
    }).showToast();
    
    // Clear form
    form.reset();
    
    setTimeout(() => {
        window.location.reload();
    }, 3000);
})