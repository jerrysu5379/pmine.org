paratem, subparatem, honmo

inner = [] 

out = ""

document.addEventListener("DOMContentLoaded", load)

function load() {
    paratem = getparatem()
    subparatem = getsubparatem()
    honmo = gethonmo()
}

document.addEventListener("click", function (event) {
    refector(event.target);
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
        let para = paratem.cloneNode(true);
        document.querySelector("#things").append(para);
    } else if (func === "sub") {
        let subpara = subparatem.cloneNode(true);
        document.querySelector("#things").append(subpara);
    } else if (func === "small") {
        let honpara = honmo.cloneNode(true);
        let element = button.parentElement.parentElement.parentElement.insertBefore(honpara, button.parentElement.parentElement.parentElement.querySelector("#end"))
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
    out = ""
    let color = document.querySelector("#color").value;
    let size = document.querySelector("#table-size").value;
    inner = [];
    document.querySelectorAll(".para").forEach(function (element) {
        let texts = ""
        element.querySelectorAll("#honmo").forEach((element) => {
            if (element.text != "") {
                texts += "[tr=rgb(255, 255, 255)][td]" + element.value + "[/td][/tr]"
            }
        });

        if (element.classList.contains("sub")) {
            inner.push({ "type": "subpara", "title": element.querySelector("#fulltitle1").value, "text": texts });
        } else {
            inner.push({ "type": "para", "title": element.querySelector("#fulltitle1").value, "smalltitle": element.querySelector("#fulltitle2").value, "description": element.querySelector("#description").value, "emoji": element.querySelector("#emoji").value, "text": texts });
        }
    })
    console.log(inner)
    inner.forEach(function (cont) {
        if (cont.type === "para") {
            out += `[align=center] 
            [table=${size}%]
            [tr=${color}][td][b][size=4]${cont.title}[/size]
            [size=1]${cont.smalltitle}[/size][/b][/td][/tr]
            [/table] [table=${size}%]
            [tr=rgb(245, 245, 245)][td][align=center][size=5][b]${cont.emoji}[/b][/size][/align][/td][td][size=2][b]${cont.description}[/b][/size][/td][/tr]
            [/table][table=${size}%] 
            ${cont.text} 
            [/table] [/align]\n`
        } else {
            out += `[align=center] 
            [table=${size}%]
            [tr=${color}][td][b][size=3]${cont.title}[/size][/b][/td][/tr]
            [/table] [table=${size}%]
            ${cont.text} 
            [/table] [/align]\n`
        }
    })
    document.querySelector("#output").innerHTML = out.replace(/(\r?\n)/g, "<br>");
}

function copy() {
    out = ""
    let color = document.querySelector("#color").value;
    let size = document.querySelector("#table-size").value;
    inner = [];
    document.querySelectorAll(".para").forEach(function (element) {
        let texts = ""
        element.querySelectorAll("#honmo").forEach((element) => {
            if (element.text != "") {
                texts += "[tr=rgb(255, 255, 255)][td]" + element.value + "[/td][/tr]"
            }
        });

        if (element.classList.contains("sub")) {
            inner.push({ "type": "subpara", "title": element.querySelector("#fulltitle1").value, "text": texts });
        } else {
            inner.push({ "type": "para", "title": element.querySelector("#fulltitle1").value, "smalltitle": element.querySelector("#fulltitle2").value, "description": element.querySelector("#description").value, "emoji": element.querySelector("#emoji").value, "text": texts });
        }
    })
    console.log(inner)
    inner.forEach(function (cont) {
        if (cont.type === "para") {
            out += `[align=center] 
[table=${size}%]
[tr=${color}][td][b][size=4]${cont.title}[/size]
[size=1]${cont.smalltitle}[/size][/b][/td][/tr]
[/table] [table=${size}%]
[tr=rgb(245, 245, 245)][td][align=center][size=5][b]${cont.emoji}[/b][/size][/align][/td][td][size=2][b]${cont.description}[/b][/size][/td][/tr]
[/table][table=${size}%] 
${cont.text} 
[/table] [/align]\n`
        } else {
            out += `[align=center] 
[table=${size}%]
[tr=${color}][td][b][size=3]${cont.title}[/size][/b][/td][/tr]
[/table] [table=${size}%]
${cont.text} 
[/table] [/align]\n`
        }
    })
    navigator.clipboard.writeText(out);
    alert("已经拷贝。如果拷贝失败请尝试编译并展示后手动拷贝")
} 
