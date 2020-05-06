(function() {
	if (!localStorage.getItem('cookieconsent')) {
		document.body.innerHTML += '\
		<div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#C0C0C0;color:#FFF;text-align:center;width:100%;z-index:99999;">\
			This site uses cookies. By continuing to use this website, you agree to their use. \
			<a href="#" style="color:#525252;">I Understand</a>\
		        <br>Privacy Policy available \
		        <a href="PrivacyPolicy.html" style="color:#525252;">here</a>.\
		</div>\
		';
		document.querySelector('.cookieconsent a').onclick = function(e) {
			e.preventDefault();
			document.querySelector('.cookieconsent').style.display = 'none';
			localStorage.setItem('cookieconsent', true);
		};
	}
})();
