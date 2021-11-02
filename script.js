function isParent(refNode, otherNode) {

    if (otherNode == null) {
        return false;
    }

	var parent = otherNode.parentNode;

    if (parent == null) {
        return false;
    }

	do {
		if (refNode == parent) {
			return true;
		} else {
			parent = parent.parentNode;
		}
	} while (parent);
	return false;
}

let body = document.querySelector('body');

body.addEventListener('mouseover', function(event) {
    if (!isParent(this, event.relatedTarget)) {
        event.target.classList.add('active');
    }
});

body.addEventListener('mouseout', function(event) {
    if (!isParent(this, event.relatedTarget)) {
        event.target.classList.remove('active');
    }
});

let cursor = document.getElementById('cursor');

body.addEventListener('mousemove', event => {
    cursor.style.top = event.clientY;
    cursor.style.left = event.clientX;
});

let cursorHovers = document.querySelectorAll('.cursor-hover');

for (let i = 0; i < cursorHovers.length; i++) {
    cursorHovers[i].addEventListener('mouseover', event => {
        body.classList.add('changed');
        cursor.classList.add('active');
    });

    cursorHovers[i].addEventListener('mouseout', event => {
        body.classList.remove('changed');
        cursor.classList.remove('active');
    });
}