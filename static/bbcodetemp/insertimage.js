document.addEventListener("DOMContentLoaded", load)

function load() {
    var button = document.getElementById("insert_image");
    button.addEventListener("mousedown", function (e) {
        e.preventDefault();
    });
    button.addEventListener("click", function () { 
        var url 
        if (lang == "zh") { 
            url = prompt("请输入图片的链接");
        } else if (lang == "ja"){ 
            url = prompt("画像へのリンクを入力してください");
        } else { 
            url = prompt("Please input the URL for the picture");
        } 
        if (url) {
            var textfields = document.querySelectorAll("#honmo");
            if (textfields.length > 0) {
                var selected = document.activeElement; 
                url = `[img]${url}[/img]` 
                if (selected.id === "honmo") { 
                    insertAtCursor(selected, url);
                } else {
                    var last = textfields[textfields.length - 1];
                    insertAtCursor(last, url);
                }
            } else {
                if (lang == "zh") { 
                    url = prompt("请插入段落之后才执行操作");
                } else if (lang == "ja"){ 
                    url = prompt("操作を実行する前に段落を挿入してください");
                } else { 
                    url = prompt("Please insert a paragraph before performing the operation");
                } 
            } 
        }
    });
}

function insertAtCursor(element, text) {
    if (element.selectionStart || element.selectionStart === 0) {
        var start = element.selectionStart;
        var end = element.selectionEnd;
        element.value = element.value.substring(0, start) + text + element.value.substring(end, element.value.length);
        element.selectionStart = start + text.length;
        element.selectionEnd = start + text.length;
    } else { 
        element.value += text;
    }
}
