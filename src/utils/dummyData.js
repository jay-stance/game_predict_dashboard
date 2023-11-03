const { faker } = require("@faker-js/faker");

export const users = [];

for (let i = 0; i < 100; i++) {
    const fullName = faker.name.findName();
    const createdAt = faker.date.past().toLocaleDateString();
    const email = faker.internet.email();
    const balance = Math.floor(Math.random() * 100000) + 10000;
    const status = Math.random() > 0.5;

    const user = {
        name: fullName,
        createdAt,
        email,
        balance,
        status,
    };

    users.push(user);
}