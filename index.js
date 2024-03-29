'use strict'
const editor = ace.edit("editor")
editor.setTheme('ace/theme/tomorrow_night')
editor.session.setMode('ace/mode/javascript')
editor.setOptions({
    enableLiveAutocompletion: true
})

// turn off inline warnings for gutter width fix.
editor.getSession().setUseWorker(false)

editor.execCommand("showSettingsMenu")