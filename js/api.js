/**
 * 获取用户
 * @param params
 */
function getAllUsers(params) { //面签页面--保存提交
    return service({
        url: '/api/getUser',
        method: 'post',
        data: JSON.stringify(params)
    })
}

/**
 * 获取中奖配置
 * @param params
 */
function getAllTime(params) {
    return service({
        url: '/api/getConfig',
        method: 'post',
        data: JSON.stringify(params)
    })
}

/**
 * 保存中奖信息
 */
function saveAwardUsers(params) {
    console.log(params)
    // return service({
    //     url: '/api/save',
    //     method: 'post',
    //     data: JSON.stringify(params)
    // })
}