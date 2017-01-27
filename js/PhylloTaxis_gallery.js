var gallery = document.getElementById('gallery');

for (var i = 1; i < 73; i++) {
	
	var div = document.createElement('div');
	var img = document.createElement('img');
	img.src = `images/phyllotaxis${i}.png`;
	div.classList.add('img');
	div.appendChild(img);
	gallery.appendChild(div);
	
}