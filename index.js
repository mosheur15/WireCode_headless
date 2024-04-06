'use strict'

const editor = ace.edit("editor")
editor.setTheme('ace/theme/tomorrow_night')
editor.session.setMode('ace/mode/javascript')
editor.resize(true)
editor.setOptions({
    enableLiveAutocompletion: true
})

// turn off inline warnings for gutter.
// because width fix makes it stick in top of line number.
editor.getSession().setUseWorker(false)


let toggle = document.getElementById("toggle")
let sidebar = document.getElementById('sidebar')
let gutter = document.querySelector(".ace_gutter")

console.log("gutter")
console.log(gutter)

let isToggled = true

toggle.onclick = ()=>{
    if (!isToggled){
        gutter.style.display = "block"
        sidebar.style.display = "none"
        isToggled = true
        return
    }
    
    gutter.style.display = "none"
    sidebar.style.display = "block"
    isToggled = false
}
