const url = require('url');
const util = require("./util");
const Mock = require("mockjs")
module.exports = (req, res) => {
    //这里写端口逻辑
    let filePath = url.parse(req.url).pathname;

    switch (filePath) {
        case "/api/list":
            util.getData(req, (data) => {
                let {page,limit}=data;
                let images = Mock.Random.image("200x200", "#f00", "chen");
                let mockData = Mock.mock({
                    [`list|${limit}`]: [
                        {
                            title: '@ctitle',
                            'id|+1': (page - 1) * limit,
                            img: images
                        }
                    ]
                });
                res.end(JSON.stringify(mockData))
            })
            
            break;
    }
}