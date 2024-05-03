$(function() {
    updateOrdersDisplay()
});

let orders = []; // Array to hold the order information

    document.addEventListener('DOMContentLoaded', function() {
    getTickets();
});
function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}
function isValidPhoneNumber(phone) {
    const pattern = /^(\d{8}|\d{4}[-\s]?\d{4})$/;
    return pattern.test(phone);
}
function isValidfirstName(firstName) {
    const pattern = /^[a-zA-Z\s-]+$/;
    return pattern.test(firstName);
}
function isValidlastName(lastName) {
    const pattern = /^[a-zA-Z\s-]+$/;
    return pattern.test(lastName);
}

function updateOrdersDisplay() {
    const ordersContainer = document.getElementById('ordersContainer');
    ordersContainer.innerHTML = ''; // Clear the current display

    const list = document.createElement('ul');
    $.get('/get', function (res) {

        if (res.length === 0) {
            ordersContainer.innerHTML = '<p>No orders saved.</p>';
            return;
        }

        for (let i = 0; i < res.length; i++) {
            const order = res[i]
            const item = document.createElement('li');
            item.textContent = `Movie: ${order.movie}, Tickets: ${order.amount}, Name: ${order.firstName} ${order.lastName}, Email: ${order.email}`;
            list.appendChild(item);
        }
    });

    ordersContainer.appendChild(list);
}
function displayError(inputId, message) {
    const errorSpanId = inputId + '-error';
    const errorSpan = document.getElementById(errorSpanId);
    errorSpan.textContent = message;
}

function clearError(inputId) {
    displayError(inputId, '');
}
function buyTickets() {
    let hasError = false;
    const movie = document.getElementById('movie').value;
    const amount = document.getElementById('amount').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (!isValidEmail(email)) {
        displayError('email', 'Please enter a valid email address.');
        hasError = true;
    } else {
        clearError('email');
    }

    if (!isValidPhoneNumber(phone)) {
        displayError('phone', 'Please enter a valid phone number.');
        hasError = true;
    } else {
        clearError('phone');
    }
    if (!isValidfirstName(firstName)) {
        displayError('firstName', 'Please enter a valid first name.');
        hasError = true;
    } else {
        clearError('firstName');
    }

    if (!isValidlastName(lastName)) {
        displayError('lastName', 'Please enter a valid last name.');
        hasError = true;
    } else {
        clearError('lastName');
    }

    if (!hasError) {
        const order = { movie, amount, firstName, lastName, phone, email };
        updateOrdersDisplay();
        $.post('/save', order);
        alert('Ticket(s) purchased successfully!');
    }


}
function getTickets() {
    $.get('/get', function() {
        orders = '';
        updateOrdersDisplay();
    })
}

function clearOrders() {
    $.post('/delete',function () {
        orders = [];
        updateOrdersDisplay();
        alert('Saved orders cleared!');
    });
}



