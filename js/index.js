$(window).resize(function(){
	$('#all').css({height:$(window).height()});
})
window.onload = function(){
	$('#tomain').trigger('click');
}

$(document).ready(function(){
	$('#all').css({height:$(window).height()});
	
	setBJ();
	setBottom();
	setArt();
	clickPresent();
	
});

//生成颁奖
function setBJ(){
	$('#bj').append('<div class="art_video" ><video autoplay loop src="img/video/art_reds.mp4"></video></div>');
	bjarr.forEach(function(obj,i){
		
		var newnames = '';
		if(obj.names.split(',').length>1){
			
			obj.names.split(',').forEach(function(obj,i){
				newnames += obj +'</br>';
			})
		}else if(obj.names.split('，').length>1){
			obj.names.split('，').forEach(function(obj,i){
				newnames += obj +'</br>';
			})
		}else{
			newnames = obj.names;
		}
		var divdom = '<div class="p_cover" to="'+(i)+'"><div><div class="p_title">'+obj.title+'</div><div class="p_names">'+newnames+'</div><div class="p_price">'+obj.price+'</div></div></div>';
		$('#bj').append(divdom);
		if(obj.price.length > 11 && obj.price.length <= 19){
			$('#bj').find('.p_cover[to="'+i+'"] .p_price').css('font-size','50px');
		}else if(obj.price.length >19){
			$('#bj').find('.p_cover[to="'+i+'"] .p_price').css('font-size','30px');
		}
		if(obj.title.length>11 ){
			$('#bj').find('.p_cover[to="'+i+'"] .p_title').css('font-size','45px');
		}
	});
	var nowBJkeynum = 0;
	
	$(document).keydown(function(event){
		if($('#bj').is(':visible')){
			console.log(event.keyCode);
			if(event.keyCode == 39){//右
				if(bjarr[nowBJkeynum+1]){
					nowBJkeynum++;
				}
				makeThePriceChange();
			}else if(event.keyCode == 37){//左
				if(bjarr[nowBJkeynum-1]){
					nowBJkeynum--;
				}
				makeThePriceChange();
			}else if(event.keyCode == 38){//上
				$('.p_cover[to="'+nowBJkeynum+'"]>div').removeClass('p_active');
			}else if(event.keyCode == 40){//下
				$('.p_cover[to="'+nowBJkeynum+'"]>div').addClass('p_active');
			}
		}
	});
	makeThePriceChange();
	function makeThePriceChange(){
		$('.p_cover').removeClass('p_active');
		$('.p_cover[to="'+nowBJkeynum+'"]').addClass('p_active');
		$('.p_cover[to="'+nowBJkeynum+'"]>div').removeClass('p_active');
	}
}

//绑定底部按钮
function setBottom(){
	//底部大标题点击
	$('#links>span').click(function(){
		var $t = $(this);
		var thisval = $t.attr('id');
		switch(thisval){
			case 'tomain':
				$('#showall>div').css('opacity','0').addClass('hide');
				$('#main').removeClass('hide').css('opacity','1');
				break;
			case 'tobj':
				$('#showall>div').css('opacity','0').addClass('hide');
				$('#bj').removeClass('hide').css('opacity','1');
				break;
			case 'topresent':
				$('#showall>div').css('opacity','0').addClass('hide');
				$('#present').removeClass('hide').css('opacity','1');
				break;
			case 'toend':
				$('#showall>div').css('opacity','0').addClass('hide');
				$('#end').removeClass('hide').css('opacity','1');
				break;
		}
		
	});
	//底部小标题点击
	$('#links>div>div').click(function(){
		var $t = $(this);
		var thisp = $t.parent().attr('id');
		var thisval = $t.attr('to');
		switch(thisp){
			case 'artlist':
				$('#showall>div').css('opacity','0').addClass('hide');
				$('#art').removeClass('hide').css('opacity','1');
				goart(thisval);
				break;
			case 'gamelist':
				$('#showall>div').css('opacity','0').addClass('hide');
				$('#game').removeClass('hide').css('opacity','1');
				gogame(thisval);
				break;
		}
		
	})
	
	//
	$('#links>span').mouseenter(function(){
		var $t = $(this);
		var thisval = $t.attr('id');
		$('#links>div').addClass('hide');
		var openid = '';
		switch(thisval){
			case 'toart':
				openid = 'artlist';
				break;
			case 'togame':
				openid = 'gamelist';
				break;
		}
		if(openid){
			$('#'+openid).removeClass('hide');
		}
	})
	$('#links>span').mouseleave(function(){
		var $t = $(this);
		var thisval = $t.attr('id');
		var openid = '';
		switch(thisval){
			case 'toart':
				openid = 'artlist';
				break;
			case 'togame':
				openid = 'gamelist';
				break;
		}
		if(openid){
			setTimeout(function(){
				if($('#'+openid).hasClass('active')){
					
				}else{
					$('#'+openid).addClass('hide');
				}
			},300)
		}
	})
	$('#links>div').mouseenter(function(){
		var $t = $(this);
		$t.addClass('active');
	})
	$('#links>div').mouseleave(function(){
		var $t = $(this);
		$t.removeClass('active');
		setTimeout(function(){
			$t.addClass('hide');
		},300)
		
	})
	
}

