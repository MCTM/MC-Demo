var gameData1 = {
	name:'声优大挑战',
	bgimg:'img/game1bg.jpg',
	rule:[
		'现场将由“击鼓传花”选出4名选手，每位选手各自挑选一个搭档',
		'每对选手上台观看一小段视频，并记下台词和说话语气，稍后2人合作给这段视频配音',
		'只有表现得到大家肯定的选手才会获得小奖品哦！各位加油吧~'
	],
	vd1:{
		show:'video/臣妾做不到.mp4',
		slic:'video/臣妾做不到.mp4'
	},
	vd2:{
		show:'video/《Only you》周星驰.mp4',
		slic:'video/《Only you》周星驰.mp4'
	},
	vd3:{
		show:'video/还珠格格看雪看月亮.mp4',
		slic:'video/还珠格格看雪看月亮.mp4'
	},
	vd4:{
		show:'video/欢乐喜剧人《甄嬛后传》 雨露均沾视频.mp4',
		slic:'video/欢乐喜剧人《甄嬛后传》 雨露均沾视频.mp4'
	}
};
var _randomwords = [];
_randomwords[0] = '小伙伴、AA制、雾霾、涂口红、醋、大话西游、五仁月饼、莫言、石锅拌饭、二逼青年、白菜、眼药水、白骨精、萌妹子、蹦极、俯卧撑、安检、刮胡子、东方不败、拉斯维加斯、上海、AK-47、12306、愤怒的小鸟、土豪、西藏、甄嬛传、广场舞、二手烟、闷骚、小时代、求婚、舌尖上的中国、手机、烟灰缸、拳击、护照、剪刀手、高富帅、口头禅、过桥米线、臭豆腐、学霸、喇叭裤';
_randomwords[1] = '剁椒鱼头、回锅肉、香菜、隔夜饭、烤肉、鸡蛋饼、火龙果、饺子、榴莲蛋糕、干脆面、土豆、薯片、锅盔、汤圆、咖喱、冬阴功汤、韩国泡菜、水煮肉片、冰糖葫芦、海苔、茄子、大排档、夫妻肺片、俏江南、必胜客、培根、拉面、火锅、酸辣粉、东坡肉、可乐鸡翅、蟹黄包、羊肉泡馍';
_randomwords[2] = '精华霜、眉笔、减肥、包邮、美容、面膜、指甲油、淘宝、代购、香奈儿、迪奥、腮红、韩剧、聚美优品、眼影、下午茶、公主裙、闺蜜、粉底液、支付宝、爱马仕、打底裤、only、美丽说、发膜、逛街、蕾丝、健身房、护手霜、瑜伽、唯品会、BB霜、LV';
_randomwords[3] = '三毛流浪记、涂改液、期末考试、小燕子、家长会、许仙、魔方、语文课、烤红薯、大风车、打水漂、聪明的一休、释小龙、还珠格格、李雷、海尔兄弟、大哥大、热水袋、扫雷、大头儿子小头爸爸、三八线、Beyond、大闹天宫、小虎队、西游记、让我们荡起双桨、娃哈哈、飞行棋、奥特曼、眼保健操、飞行棋';
_randomwords[4] = '同仁堂、喜之郎、康师傅、立顿、欧莱雅、老干妈、奥利奥、欧米茄、波司登、相宜本草、美特斯邦威、奥迪、宝马、本田、大众、丰田、红旗、金六福、兰博基尼、小米、法拉利、麦当劳、香飘飘、魅族、特步、青岛啤酒、汉庭、红牛、宜家、大宝、路虎、味全、耐克';
_randomwords[5] = '李光洙、章子怡、费玉清、那英、汪峰、陈奕迅、小沈阳、麦当娜、宫崎骏、5566、小S、倪妮、陈赫、文章、罗大佑、SHE、张静初、刘涛、王宝强、郭德纲、姜文、五月天、林宥嘉、张学友、李连杰、李宇春、张震岳、范冰冰、李代沫、周杰伦、王菲、蔡依林、王力宏、成龙';
_randomwords[6] = '三亚、黄山、西湖、北京、敦煌、西安、昆明、大理、凤凰古城、长城、苏州、黄鹤楼、岳阳楼、黄果树瀑布、桂林、九寨沟、庐山、雁荡山、四川、成都、西藏、布达拉宫、华山、浦东、武汉、深圳、哈尔滨、大兴安岭、黑龙江、海南、台湾、香港';
_randomwords[7] = '餐巾纸、电梯、台灯、手套、灯笼、眼镜、手电筒、温度计、熨斗、剪刀、雨衣、菜刀、灭火器、床、肥皂、帽子、牙膏、皮鞋、红领巾、水杯、门、杯子、碗、筷子、日光灯、茶叶、围巾、毛巾、脸盆、打印机、电脑';
_randomwords[8] = '狐狸、老虎、大象、海豚、恐龙、老鼠、蟑螂、蝴蝶、北极熊、熊猫、长颈鹿、鸭子、金鱼、蜈蚣、狮子、孔雀、大灰狼、猴子、老鹰、螃蟹、青蛙、蜻蜓、鸵鸟、山羊、蜗牛、萤火虫、猫头鹰、刺猬、虾、蚂蚁、金钱豹';
_randomwords[9] = '米饭、馒头、花卷、煎饼、面条、刀削面、牛肉面、炸酱面、鸡蛋面、饼干、薯片、旺仔小馒头、方便面、面包、寿司、肉松、蛋糕、鸡蛋、香肠、猪蹄、鸡爪、火腿、咸鸭蛋、凉茶、坚果、核桃、碧根果、海鲜、蜂蜜、牛奶';
_randomwords[10] = 'KFC、京东、迪士尼、上上谦、优衣库、老娘舅、永和豆浆、小肥羊、一点点、星巴克、麦当劳、网易、俏江南、香奈儿、淘宝、海澜之家、亚马逊、OPPO、诺基亚、IPhone、三只松鼠、良品铺子、、小米、华为、三星、百度、爱奇艺、优酷、中央电视台';
_randomwords[11] = '怡宝、农夫山泉、统一、昆仑山、雀巢、立顿、今麦郎、汇源、农夫果园、果缤纷、鲜橙多、美汁源、美年达、雪碧、芬达、七喜、红牛、东鹏特饮、王老吉、何其正、营养快线、旺旺、爽歪歪、优酸乳、蒙牛';

