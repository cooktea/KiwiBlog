Mock.setup({
    timeout:"100-200"
})
// 模拟登陆，获取token
Mock.mock('http://test.com/login',{
    "result":"success",
    "token":"@word(10)"
})
// 获取统计信息
Mock.mock('http://test.com/getStatistic',{
    "dayInfo|7":[{
        "date":"@date(MM-dd)",
        "count|0-1000":100
    }],
    "monthInfo|12":[{
        "date":"@date(yyyy-MM)",
        "count|0-30000":100
    }],
    "yearInfo|1-6":[{
        "date":"@date(yyyy)",
        "count|0-365000":100
    }]
})
// 获取文章的分类
Mock.mock('http://text.com/getArticleTypes',{
    "types|4-10":[{
        "name":"@word()"
    }]
})
// 获取网站的统计信息
Mock.mock('http://test.com/getStatisticsInfo',{
        "articleCount|0-200":100,
        "dayVisitCount|0-200":100,
        "monthVisitCount|30-6000":100
    
})
// 获取最近动态
Mock.mock('http://test.com/getNews', {
    "news|2":[{
        "date":"@date(yyyy-MM-dd)",
        "content":"@sentence(40)"
    }]
});
// 获取文章
Mock.mock(/test.com\/getArticles/,function(option){
    console.log(option)
    return Mock.mock({
        "articles|0-12":[{
            "date":"@date(yyyy-MM-dd)",
            "title":"@title",
            "content":"@sentence",
            "image":"@image(200x400)",
            "src":Mock.Random.url("http"),
            "tags|1-3":[{
                "type":"@word",
                "src":"@url(http)"
            }]
        }]
    })
})