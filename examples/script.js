function stal(options) {
    return new Promise(function (resolve) {
        var modal = $(
            `<div class="stack-alert-modal ${options.type}" id="custom_alert_modal"><div class="stack-alert-container"><div class="stack-alert-icon-container"><svg viewBox="0 0 24 24">${
                options.type === "error"
                    ? '<path fill="#F44336" d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74L15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"/>'
                    : options.type === "success"
                    ? '<path fill="#4CAF50" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'
                    : options.type === "warning"
                    ? '<path fill="#FFEB3B" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>'
                    : options.type === "info"
                    ? '<path fill="#2196F3" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>'
                    : ""
            }</svg></div><div class="stack-alert-title">${options.title}</div><div class="stack-alert-text">${options.text}</div></div></div>`
        );
        if (options.showCancelButton) {
            var cancelButton = $(`<button class="stack-alert-button stack-alert-cancel-button">Cancel</button>`);
            cancelButton.click(function () {
				modal.fadeOut(200, function() {
                    modal.remove();
                    resolve(!1);
                });
            });
            modal.find(".stack-alert-container").append(cancelButton);
        }
        if (options.showConfirmButton) {
            var confirmButton = $(`<button class="stack-alert-button stack-alert-confirm-button">Confirm</button>`);
            confirmButton.click(function () {
                modal.fadeOut(200, function() {
                    modal.remove();
                    resolve(!1);
                });
            });
            modal.find(".stack-alert-container").append(confirmButton);
        }
        if (options.showOkButton) {
            var okButton = $(`<button class="stack-alert-button stack-alert-ok-button">OK</button>`);
            okButton.click(function () {
                modal.fadeOut(200, function() {
                    modal.remove();
                    resolve(!1);
                });
            });
            modal.find(".stack-alert-container").append(okButton);
        }
		modal.fadeIn(500, function() {
			$("body").append(modal);
		});
        
    });
}
