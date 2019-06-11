const Mock = require("mockjs");

module.exports=Mock.mock({
    "list|66": [
        {
        title: "@ctitle",
        img:Mock.Random.image('200x100', '#ffcc33', '#FFF', 'png', 'chen'),
        "id|+1":1
        }
    ]
});