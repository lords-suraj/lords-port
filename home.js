document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("Button");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("contactForm").onsubmit = function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;

        var fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

        // Telegram API URL - Remember to replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID'
        var apiUrl = `https://api.telegram.org/bot7007762875:AAEiRXNyxdluXevtqwxU99-oSv2snZLf1p4/sendMessage?chat_id=1649275157&text=${encodeURIComponent(fullMessage)}`;

        fetch(apiUrl, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                alert('We will revert you as soon as possible…!.Thank you for contacting us! Have a great day'); // Simple alert; customize as needed.
                modal.style.display = "none"; // Close the modal on success
                document.getElementById("contactForm").reset(); // Reset form fields
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send message.'); // Error alert
            });
    };
});
