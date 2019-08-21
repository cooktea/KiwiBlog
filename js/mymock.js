Mock.setup({
    timeout:100-400
})

Mock.mock('http://test.com/getNews', {
    "news|2":[{
        "date":"@date(yyyy-MM-dd)",
        "content":"@sentence"
    }]
});
Mock.mock('http://test.com/getArticles',{
    "articles|10":[{
        "date":"@date(yyyy-MM-dd)",
        "title":"@title",
        "content":"@sentence",
        "image":"@image",
        "src":Mock.Random.url("http"),
        "tags|1-3":[{
            "type":"@word",
            "src":"@url(http)"
        }]
    }]
})