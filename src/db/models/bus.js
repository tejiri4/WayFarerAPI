export default (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    numberPlate: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
  }, {});
  return Bus;
};
