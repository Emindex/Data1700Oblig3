
let orders = []; // Array to hold the order information

function isValidEmail(email) {
    // Simple email validation (for more complex validation, consider using a regex pattern)
    return email.includes('@') && email.includes('.');
}

function isValidPhoneNumber(phone) {
    // Check if the phone number is exactly 8 digits
    return /^\d{8}$/.test(phone);
}

function updateOrdersDisplay() {
    const ordersContainer = document.getElementById('ordersContainer');
    ordersContainer.innerHTML = ''; // Clear the current display

    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p>No orders saved.</p>';
        return;
    }

    const list = document.createElement('ul');
    orders.forEach(order => {
        const item = document.createElement('li');
        item.textContent = `Movie: ${order.movie}, Tickets: ${order.amount}, Name: ${order.firstName} ${order.lastName}, Phone: ${order.phone}, Email: ${order.email}`;
        list.appendChild(item);
    });
    ordersContainer.appendChild(list);
}

function buyTickets() {
    const movie = document.getElementById('movie').value;
    const amount = document.getElementById('amount').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!isValidPhoneNumber(phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    const order = {movie, amount, firstName, lastName, phone, email};
    orders.push(order);
    updateOrdersDisplay();
    $.post('/save', order
    )
    alert('Ticket(s) purchased successfully!');
}

function clearOrders() {
    orders = [];
    updateOrdersDisplay();
    $.post('/delete')
    alert('Saved orders cleared!');
}



updateOrdersDisplay();
