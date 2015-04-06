function transify(img) {
	if(window.ie6) {
		img = $(img);
		var trans = new Element('div');
		trans.setProperty('id',img.getProperty('id'));
		trans.setProperty('class',img.getProperty('class'));
		trans.setStyle('width',img.getProperty('width'));
		trans.setStyle('height',img.getProperty('height'));
		trans.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + img.getAttribute('src') + "',sizingMethod='scale')";
		img.replaceWith(trans);
	}
}

function transifyme() {
	if(window.ie6) {
		var trans = $$('.transifyme');
		for(var i = 0; i < trans.length; i++) transify(trans[i]);
	}
}