//节目事件绑定
function setArt(){
	
}

//节目
function goart(num){
	$('#a_op').removeClass('hide');
	$('#a_op').css('opacity','1');
	$('#a_op').removeClass('hide');
	$('#a_bg').addClass('hide');
	$('#a_bg').empty();
	$('#a_bg').css('opacity','0');
	$('#a_type,#a_title,#a_names').empty().removeClass('a_showin');
	$('#a_type').removeClass('a_showin_type');
	$('#a_title').removeClass('a_showin_title');
	$('#a_names').removeClass('a_showin_names');
	$('#a_pic').empty().removeClass('a_headsShowIn');
	$('#a_start').empty().removeClass('a_hs_startin');
	$('#a_start').attr('num',num);
	
	var thisdata = eval('artData'+num);
	if(thisdata){
		$('#a_op').css('background-image','url('+thisdata.opimg+')');
		setTimeout(function(){
			$('#a_type').empty().append(thisdata.type).addClass('a_showin').addClass('a_showin_type');
		},10);
		setTimeout(function(){
			$('#a_title').empty().append(thisdata.title).addClass('a_showin').addClass('a_showin_title');
			if(thisdata.title.length>6){
				$('#a_title').css({	fontSize: '100px'});
			}else{
				$('#a_title').css({	fontSize: '120px'});
			}
		},200);
		setTimeout(function(){
			$('#a_names').empty().append(thisdata.names).addClass('a_showin').addClass('a_showin_names');
			if(thisdata.names.length>28){
				$('#a_names').css({	whiteSpace: 'normal'});
			}else{
				$('#a_names').css({	whiteSpace: 'nowrap'});
			}
		},400);
		var imgarr = thisdata.imgs;
		var arr1 = [];
		var arr2 = [];
		if(imgarr.length >4){
			var num = Math.round(imgarr.length/2);
			imgarr.forEach(function(obj,i){
				if(Number(i)<num){
					arr1.push(obj);
				}else{
					arr2.push(obj);
				}
			});
		}else{
			imgarr.forEach(function(obj,i){
				arr1.push(obj);
			});
		}
		//生成头像组
		var $headsdiv = $('<div></div>');
		if(arr2.length == 0){
			$headsdiv.addClass('a_headsGroup1');
			arr1.forEach(function(obj){
				$headsdiv.append('<div class="a_headType1"><img src="./img/heads/'+obj+'"/><div></div></div>');
			});
			$headsdiv.children().css('width',Math.floor($('#a_pic').width()/arr1.length)+"px");
			$headsdiv.css('width','1600px');
			if(arr1.length == 1){
				$headsdiv.find('.a_headType1>img').css('left','-46%');
			}else{
				$headsdiv.find('.a_headType1>img').css('left','-90%');
			}
		}else{
			$headsdiv.addClass('a_headsGroup2').append('<div class="a_hg_up"></div><br /><div class="a_hg_down"></div>');
			
			arr1.forEach(function(obj){
				$headsdiv.find('.a_hg_up').append('<div class="a_headType2"><img src="./img/heads/'+obj+'"/><div></div></div>');
			});
			arr2.forEach(function(obj){
				$headsdiv.find('.a_hg_down').append('<div class="a_headType2"><img src="./img/heads/'+obj+'"/><div></div></div>');
			});
			$headsdiv.find('.a_headType2').css('width',Math.floor($('#a_pic').width()/Math.round(arr1.length))+"px");
			$headsdiv.find('.a_hg_down,.a_hg_up').css('width','1600px');
			if(thisdata.demo == 9){
				$headsdiv.find('.a_headType2>img').css({left:'-14%'});
			}
		}
		
		$('#a_pic').empty().append($headsdiv).addClass('a_headsShowIn');
		
		//生成开始按钮
		setTimeout(function(){
			$('#a_start').empty().append('<img  src="img/start.png"/>').addClass('a_hs_startin');
		},900);
		var num = $('#a_start').attr('num');
		var thisdata = eval('artData'+num);
		$('#a_start').unbind('click');
		$('#a_start').click(function(){
			$('#a_op').animate({opacity:'0'},1000,'linear',function(){
				$('#a_op').addClass('hide');
				$('#a_bg').append('<div class="art_video" ><video autoplay loop src="'+thisdata.bgvid+'"></video></div>');
				$('#a_bg').removeClass('hide').animate({opacity:'1'},1000);
				if(thisdata.page){
					window.open(thisdata.show); 
				}else{
					if(thisdata.bgvid != ''){
						$('#a_bg').find('.art_video>video')[0].addEventListener('play',function(){
							var realvideowidth = $('#a_bg>.art_video').width();
							var realdivwidth = $('#all').width();
							if(realvideowidth>realdivwidth){
								$('#a_bg').find('.art_video').animate({left:((-1)*(realvideowidth-realdivwidth)/2)+'px'},10);
							}
						},false);
					}else if(thisdata.bgimg != ''){
						$('#a_bg').append('<img src="'+thisdata.bgimg+'" style="position:absolute;width:100%;height:100%;top:0px;left:0px"/>');
					}
					
					if(thisdata.demo == 100008){
						$('#a_bg').append('<img src="img/GT背景.png" style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3"/>');
						$('#a_bg').append('<div id="a_a8_dbg"></div>');
						$('#a_a8_dbg').css({
							position:'absolute',
							top:'0px',
							left:'0px',
							width:'auto',
							height:'100%',
							zIndex:'2',
						}).append('<img src="img/art8playbg.jpg" style="position:relative;width:auto;height:100%;z-index:2;display:block;left:0px"/>')
//						$('#a_a8_dbg').css({transition:'left 1s linear'});
//						$('#a_a8_dbg').css({left:'-1500px'});
//						setInterval(function(){
//							$('#a_a8_dbg').css({transition:'left 0s linear'});
//							$('#a_a8_dbg').css({left:'0px'});
//							$('#a_a8_dbg').css({transition:'left 1s linear'});
//							$('#a_a8_dbg').css({left:'-1500px'});
//						},1000);
						
						setInterval(function(){
							if(parseInt($('#a_a8_dbg>img').css('left')) < -1400){
								$('#a_a8_dbg>img').css('left','0px');
							}
							var nowleft = parseInt($('#a_a8_dbg>img').css('left'))-1;
							console.log(nowleft)
							$('#a_a8_dbg>img').css({left:nowleft+"px"});
						},10);
						
					}
					
				}
			});
			
			
		});
		
	}
}

