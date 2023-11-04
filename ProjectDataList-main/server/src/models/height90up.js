module.exports = (sequelize, DataTypes) => {
    const height90up = sequelize.define('height90up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    }) 
    return height90up
}