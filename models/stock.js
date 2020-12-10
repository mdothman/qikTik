module.exports = function(sequelize, DataTypes){
    const Stock = sequelize.define("stock",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    });
    Stock.associate = function (models){
        Stock.belongsTo(models.ticker, {
            foreignKey:{
                allowNull:false
            }
        })
    }
    return Stock
}