// Sidebar Elements //
const menuItems = document.querySelectorAll('.menu-item');
const notificationPopup = document.querySelector('.notifications-popup');
const notificationCount = document.querySelector(
	'#notifications .notification-count'
);
const themeMenuItem = document.querySelector('#theme');

// Message items //
const messageNotifications = document.querySelector('#messages-notification');
const messagesBox = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearchInput = document.querySelector('#message-search');

// Theme Modal Elements //
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');

// HTML //
const html = document.querySelector('html');
const root = document.querySelector(':root');

// remove active class from all menu items //
const removeActiveClassFromMenuItems = () => {
	menuItems.forEach((item) => {
		item.classList.remove('active');
	});
};

// SIDEBAR //
menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		removeActiveClassFromMenuItems();
		item.classList.add('active');

		if (item.id !== 'notifications') {
			notificationPopup.style.display = 'none';
		} else {
			notificationPopup.style.display = 'block';
			notificationCount.style.display = 'none';
		}
	});
});

// Highlight message box when sidebar message menu item is clicked //
messageNotifications.addEventListener('click', () => {
	messageNotifications.querySelector('.notification-count').style.display =
		'none';
	messagesBox.style.boxShadow = '0 0 1rem var(--color-primary)';
	setTimeout(() => {
		messagesBox.style.boxShadow = 'none';
	}, 2000);
});

const searchMessage = (e) => {
	const val = messageSearchInput.value.toLowerCase();
	message.forEach((msg) => {
		let name = msg.querySelector('h5').textContent.toLowerCase();
		if (name.includes(val)) {
			msg.style.display = 'flex';
		} else {
			msg.style.display = 'none';
		}
	});
};

// Filter messages //
messageSearchInput.addEventListener('keyup', searchMessage);

// Theme Customization //

// Open Modal //
const openThemeModal = () => {
	themeModal.style.display = 'grid';
};

// Close Modal //
const closeThemeModal = (e) => {
	if (e.target.classList.contains('customize-theme')) {
		themeModal.style.display = 'none';
	}
};

// Listen Modal Events //
themeModal.addEventListener('click', closeThemeModal);
document.addEventListener('keydown', (e) => {
	if ((e.key = 'Escape')) themeModal.style.display = 'none';
});
themeMenuItem.addEventListener('click', openThemeModal);

// remove active class
const removeActiveClassFromSizeSelectors = () => {
	fontSizes.forEach((size) => {
		size.classList.remove('active');
	});
};

// FONT SIZES //
fontSizes.forEach((size) => {
	let fontSize;
	size.addEventListener('click', () => {
		removeActiveClassFromSizeSelectors();
		size.classList.toggle('active');
		if (size.classList.contains('font-size-1')) {
			fontSize = '10px';
			root.style.setProperty('--sticky-top-left', '5.4rem');
			root.style.setProperty('--sticky-top-right', '5.4rem');
		} else if (size.classList.contains('font-size-2')) {
			root.style.setProperty('--sticky-top-left', '5.4rem');
			root.style.setProperty('--sticky-top-right', '-7rem');
			fontSize = '13px';
		} else if (size.classList.contains('font-size-3')) {
			root.style.setProperty('--sticky-top-left', '-2rem');
			root.style.setProperty('--sticky-top-right', '-17rem');
			fontSize = '16px';
		} else if (size.classList.contains('font-size-4')) {
			root.style.setProperty('--sticky-top-left', '-5rem');
			root.style.setProperty('--sticky-top-right', '-25rem');
			fontSize = '19px';
		} else if (size.classList.contains('font-size-5')) {
			root.style.setProperty('--sticky-top-left', '-12rem');
			root.style.setProperty('--sticky-top-right', '-35rem');
			fontSize = '22px';
		}
		html.style.fontSize = fontSize;
	});
});

// remove active class
const removeActiveClassFromColorPalette = () => {
	colorPalette.forEach((color) => {
		color.classList.remove('active');
	});
};

// Change Primary Colors //
colorPalette.forEach((color) => {
	color.addEventListener('click', () => {
		removeActiveClassFromColorPalette();
		let primaryHue;
		if (color.classList.contains('color-1')) {
			primaryHue = 252;
		} else if (color.classList.contains('color-2')) {
			primaryHue = 52;
		} else if (color.classList.contains('color-3')) {
			primaryHue = 352;
		} else if (color.classList.contains('color-4')) {
			primaryHue = 152;
		} else if (color.classList.contains('color-5')) {
			primaryHue = 202;
		}
		color.classList.add('active');

		root.style.setProperty('--primary-color-hue', primaryHue);
	});
});
