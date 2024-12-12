document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const spinner = document.getElementById('spinner');
    const responseMessage = document.getElementById('successMessage');
    const form = document.getElementById('contactForm');

    spinner.style.display = 'block';
    form.style.display = 'none';

    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('/.netlify/functions/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            alert('There was an error submitting the form. Please try again.');
        }
        
    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        spinner.style.display = 'block';
        setTimeout(() => {
            spinner.style.display = 'none';
            responseMessage.style.display = 'block';
        }, 2000);
    }

    
});





