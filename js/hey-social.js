/*
*		heySilver
*		Andrés Nieto Porras
*/
var conf = { 
	/* 
	*  Where are the Files?
	*/
	file: '/wp-content/plugins/hey-social/js/plugins.js',
	plugin_dir: '/wp-content/plugins/hey-social/js/plugins/',
	/* 
	* Names of the Elements
	*/
	back: 'backDiv',
	float: 'floatDiv',
	top_div:'heyTop', 
	frase_div:'frase', 
	info_div:'info', 
	content_div:'contentz', 
	/* 
	* Classes
	*/
	selectItem:'selected', 
	classItem:'plugin',
	closeItem: 'plugin',
	/* 
	* Effects
	*/
	initEffect: function() {
			new Fx.Styles(conf.float, {duration: 700, transition: Fx.Transitions.linear}).start({'height':  [0, 570], 'width':   [0, 500], 'opacity': [0, 0.9]});
		},
	endEffect: function() {
			new Fx.Styles(conf.float, {duration: 700, transition: Fx.Transitions.linear}).start({'height':   [570, 0], 'width':    [500, 0], 'opacity':  [0.9, 0]});
	},
	/* 
	* Initial Function
	*/
	initMe: null,
	/* 
	* Language
	*/
	key01: 'Choose an Option from Menu.',
	key02: 'Press ENTER or click an Option to Activate',
 	key03: 'Exit',
	key04: 'Exit from Hey Social',
	key05: 'Back',
	key06: 'Back to Menu'	
	};

