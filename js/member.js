var member=[
{"phone":"No.1","name":"范闲"},
{"phone":"No.2","name":"张庆"},
{"phone":"No.3","name":"林婉儿"},
{"phone":"No.4","name":"海棠朵朵"},
{"phone":"No.5","name":"范若若"},
{"phone":"No.6","name":"司理理"},
{"phone":"No.7","name":"五竹"},
{"phone":"No.8","name":"云之澜"},
{"phone":"No.9","name":"叶教授"},
{"phone":"No.10","name":"叶轻眉"},
{"phone":"No.11","name":"陈萍萍"},
{"phone":"No.12","name":"费介"},
{"phone":"No.13","name":"王启年"},
{"phone":"No.14","name":"滕梓荆"},
{"phone":"No.15","name":"言冰云"},
{"phone":"No.16","name":"言若海"},
{"phone":"No.17","name":"朱格"},
{"phone":"No.18","name":"冷师兄"},
{"phone":"No.19","name":"影子"},
{"phone":"No.20","name":"宣九"},
{"phone":"No.21","name":"黑骑"},
{"phone":"No.22","name":"庆帝"},
{"phone":"No.23","name":"侯公公"},
{"phone":"No.24","name":"李云睿"},
{"phone":"No.25","name":"南庆太后"},
{"phone":"No.26","name":"洪四庠"},
{"phone":"No.27","name":"李承虔"},
{"phone":"No.28","name":"李承泽"},
{"phone":"No.29","name":"李弘成"},
{"phone":"No.30","name":"谢必安"},
{"phone":"No.31","name":"燕小乙"},
{"phone":"No.32","name":"宫典"},
{"phone":"No.33","name":"宜贵嫔"},
{"phone":"No.34","name":"淑贵妃"},
{"phone":"No.35","name":"宁才人"},
{"phone":"No.36","name":"范建"},
{"phone":"No.37","name":"范老太太"},
{"phone":"No.38","name":"范思辙"},
{"phone":"No.39","name":"柳如玉"},
{"phone":"No.40","name":"高达"},
{"phone":"No.41","name":"林若甫"},
{"phone":"No.42","name":"林珙"},
{"phone":"No.43","name":"袁宏道"},
{"phone":"No.44","name":"林大宝"},
{"phone":"No.45","name":"郭攸之"},
{"phone":"No.46","name":"郭保坤"},
{"phone":"No.47","name":"叶灵儿"},
{"phone":"No.48","name":"梅执礼"},
{"phone":"No.49","name":"辛其物"},
{"phone":"No.50","name":"战豆豆"},
{"phone":"No.51","name":"北齐太后"},
{"phone":"No.52","name":"肖恩"},
{"phone":"No.53","name":"庄墨韩"},
{"phone":"No.54","name":"上杉虎"},
{"phone":"No.55","name":"谭武"},
{"phone":"No.56","name":"沈重"},
{"phone":"No.57","name":"沈姑娘"},
{"phone":"No.58","name":"何道人"},
{"phone":"No.59","name":"程巨树"},
{"phone":"No.60","name":"苦荷"},
{"phone":"No.61","name":"狼桃"}
]
faceSignSave().then(res =>{
    member = res.Users
    var map={}
    member.forEach((item,index)=>{
        map[item.id+'号-No.'+item.id]=1
    })
})