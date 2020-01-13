Mock.mock(
    'http://127.0.0.1/api/getUser',
    {
        'Users|90-160':[{
        'id|+1': 1,
        'index|+1': 0,
        }],

        }
    );
Mock.mock(
    'http://127.0.0.1/api/getConfig', {
        award:[
            {name:'iphonex',num:1,title:'一等奖'},
            {name:'iphone11',num:3,title:'二等奖'},
            {name:'iphone9',num:10,title:'三等奖'},
            {name:'iphone8',num:20,title:'四等奖'}
            ]//奖品&&人数
    });

