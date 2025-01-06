(function () {
    "use strict";

    kintone.events.on("app.record.detail.show", function (event) {
        console.log("hello world")
        const serviceStatus = event.record["service_status"].value;
        console.log(serviceStatus)

        if (serviceStatus) {
            // メッセージ用の要素を作成
            const messageDiv = document.createElement("div");
            messageDiv.textContent = "この企業は使えません";
            messageDiv.style.position = "fixed";
            messageDiv.style.top = "20px";
            messageDiv.style.left = "50%";
            messageDiv.style.transform = "translateX(-50%)";
            messageDiv.style.backgroundColor = "red";
            messageDiv.style.color = "white";
            messageDiv.style.padding = "10px 20px";
            messageDiv.style.borderRadius = "5px";
            messageDiv.style.zIndex = "100";

            // body に追加して表示
            document.body.appendChild(messageDiv);

            // 5秒後に自動でメッセージを削除
            setTimeout(function () {
                messageDiv.remove();
            }, 5000);
        }

        return event;
    });
})();
