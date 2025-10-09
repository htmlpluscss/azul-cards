/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

( () => {

	let resizeTimeout,
		windowWidthOLd = window.innerWidth;

	const header = document.querySelector('.header');
	const brandImg = document.querySelector('.brand-img__item');

	const setProperty = () => {

		document.documentElement.style.setProperty('--scrollMargin', header.clientHeight + 'px');

		if ( brandImg ) {

			document.documentElement.style.setProperty('--brandImgHeight', brandImg.clientHeight + 'px');

		}

	}

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			clearTimeout(resizeTimeout);

			resizeTimeout = setTimeout( () => {

				resizeTimeout = null;

				if(windowWidthOLd !== window.innerWidth) {

					windowWidthOLd = window.innerWidth;

					setProperty();

				}

			}, 100);

		});

	});

	window.addEventListener("load", () => {

		localStorage.setItem('fastLoadScript', true);

		document.documentElement.style.setProperty('--transitionDefault', '.3s');

		setProperty();

	});

	setProperty();

	// Determine if an element is in the visible viewport
	window.isInViewport = el => {
		const rect = el.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= window.innerHeight);
	}

	// отделяем тысячи
	window.sepNumber = str => {
		str = str.toString();
		str = str.replace(/\s+/g,'');
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

	// склеиваем тысячи
	window.strToNumber = n => parseInt(n.replace(/\s+/g,''), 10);

// склонение
	window.declension = (num, expressions) => {

		let r,
			count = num % 100;

		if (count > 4 && count < 21){

			r = expressions['2'];

		}
		else {

			count = count % 10;

			if (count == 1){
				r = expressions['0'];
			}
			else if (count > 1 && count < 5){
				r = expressions['1'];
			}
			else{
				r = expressions['2'];
			}

		}

		return r;

	}

})();