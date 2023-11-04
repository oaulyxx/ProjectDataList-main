module.exports = (sequelize, DataTypes) => {
    const height155up = sequelize.define('height155up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    })
    return height155up
}