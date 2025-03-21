var elem = document.getElementById("statusbadge");

function badgeOk() {
	elem.classList.remove("badge-error");
	elem.classList.add("badge-success");
	elem.innerHTML = "Archtec up";
}

function badgeErr() {
	elem.classList.remove("badge-success");
	elem.classList.add("badge-error");
	elem.innerHTML = "Archtec down";
}

async function updatebadge() {
	if (document.visibilityState == "visible") {
		try {
			const response = await fetch("https://archtec.niklp.net/mtalive");
			if (response.status == 200) {
				badgeOk();
			} else {
				badgeErr();
			}
		} catch (err) {
			console.log(err);
			badgeErr();
		}
	}
}

window.addEventListener("load", function () {
	setTimeout(updatebadge, 300); // Run on load
	setInterval(updatebadge, 5000);
});
