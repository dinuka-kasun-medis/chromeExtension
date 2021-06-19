const reg = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(reg)

chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})

