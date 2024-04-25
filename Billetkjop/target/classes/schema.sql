CREATE TABLE ticket(
    id INT AUTO_INCREMENT,
    amount INT NOT NULL,
    movie VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)

);