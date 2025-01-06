(function () {
    "use strict";

    kintone.events.on("app.record.detail.show", function (event) {
        const serviceStatus = event.record["service_status"].value;
        console.log(serviceStatus)

        if (serviceStatus.length) {
            // メッセージ用の要素を作成
            console.log(serviceStatus.length)
            const targetElement = document.querySelector('.gaia-argoui-app-toolbar-statusmenu');
            const messageDiv = document.createElement("div");
            messageDiv.textContent = "この企業は使えません";
            messageDiv.style.backgroundColor = "red";
            messageDiv.style.color = "white";
            messageDiv.style.padding = "5px 10px";
            messageDiv.style.borderRadius = "5px";
            messageDiv.style.fontSize = "14px";

            targetElement.appendChild(messageDiv);
        }

        return event;
    });
})();
