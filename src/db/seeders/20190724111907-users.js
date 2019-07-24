export default {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'demo@demo.com',
    password: 'password',
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
