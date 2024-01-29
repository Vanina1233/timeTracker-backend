// daily schedule model

module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      arrival_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      departure_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      break_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      break_return_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  //   schedules should have a foreign key with reference user since it is a 1 to many relation
  Schedule.associate = (models) => {
    Schedule.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Schedule;
};