_randomJSwords = '艾泰、绿色、路由器、蓝瘦、LOL、乒乓、羽毛球、喜羊羊、女汉子、双11、春节、元旦、中秋、国庆、抢红包、妇女节、圣诞节、情人节、腊八节、神经病、春运、隐形眼镜、穿越、爆米花、CEO、搞笑、神马、浮云、虹桥一姐、闺蜜、QQ、微信、富二代、白痴、吉他、KTV、地沟油、欢迎光临、微博、周星驰、PAPI酱、小目标、老司机、洪荒之力、北京瘫、撩妹、套路、绿茶婊、女婿、愚人节、拔河、一心一意、十全十美、三心二意、心有灵犀、二胡、游泳、摔跤、联想、故宫、灰太狼、喜洋洋、桃花运、狐假虎威、体操、排球、张继科、跳水、体育、哆啦A梦、日历、法拉利、水浒传、蜡笔小新、世界末日、孙悟空、京剧、三顾茅庐、曹操、张飞、诸葛亮、鸿门宴、唐伯虎、降龙十八掌、谷歌、如来佛祖、PPT、钓鱼岛、赵本山、宋丹丹、非诚勿扰';


var largeArr = [];
_randomwords.forEach(function(obj){
	var _tlarr = obj.split('、');
	_tlarr.forEach(function(obj1){
		if(obj1 != '' && obj1 != ' '){
			largeArr.push(obj1);
		}
	});
});
 var res = [];
 var jsons = {};
 for(var i = 0; i < largeArr.length; i++){
  if(!jsons[largeArr[i]]){
   res.push(largeArr[i]);
   jsons[largeArr[i]] = 1;
  }else{
  }
 }
var _newlargeArr = res.concat();
function getRandomWords(neednum){
	var _needslength = neednum;
	var _nowword = [];
	for(var i = 0;i<_needslength;i++){
		var _arrlength = _newlargeArr.length;
		var _litrannum = Math.round(Math.random()*(_arrlength-1));
		_nowword.push(_newlargeArr[_litrannum]);
		_newlargeArr.splice(_litrannum,1);
	}
	return _nowword;
}

var _newrandomJSwords = _randomJSwords.split('、').concat();
 var resjs = [];
 var jsonsjs = {};
 for(var i = 0; i < _newrandomJSwords.length; i++){
  if(!jsonsjs[_newrandomJSwords[i]]){
   resjs.push(_newrandomJSwords[i]);
   jsonsjs[_newrandomJSwords[i]] = 1;
  }else{
  	
  }
 }
 