//游戏
function gogame(num){
	$('#g_rules').removeClass('hide');
	$('#g_rules').css('opacity','1');
	$('#g_play').addClass('hide');
	$('#g_play').empty();
	$('#g_play').css('background-image','none');
	
	
	//规则页
	var thisData = eval('gameData'+num);
	var name = thisData.name;
	var rules = thisData.rule;
	var bgimg = thisData.bgimg;
	$('#g_r_name').text(name);
	$('#g_ruletext>[to="1"]').text(rules[0]);
	$('#g_ruletext>[to="2"]').text(rules[1]);
	$('#g_ruletext>[to="3"]').text(rules[2]);
	$('#g_rules').css('background-image','url('+bgimg+')');
	
	$('#g_start').removeClass('hide');
	if(num == 4){
		$('#g_start').addClass('hide');
	}
	$('#g_start').unbind('click');
	$('#g_start').click(function(){
		$('#g_rules').animate({opacity:'0'},500,'linear',function(){
		$('#g_rules').addClass('hide');
		$('#g_play').removeClass('hide').animate({opacity:'1'},500);
			switch(num){
				case '1':
					gameVideo(thisData);
				break;
				case '2':
					gameGuessWord(thisData);
				break;
				case '3':
					gameGuessName(thisData);
				break;
				case '4':
				break;
			}
		});
		
	})
	
}
function gameVideo(thisData){
	$('#g_play').css('background-image','url(img/game1playgb11.PNG)');
	var $gamestr = $('<div id="g_game1"></div>');
	$('#g_play').append($gamestr);
	$gamestr.append([
		'<div id="g_game_vd1" to="1"><img src="img/game1_1.png"/></div>',
		'<div id="g_game_vd2" to="2"><img src="img/game1_2.png"/></div>',
		'<div id="g_game_vd3" to="3"><img src="img/game1_3.png"/></div>',
		'<div id="g_game_vd4" to="4"><img src="img/game1_4.png"/></div>'
	]);
	 $gamestr.children().click(function(){
	 	var vedioval = $(this).attr('to');
	 	var vediosrc = thisData['vd'+vedioval].show;
	 	$('#g_play').append('<div id="g_vidplay"></div>');
	 	$('#g_play #g_vidplay').append('<video class="g_video" controls="controls"></video>');
	 	$('#g_play #g_vidplay video').attr('src',vediosrc);
	 	$('#g_play #g_vidplay').append('<span class="close" style="top:30px;right:40px">x</span>');
	 	$('#g_play #g_vidplay .close').click(function(){
	 		var vplaydom = document.getElementById('g_vidplay');
	 		vplaydom.innerHTML="";	//清除节点内的内容
	 		vplaydom.parentNode.removeChild(vplaydom);
			delete vplaydom;	//从内存中删除节点信息
			delete document.getElementById('g_vidplay');
	 	});
	 });
}

