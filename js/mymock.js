Mock.setup({
    timeout:"500-1000"
})

Mock.mock('http://text.com/getArticleTypes',{
    "types|4-10":[{
        "name":"@word()"
    }]
})

Mock.mock('http://test.com/getNews', {
    "news|2":[{
        "date":"@date(yyyy-MM-dd)",
        "content":"@sentence(40)"
    }]
});
// Mock.mock(/test.com\/getArticles/,{
//     "articles|12":[{
//         "date":"@date(yyyy-MM-dd)",
//         "title":"@title",
//         "content":"@sentence",
//         "image":"@image(200x400)",
//         "src":Mock.Random.url("http"),
//         "tags|1-3":[{
//             "type":"@word",
//             "src":"@url(http)"
//         }]
//     }]
// })

Mock.mock(/test.com\/getArticles/,function(option){
    console.log(option)
    return Mock.mock({
        "articles|12":[{
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