export default (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    tripId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  return Booking;
};