function gameGuessWord(thisData){
	
	var $gamestr1 = $('<div id="g_game2_cs"></div>');
	var gametable = '<table class="g_g2_cstable">';
	for(var i = 0;i<3;i++){
		gametable += '<tr>';
		for(var j = 1;j<=4;j++){
			gametable += '<td><img to="'+(i*4+j)+'" src="img/game2_cs.png"/><span>'+(i*4+j)+'</span></td>';
		}
		gametable += '</tr>';
	}
	gametable += '</table>';
	$gamestr1.append(gametable);
	
	var $gamestr2 = $('<div id="g_game2_js"></div>');
	var gametable = '<table class="g_g2_jstable">'+
						'<tr><td><img to="1" src="img/game2_js.png"/><span>1</span></td></tr>'+
						'<tr><td><img to="2" src="img/game2_js.png"/><span>2</span></td></tr>'+
						'<tr><td><img to="3" src="img/game2_js.png"/><span>3</span></td></tr>'+
					'</table>';
	$gamestr2.append(gametable);
	$('#g_play').append($gamestr1,$gamestr2);
	$('#g_play').css('background-image','url(img/game2listbg.jpg)');
	
	
	
	thisData.csWord.forEach(function(obj,i){
		
		$('#g_game2_cs img[to="'+(Number(i)+1)+'"]').parent().click(function(){
			showGame2CaiCi(obj);
		});
	});
	thisData.jsWord.forEach(function(obj,i){
		$('#g_game2_js img[to="'+(Number(i)+1)+'"]').parent().click(function(){
			showGame2CaiCi(obj);
		});
		
	});
	
	function showGame2CaiCi(wordArr){
		var settimearr = [];
		var arr = [];
		arr = wordArr.concat();
		var $bggo = $('<div id="g_g2_gobg"></div>');
		
		var bgtime = '<div id="g_g2_time">3</div>';
		var bgwords = '<div id="g_g2_words"><span> <span></div>';
		$bggo.append(bgtime,bgwords);
		$bggo.append('<span class="close" style="top:30px;right:7px">x</span>');
		$bggo.find('.close').click(function(){
	 		var vplaydom = document.getElementById('g_g2_gobg');
	 		vplaydom.innerHTML="";	//清除节点内的内容
	 		vplaydom.parentNode.removeChild(vplaydom);
			delete vplaydom;	//从内存中删除节点信息
			delete document.getElementById('g_g2_gobg');
			$(document).unbind('keydown');
			settimearr.forEach(function(obj){clearTimeout(obj);})
	 	});
		$('#g_play').append($bggo);
		
		$('#g_g2_words span').text('');
		$('#g_g2_time').text('3');
		settimearr[0] = setTimeout(function(){
			$('#g_g2_time').text('2');
			settimearr[1] = setTimeout(function(){
				$('#g_g2_time').text('1');
				settimearr[2] = setTimeout(function(){
					$('#g_g2_time').text('GO');
					$('#g_g2_time').css({
						width: '100px',
						height: '100px',
						margin: '5% 20%',
						border:' 0px solid transparent',
						lineHeight:'72px',
						fontSize: '60px'
					});
					$('#g_g2_words span').text(wordArr[0]);
					changeTheFontSizeOfGame2(wordArr[0],$('#g_g2_words span'));
					
					var nowkeynum = 0;
					$(document).keydown(function(event){
						if(event.keyCode == 39){
							if(wordArr[nowkeynum+1]){
								nowkeynum++;
								$('#g_g2_words span').text(wordArr[nowkeynum]);
								changeTheFontSizeOfGame2(wordArr[nowkeynum],$('#g_g2_words span'))
							}
						}else if(event.keyCode == 37){
							if(wordArr[nowkeynum-1]){
								nowkeynum--;
								$('#g_g2_words span').text(wordArr[nowkeynum]);
								changeTheFontSizeOfGame2(wordArr[nowkeynum],$('#g_g2_words span'))
							}
						}
					});
					
					for(var timeii = 90;timeii >= 0;timeii--){
						settimes(timeii);
					}
				},1000);
			},1000);
		},1000);
		
		function settimes(nowtime){
			var thissettime = setTimeout(function(){
				$('#g_g2_time').text(nowtime);
				if(nowtime == 0){
					$(document).unbind('keydown');
					$('#g_g2_words span').text('结束!!');
				}
			},(91-nowtime)*1000);
			settimearr.push(thissettime);
		}
		function changeTheFontSizeOfGame2(_word,_span){
			if(_word.length>4 && _word.length<8){
				_span.css('font-size','100px');
			}else if(_word.length>8){
				_span.css('font-size','64px');
			}else{
				_span.css('font-size','180px');
			}
		}
	}
	
}

