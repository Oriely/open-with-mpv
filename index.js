function onResponse(response) {
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.runtime.getURL("icons/mpv-96.png"),
        "title": "Open With MPV",
        "message": response
    })
}

function onError(error) {
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.runtime.getURL("icons/mpv-96.png"),
        "title": "Open With MPV",
        "message": `ERROR: ${error}`
    })
}

// var port = browser.runtime.connectNative("open_with_mpv");

// port.onMessage.addListener((response) => {
//   console.log("Received: " + response);
// });

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {

        const url = `${tabs[0].url}`;
        
        console.log(tabs[0])

        if(!url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/)) return alert('Not a youttube url');

        console.log('Trying to send: ', url);
        browser.notifications.create('open-with-mpv', {
            "type": "basic",
            "iconUrl": browser.runtime.getURL("icons/mpv-96.png"),
            "title": "Open With MPV",
            "message": "Opening video."
        })
        // port.postMessage(url);

        browser.tabs.executeScript({file: "/content_scripts/pause_video.js"})
        .then((t) => {
            console.log(t);
        })
        .catch((e) => {
            console.log(e);
        });

        // var sending = browser.runtime.sendNativeMessage( "open_with_mpv",url);
        //     sending.then((res) => {
        //         onResponse(res);

            

        //     }, onError);

    }, console.error);

});