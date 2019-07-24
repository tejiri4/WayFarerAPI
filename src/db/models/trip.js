export default (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    busId: DataTypes.INTEGER,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    tripDate: DataTypes.DATE,
    fare: DataTypes.FLOAT,
    status: DataTypes.FLOAT,
  }, {});
  return Trip;
};