function gameGuessName(thisData){
	$('#g_play').css('background-image','url(img/game3listbg.jpg)');
	thisData.who.forEach(function(obj,i){
		$('#g_play').append('<div id="g_g3_ggn'+(Number(i)+1)+'" to="'+(Number(i)+1)+'" class="g_g3_lthd"><img src="img/game3/n ('+(Number(i)+1)+').png"/><span>'+(Number(i)+1)+'</span></div>');
	});
	cg3hsT(1,100,150);
	cg3hsT(2,100,300);
	cg3hsT(3,100,450);
	cg3hsT(4,100,600);
	
	cg3hsT(5,300,100);
	cg3hsT(6,300,250);
	cg3hsT(7,300,400);
	cg3hsT(8,300,550);
	cg3hsT(9,300,700);
	
	cg3hsB(10,100,150);
	cg3hsB(11,100,300);
	cg3hsB(12,100,450);
	cg3hsB(13,100,600);
	function cg3hsT(num,top,left){
		$('.g_g3_lthd[to='+num+']').css({
			top:top+'px',
			left:left+'px'
		});
	}
	function cg3hsB(num,bottom,left){
		$('.g_g3_lthd[to='+num+']').css({
			bottom:bottom+'px',
			left:left+'px'
		});
	}
	$('#g_play').find('.g_g3_lthd').click(function(){
		var thisg3num = $(this).attr('to');
		var thisdata = thisData.who[Number(thisg3num)-1];
		$('#g_play').append('<div id="g_g3_play"></div>');
		$('#g_g3_play').append('<div class="g_g3_gwords" style="top:30%;left:5%"><img src="img/g3wordsback.png"/><div>'+thisdata.words[0]+'</div></div>');
		$('#g_g3_play').append('<div class="g_g3_gwords" style="top:30%;left:35%"><img src="img/g3wordsback.png"/><div>'+thisdata.words[1]+'</div></div>');
		$('#g_g3_play').append('<div class="g_g3_gwords" style="top:30%;left:65%"><img src="img/g3wordsback.png"/><div>'+thisdata.words[2]+'</div></div>');
		$('#g_g3_play').append('<div class="g_g3_gwords" style="top:60%;left:20%"><img src="img/g3wordsback.png"/><div>'+thisdata.words[3]+'</div></div>');
		$('#g_g3_play').append('<div class="g_g3_gwords" style="top:60%;left:55%"><img src="img/g3wordsback.png"/><div>'+thisdata.words[4]+'</div></div>');
		$('.g_g3_gwords').click(function(){
			$(this).children('img').css({transform:'rotateY(180deg)',zIndex:'1'});
			$(this).children('div').css({transform:'rotateY(360deg)',zIndex:'2'});
			$(this).unbind('click');
		});
		$('#g_g3_play').append('<span id="g3_close" class="close" style="top:30px;right:7px">x</span>');
		$('#g3_close').click(function(){
	 		var vplaydom = document.getElementById('g_g3_play');
	 		vplaydom.innerHTML="";	//清除节点内的内容
	 		vplaydom.parentNode.removeChild(vplaydom);
			delete vplaydom;	//从内存中删除节点信息
			delete document.getElementById('g_g3_play');
	 	});
	 	$('#g_g3_play').append('<span id="g3_answer"  class="close" style="top:130px;right:7px">?</span>');
		$('#g3_answer').click(function(){
			$('.g_g3_gwords').remove();
			$('#g_g3_play').append('<div id="g_g3_playinner"></div>');
			$('#g_g3_playinner').append('<div id="g_g3_a_head"><img src="'+thisdata.head+'" /></div>');
			$('#g_g3_playinner').append('<span id="g_g3_a_name">'+thisdata.name+'</span>');
			$('#g_g3_playinner').append('<span id="g_g3_a_part">'+thisdata.part+'</span>');
			$('#g_g3_playinner').append('<p id="g_g3_a_detail">'+thisdata.detail+'</p>');
		});
	});
	
}

var p_countsfornow = 1;
function clickPresent(){
	$('.p_bottomwords').each(function(){
		if($(this).text().length<15){
			$(this).css('font-size','50px');
		}
	})
	var p_length = $('#p_tomid').children().length;
	doPresentChange();
	
	$('#p_toleft').click(function(){
		if(p_countsfornow>1){
			p_countsfornow--;
		}
		doPresentChange();
	});
	$('#p_toright').click(function(){
		if(p_countsfornow<p_length){
			p_countsfornow++;
		}
		doPresentChange();
	});
	
	
	function doPresentChange(){
		$('.p_minner').css({opacity:'0',zIndex:'1'});
		$('.p_minner[to="'+p_countsfornow+'"]').css({opacity:'1',zIndex:'2'});
	}
}