var hey = {
	init: function() {
		document.addEvent('keydown', hey.keyPressInit);
	},
	keyPressInit: function(e) {
		var ev = new Event(e);
	    if (ev.shift && ev.code == 32) hey.start();
	},
	createDivs: function() {
		if (document.getElementById(conf.frase_div)) document.getElementById(conf.frase_div).remove();
		if (document.getElementById(conf.info_div)) document.getElementById(conf.info_div).remove();
		if (document.getElementById(conf.content_div)) document.getElementById(conf.content_div).remove();
		if (document.getElementById(conf.top_div)) document.getElementById(conf.top_div).remove();
		
		var top = new Element('div').setProperty('id',conf.top_div).injectInside(document.getElementById(conf.float));
		new Element('div').setProperty('id',conf.frase_div).injectInside(top);
		new Element('div').setProperty('id',conf.info_div).injectInside(top);
		new Element('div').setProperty('id',conf.content_div).injectInside(document.getElementById(conf.float));
		conf.initEffect();
	},
	initValues: function() {
		hey.pos = -1;
		hey.positions = 0;
		hey.setInfo(conf.key01);		
		hey.setFrase();
		document.onkeydown = hey.keydownStart;
		window.onscroll = hey.position;
		if (hey.isFunction(conf.initMe)) conf.initMe();
	},
	position: function() {
		document.getElementById(conf.back).setStyles({top: Window.getScrollTop()+'px', height: Window.getHeight()+'px'});
		document.getElementById(conf.float).setStyles({top: Window.getScrollTop()+'px'});
	},
	isFunction: function(fc) { //API
		return $type(fc) == 'function';
	},
	start:function() {
		document.onkeypress = null;
		if (hey.opt) hey.opt = null;
		if (hey.tmp) hey.tmp = null;
		if (document.getElementById(conf.float)) document.getElementById(conf.float).remove();
		if (document.getElementById(conf.back)) document.getElementById(conf.back).remove();
		new Element('div').setProperty('id',conf.back).setStyles({
		'top':'0','left':'0','height':Window.getHeight()+'px','width':Window.getWidth()+'px','position':'absolute','opacity':'.4','z-index':'99'}).injectInside(document.body);
		new Element('div').setProperty('id',conf.float).setStyles({'position':'absolute','opacity':'0','z-index':'999'}).injectInside(document.body);
		hey.cargaItems(conf.file);
		hey.createDivs(); hey.initValues();
	},
	is_validKey: function(code) {
		return /[a-zA-Z0-9 -_]/.test(String.fromCharCode(code));
	},
	escKey: function() {
		(hey.frase == '')?hey.close():hey.frase = '';
		hey.setInfo(conf.key01);		
	},
	close: function() {
		document.onkeydown =  hey.keyPressInit;
		window.onscroll = null;
		document.getElementById(conf.content_div).remove();
		conf.endEffect();
		var borramos = function() {
			document.getElementById(conf.float).remove();
			document.getElementById(conf.back).remove();
		}.delay(550);
	},
	openLink: function(url) {
		window.open(url);
	},
	enterPlugin: function(obj) {
		if (obj.href) location.href = obj.href;
	},
	keydownStart: function(e) {
		var e = new Event(e);
		switch(e.code){
			case 37: case 38: (hey.pos >= 0)?hey.pos--:hey.pos= hey.positions; break;
			case 39: case 40: (hey.pos < hey.positions)?hey.pos++:hey.pos=0; break;
			case 8:	hey.frase = hey.frase.substr(0,hey.frase.length-1);	break;
			case 27: hey.escKey(); break;
			case 13: 
				var sel = document.getElementById(conf.content_div).getElements('a.' + conf.selectItem);
				if (sel.length == 1) {
					if (hey.state == 1)	hey.enterPlugin(sel[0]);
					else if (hey.tmp) (!sel[0].id)?hey.openLink(sel[0].href):hey.tmp.items[sel[0].id].action();
				}
				break;
			default:
				if (!hey.is_validKey(e.code)) return;
				hey.frase += e.key;
				hey.setInfo(conf.key02);		
				break
		}/* switch */
		hey.finish(e,(e.code > 36 && e.code < 41));
	},
	finish: function(e,kill) {
		hey.setFrase(hey.frase);
		(kill)?hey.flechas():hey.resaltaValidas();
		if (kill && e.preventDefault) { e.preventDefault(); return false; }
	},
	flechas: function() {
		document.getElementById(conf.float).getElements('a').forEach(function(a) {
			(a.id == hey.pos)?a.addClass(conf.selectItem):a.removeClass(conf.selectItem);	
		});	
	},
	resaltaValidas: function () {
		if (!document.getElementById(conf.float)) return;
		var myRE = new RegExp(hey.frase,"i");
		document.getElementById(conf.float).getElements('a').forEach(function(a) {
			if (a.firstChild) (myRE.test(a.firstChild.nodeValue) && hey.frase != '')?a.addClass(conf.selectItem):a.removeClass(conf.selectItem);	
		});
	},		
	cargaItems: function(file) {
		hey.state = 1;
		hey.positions =0;
		(hey.opt)?hey.setItems():new Ajax( file +'?rand='+$random(0,5000), {method: 'get',onComplete: hey.procesaItems}).request();
	},
	procesaItems: function(oXML) {
		hey.opt = Json.evaluate(oXML);
		hey.setItems();
	},
	setItems: function() {
		hey.setContent(); hey.setFrase();
		hey.opt.items.forEach(function(it) {
			var opt= new Element('a').setProperties({href: 'javascript:hey.cargaWidget("' + it.file +'");', name: it.name, id: hey.positions++, class : conf.classItem}).setHTML(it.name  + '<small>' + it.desc + '</small>');
			hey.setContent(opt);
			if (it.klass) opt.addClass(it.klass);
		});
			hey.setContent(new Element('a').setProperties({href: 'javascript:hey.close();', name: 'Salir', id: hey.positions++, class : conf.closeItem}).setHTML(conf.key03 + '<small>'+ conf.key04 +'</small>'));
	},
	cargaWidget: function(file) {
		hey.loading();
		hey.pos = -1;
		hey.positions =0;
		new Ajax(conf.plugin_dir + file + '?rand='+$random(0,5000), {method: 'get',onComplete: hey.procesaWidget}).request();	
	},
	procesaWidget: function(oXML) {
		hey.tmp = Json.evaluate(oXML);	
		hey.setPlugin();
		hey.setInfo(hey.tmp.info);
	},
	setPlugin: function() {
		hey.setContent();hey.setFrase();
		hey.tmp.items.push({'name':conf.key05, 'desc': conf.key06,'action': function() { hey.cargaItems(conf.file); }});
		hey.tmp.items.forEach(function(it) {
			var lnk = new Element('a').setProperties({name: it.name, href: '#', title: it.desc, id: hey.positions++, class : conf.classItem}).setHTML(it.name + '<small>' + it.desc + '</small>');
			hey.setContent(lnk);
			if (it.klass) lnk.addClass(it.klass);
			lnk.onclick = it.action;
		});
	},
	loading: function() {
		hey.state++;
		hey.setContent(new Element('div').setProperty('id','loading'));
	},
	setInfo: function(str) {
		hey.msgInfo = '<p>' + str + '</p>';
		document.getElementById(conf.info_div).innerHTML = hey.msgInfo;
	},
	setContent: function(el) {
		if (!el) document.getElementById(conf.content_div).setHTML('');
		else if ($type(el) == 'object' || $type(el) == 'element') el.injectInside(document.getElementById(conf.content_div));
		else document.getElementById(conf.content_div).setHTML(el);
	},
	setFrase: function(str) {
		if(!str){ document.getElementById(conf.frase_div).setHTML(''); hey.frase='';}
		else document.getElementById(conf.frase_div).setHTML(str);
	}
}	

Window.onDomReady(hey.init);
