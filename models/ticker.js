module.exports = function (sequelize, DataTypes) {
    const Ticker = sequelize.define("ticker", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
    }, {
        tableName: "tickers",
        timestamps: false,
    },{});
    Ticker.associate = function(models){
    Ticker.hasMany(models.stock,{
        onDelete:"cascade"
    })
    }
    return Ticker;
};



