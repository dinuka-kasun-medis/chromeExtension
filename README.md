{
    "name":"Demo Extension",
    "version" : "1.0.0",
    "manifest_version": 2,
    "content_scripts": [
        {
            "matches":["<all_urls>"],
            "js":["content.js"]
        }
    ],
    "browser_action": {
        "default_popup": "popup.html",
        "default_title": "Demo extension"
    },
    "background": {
        "scripts": ["background.js"]
    }
}