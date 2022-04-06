const menuItems = document.querySelectorAll('.menu-item');
const notificationPopup = document.querySelector('.notifications-popup');
const notificationCount = document.querySelector(
	'#notifications .notification-count'
);

const messageNotifications = document.querySelector('#messages-notification');
const messagesBox = document.querySelector('.messages');

// remove active class from all menu items
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

// MESSAGES //
messageNotifications.addEventListener('click', () => {
	messageNotifications.querySelector('.notification-count').style.display =
		'none';
	messagesBox.style.boxShadow = '0 0 1rem var(--color-primary)';
	setTimeout(() => {
		messagesBox.style.boxShadow = 'none';
	}, 2000);
});
