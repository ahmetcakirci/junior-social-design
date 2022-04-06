const menuItems = document.querySelectorAll('.menu-item');
const notificationPopup = document.querySelector('.notifications-popup');
const notificationCount = document.querySelector(
	'#notifications .notification-count'
);

const messageNotifications = document.querySelector('#messages-notification');
const messagesBox = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearchInput = document.querySelector('#message-search');

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
