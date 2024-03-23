inner = []

out = ""

document.addEventListener("DOMContentLoaded", load)

function load() {
    document.querySelector("#things").append(header.cloneNode(true));
    alloc();
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
    let color1 = document.querySelector("#color-in").value;
    let size = document.querySelector("#table-size").value;
    let size1 = document.querySelector("#table-in").value;
    let head = document.querySelector(".head")
    out = `[align=center][table=${size}%]
            [tr=${color}][td][align=center][table=${size1}%,White]
            [tr][td][align=center][font=Times New Roman][size=5][color=${color}][b]${head.querySelector("#fulltitle1").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=3]${head.querySelector("#fulltitle2").value}[/size][/font][/align][/td][/tr]
            [/table][/align][/td][/tr]
            [/table][/align][align=center][align=center][table=${size}%]
            [tr=${color1}][td][align=center][table=${size1}%,White]
            [tr][td]
            [align=center]${head.querySelector("#pict").value}[/align][align=center][font=Times New Roman][size=5][color=#696969][b]${head.querySelector("#fulltitle3").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=4][color=#000000][b]${head.querySelector("#fulltitle4").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=3][color=#808080]${head.querySelector("#tj").value}[/color][/size][/font][/align][font=Times New Roman]`
    inner = [];
    document.querySelectorAll(".para").forEach(function (element) {
        out += `[size=3][b][color=${color1}]▌${element.querySelector("#fulltitle1").value}[/color][/b]
                [/size][/font]
                [align=center][align=left]${element.querySelector("#honmo").value}[/align][/align]
                [align=center][hr][/align]`
    })
    out += `[align=center][b][font=Times New Roman][size=5]——END——[/size][/font][/b][/align][/td][/tr]
            [/table][/align][/td][/tr]
            [/table][table=98%,Black]
            [tr][td][align=right][size=3][font=Times New Roman][color=#ffffff][b]Template From:Cinder [/b][/color][/font][/size][/align][align=right][font=Times New Roman][size=3][color=#ffffff][b][/b][/color][/size][/font][/align][/td][/tr]
            [/table]`
    document.querySelector("#output").innerHTML = out.replace(/(\r?\n)/g, "<br>");
}

function convert() {
    let color = document.querySelector("#color").value;
    let color1 = document.querySelector("#color-in").value;
    let size = document.querySelector("#table-size").value;
    let size1 = document.querySelector("#table-in").value;
    let head = document.querySelector(".head")
    out = `[align=center][table=${size}%]
            [tr=${color}][td][align=center][table=${size1}%,White]
            [tr][td][align=center][font=Times New Roman][size=5][color=${color}][b]${head.querySelector("#fulltitle1").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=3]${head.querySelector("#fulltitle2").value}[/size][/font][/align][/td][/tr]
            [/table][/align][/td][/tr]
            [/table][/align][align=center][align=center][table=${size}%]
            [tr=${color1}][td][align=center][table=${size1}%,White]
            [tr][td]
            [align=center]${head.querySelector("#pict").value}[/align][align=center][font=Times New Roman][size=5][color=#696969][b]${head.querySelector("#fulltitle3").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=4][color=#000000][b]${head.querySelector("#fulltitle4").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=3][color=#808080]${head.querySelector("#tj").value}[/color][/size][/font][/align][font=Times New Roman]`
    inner = [];
    document.querySelectorAll(".para").forEach(function (element) {
        out += `[size=3][b][color=${color1}]▌${element.querySelector("#fulltitle1").value}[/color][/b]
                [/size][/font]
                [align=center][align=left]${element.querySelector("#honmo").value}[/align][/align]
                [align=center][hr][/align]`
    })
    out += `[align=center][b][font=Times New Roman][size=5]——END——[/size][/font][/b][/align][/td][/tr]
            [/table][/align][/td][/tr]
            [/table][table=98%,Black]
            [tr][td][align=right][size=3][font=Times New Roman][color=#ffffff][b]Template From:Cinder [/b][/color][/font][/size][/align][align=right][font=Times New Roman][size=3][color=#ffffff][b][/b][/color][/size][/font][/align][/td][/tr]
            [/table]`
    document.querySelector("#output").innerHTML = out.replace(/(\r?\n)/g, "<br>");
}

function copy() {
    let color = document.querySelector("#color").value;
    let color1 = document.querySelector("#color-in").value;
    let size = document.querySelector("#table-size").value;
    let size1 = document.querySelector("#table-in").value;
    let head = document.querySelector(".head")
    out = `[align=center][table=${size}%]
            [tr=${color}][td][align=center][table=${size1}%,White]
            [tr][td][align=center][font=Times New Roman][size=5][color=${color}][b]${head.querySelector("#fulltitle1").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=3]${head.querySelector("#fulltitle2").value}[/size][/font][/align][/td][/tr]
            [/table][/align][/td][/tr]
            [/table][/align][align=center][align=center][table=${size}%]
            [tr=${color1}][td][align=center][table=${size1}%,White]
            [tr][td]
            [align=center]${head.querySelector("#pict").value}[/align][align=center][font=Times New Roman][size=5][color=#696969][b]${head.querySelector("#fulltitle3").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=4][color=#000000][b]${head.querySelector("#fulltitle4").value}[/b][/color][/size][/font][/align][align=center][font=Times New Roman][size=3][color=#808080]${head.querySelector("#tj").value}[/color][/size][/font][/align][font=Times New Roman]`
    inner = [];
    document.querySelectorAll(".para").forEach(function (element) {
        out += `[size=3][b][color=${color1}]▌${element.querySelector("#fulltitle1").value}[/color][/b]
                [/size][/font]
                [align=center][align=left]${element.querySelector("#honmo").value}[/align][/align]
                [align=center][hr][/align]`
    })
    out += `[align=center][b][font=Times New Roman][size=5]——END——[/size][/font][/b][/align][/td][/tr]
            [/table][/align][/td][/tr]
            [/table][table=98%,Black]
            [tr][td][align=right][size=3][font=Times New Roman][color=#ffffff][b]Template From:Cinder [/b][/color][/font][/size][/align][align=right][font=Times New Roman][size=3][color=#ffffff][b][/b][/color][/size][/font][/align][/td][/tr]
            [/table]`
    navigator.clipboard.writeText(out);
    alert("Copied")
}

