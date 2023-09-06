
    document.addEventListener('DOMContentLoaded', function() {
        const emailForm = document.querySelector('.email-signup form');
        const emailInput = emailForm.querySelector('input');
        
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = emailInput.value;
            
            // Store the email in localStorage (you may want to use a server for this in a production environment)
            localStorage.setItem('blog_notification_email', email);
            
            // Clear the input field and display a thank you message (customize this as needed)
            emailInput.value = '';
            emailForm.innerHTML = '<p>Thank you! We will notify you when the blog is live.</p>';
        });
    });

