
// var a: string = "nihao ts";
// console.log(a);

document.body.style.height = "100vh"
var div: HTMLDivElement = document.createElement('div')
div.id = "demo"
div.style.border = '1px solid red'
div.style.height = "100px"
div.style.width = "100px"
var flag: boolean = false;
document.body.appendChild(div);
var position: [number, number] = [0, 0]

div.onmousedown = (e) => {
    flag = true
    position = [e.clientX, e.clientY];
}



document.onmousemove = (e) => {

    if (flag === true) {
        // console.log(e.clientX, e.clientY)
        var nowx = e.clientX - position[0]
        var nowy = e.clientY - position[1]
        var top = parseInt(div.style.top!) || 0;
        var left = parseInt(div.style.left!) || 0;
        // console.log("div.style.top")
        // console.log(nowx)
        // console.log(div.style.top)
        div.style.top = top + nowy + 'px'
        div.style.left = left + nowx + 'px'
        position = [e.clientX, e.clientY]

    }

}
document.onmouseup = (e) => {
    flag = false
}
