function checkForm(form) {
			var email = form.email.value;
			var m = email.match(/^[A-Za-z0-9][A-Za-z0-9\._-]*[A-Za-z0-9_]+$/);
			if (!m) {
				alert("E-mail введён неверно");
				return false;
			}
			return true;
		}