// alert('Grrr..')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
//     // alert(request)
//     const reg = new RegExp('bear', 'gi')
//     const matches = document.documentElement.innerHTML.match(reg)
//     sendResponse({count: matches.length})
// })


const reg = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(reg)

chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})

