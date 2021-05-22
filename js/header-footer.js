//			封装一个引入伪页的方法,通过偏历实参,进行循环
			function include(){
//				循环语句  起始条件           跳出循环条件	变化
				for (var i= 0; i < arguments.length; i++) {
//					重复做的条件		第几个实参
					$('#'+arguments[i]).load('./HTML/' + arguments[i]+'.html')
				}
			}
			include('header', 'footer','headertwo')