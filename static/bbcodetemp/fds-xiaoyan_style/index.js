inner = []

out = ""

document.addEventListener("DOMContentLoaded", load)

function load() {
    document.querySelector("#things").append(header.cloneNode(true));
    alloc();
}

document.addEventListener("click", function (event) {
    refector(event.target);
    refreash();
});

function refector(button) {
    console.log(button.dataset.type);
    if (button.dataset.type === "add") {
        add(button.dataset.func, button);
    } else if (button.dataset.type === "remove") {
        remove(button);
    } else if (button.dataset.type === "convert") {
        convert_re(button.dataset.func)
    }
}

function add(func, button) {
    if (func === "para") {
        let para = body.cloneNode(true);
        document.querySelector("#things").append(para);
    }
    alloc()
}

function remove(button) {
    console.log("1");
    button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}

function convert_re(func) {
    if (func == "convert") {
        convert()
    }
    else if (func == "copy") {
        copy()
    }
}

function convert() {
    let color = document.querySelector("#color").value;
    let size = document.querySelector("#table-size").value;
    let head = document.querySelector(".head")
    out = `[align=center]
[table=${size}%]
[tr][td][size=5][color=${color}]${head.querySelector("#fulltitle1").value}[/color][/size] 
${head.querySelector("#tj").value} 
[/td][/tr][tr][td]`
    inner = [];
    document.querySelectorAll(".para").forEach(function (element) {
        out += `\n[b]${element.querySelector("#fulltitle1").value}[/b]
${element.querySelector("#honmo").value}
[img]static/image/hrline/line4.png[/img]`
    })
    out = out.substring(0, out.length - 39)
    out += `[/td][/tr]
[/table]
[/align]`
    out += `Formatted by [url=https://pmine.org/bbcode]PMINE TOOL BOX[/url]`
    document.querySelector("#output").innerHTML = out.replace(/(\r?\n)/g, "<br>");
}

function copy() {
    let color = document.querySelector("#color").value;
    let size = document.querySelector("#table-size").value;
    let head = document.querySelector(".head")
    console.log(head.querySelector("#tj").value)
    out = `[align=center]
[table=${size}%]
[tr][td][size=5][color=${color}]${head.querySelector("#fulltitle1").value}[/color][/size] 
${head.querySelector("#tj").value} 
[/td][/tr][tr][td]`
    inner = [];
    let test = false;
    document.querySelectorAll(".para").forEach(function (element) {
        out += `\n[b]${element.querySelector("#fulltitle1").value}[/b]
${element.querySelector("#honmo").value}
[img]static/image/hrline/line4.png[/img]`
        test = true;
    })
    if (test) {
        out = out.substring(0, out.length - 40)
    }
    out += `[/td][/tr]
[/table]
[/align]`
    out += `Formatted by [url=https://pmine.org/bbcode]PMINE TOOL BOX[/url]`
    navigator.clipboard.writeText(out);
    alert("Copied")
}
