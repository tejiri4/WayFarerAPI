
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Buses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    numberPlate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: Sequelize.STRING,
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      type: Sequelize.STRING,
    },
    capacity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Buses'),
};