function getRandomJSwords(neednum){
	var _needslength = neednum;
	var _nowword = [];
	for(var i = 0;i<_needslength;i++){
		var _arrlength = resjs.length;
		var _litrannum = Math.round(Math.random()*(_arrlength-1));
		_nowword.push(resjs[_litrannum]);
		resjs.splice(_litrannum,1);
	}
	return _nowword;
}
var gameData2 = {
	name:'你来比划，我来猜',
	bgimg:'img/game2opbg.jpg',
	rule:[
		'现场将由主持人选出每桌2名选手代表本桌参加猜词游戏的比赛',
		'每对选手上台后，猜词人面对观众，说词人背对观众，初赛选出前三名并进行决赛',
		'每组有90秒时间和三次“跳过当前词语”的机会，前三名会获得奖励，决赛胜出的组代表的一桌将会在抽奖环节获得一个惊喜！大家加油吧！'
	],
	csWord:[
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30),
		getRandomWords(30)
		
	],
	jsWord:[
		getRandomJSwords(30),
		getRandomJSwords(30),
		getRandomJSwords(30)
		]
};

var gameData3 = { 
	name:'猜猜他是谁',
	bgimg:'img/game3opbg.jpg',
	rule:[
		'现场以一桌为一组，每桌选出一位代表来参加比赛',
		'比赛开始时，屏幕上会逐一显示提示词语，共有若干个词语，在场的每个人都可以猜猜这个人的名字',
		'答案将由每桌的代表由微信回答并发到指定的群里，最先答对人名的人将获得胜利，胜利的一桌将会在抽奖环节获得一份惊喜哦！大家加油吧！'
	],
	who:[
		{
			name:'张莉',
			head:'img/game3/张莉-产品部.jpg',
			part:'产品部   NPI工程主管',
			detail:'',
			words:['中餐带饭','喜欢带发夹','江苏人','很瘦','准妈妈']
		},
		{
			name:'董珥意',
			head:'img/game3/董珥意-综合管理部.jpg',
			part:'综管部   综管部经理',
			detail:'',
			words:['老员工','会开车','经常出差','微信好友多','普通话不准']
		},
		{
			name:'王先胜',
			head:'img/game3/王先胜-管理层.jpg',
			part:'总经理',
			detail:'',
			words:['技术牛','很少穿正装','全国跑','贡献大','职位高']
		},
		{
			name:'欧阳乔琴',
			head:'img/game3/欧阳乔琴-销售部.jpg',
			part:'销售部    中南区区域销售',
			detail:'',
			words:['能报销话费','销售部','休过产假','上海西南方','三国美女']
		},
		{
			name:'欧寅伟',
			head:'img/game3/欧寅伟-海外部.jpg',
			part:'海外部   资深产品经理',
			detail:'',
			words:['沉默寡言','绅士','演过节目','高富帅','英文']
		},
		{
			name:'焦陈',
			head:'img/game3/焦陈-管理层.jpg',
			part:'副总经理',
			detail:'',
			words:['有车','酒量不错','10年以上','“重量级”','年终奖靠他']
		},
		{
			name:'王健',
			head:'img/game3/王健-财务部.jpg',
			part:'财务部   财务部经理',
			detail:'',
			words:['家在上海','16年入职','公章','天天看数字','领导']
		},
		{
			name:'范霖',
			head:'img/game3/范霖-研发部.jpg',
			part:'软件部   部门助理',
			detail:'',
			words:['追她的人多','做过主持人','颜值高','歌唱的好','园区歌唱赛']
		},
		{
			name:'褚强',
			head:'img/game3/褚强-销售部1.jpg',
			part:'副总经理兼西区经理',
			detail:'',
			words:['销售','领导','善言谈','运动健将','像马云']
		},
		{
			name:'顾皓婷',
			head:'img/game3/顾皓婷-综管部.jpg',
			part:'综管部   人事专员',
			detail:'',
			words:['个子高','身材好','都见过TA','美女','见全员工资']
		},
		{
			name:'王辉',
			head:'img/game3/王辉-产品部.jpg',
			part:'产品部 产品工程师',
			detail:'',
			words:['戴眼镜','任职多部门','了解产品','爱抽烟','客服部待过']
		},
		{
			name:'仇广成',
			head:'img/game3/仇广成-研发部.jpg',
			part:'软件部   测试主管',
			detail:'',
			words:['特别的姓','个子很高','有房有车','研发部的','经常加班']
		},
		{
			name:'汤歆南',
			head:'img/game3/汤歆南-销售部.jpg',
			part:'销售部   华东区大区经理',
			detail:'',
			words:['很少拒绝人','不戴眼镜','已婚','做过主持人','笑脸弥勒佛']
		}
	]
};
var gameData4 = {
	name:'报水果！',
	bgimg:'img/game4rulebg.jpg',
	rule:[
		'现场由第一桌第一人开始报出一种类别的词语',
		'比赛开始时，主持人将选择台下一位观众报出一种词语类别，由选手依次说出一个相关的词语',
		'词语重复或严重卡壳都会停止游戏，该观众将会获得一些惩罚，大家注意哦！'
	],
	start:true
};