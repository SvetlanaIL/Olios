let input = document.querySelector('#input');

	input.oninput = function() {
		let value = this.value.trim().toUpperCase();
		let list = document.querySelectorAll('.search__link');

		if (value) {
			list.forEach(elem => {
				if (elem.innerText.search(value) == -1) {
					elem.classList.add('hide');
				}
			});
		} else {
			list.forEach(elem => {
				elem.classList.remove('hide');
			});
		}
	};