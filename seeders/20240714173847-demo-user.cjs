// seeders/XXXXXXXXXXXXXX-demo-user.js
import bcrypt from 'bcrypt';

export const up = async (queryInterface) => {
  const hashedPassword = await bcrypt.hash('password123', 10); // Hash the password
  await queryInterface.bulkInsert('Users', [{
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    password: hashedPassword, // Add the hashed password
    created_at: new Date(),
    updated_at: new Date()
  }], {});
};

export const down = async (queryInterface) => {
  await queryInterface.bulkDelete('Users', null, {});
};
