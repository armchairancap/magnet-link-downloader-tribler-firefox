// const requestURL = 'http://127.0.0.1:3100/api/downloads?get_peers=false&get_pieces=false&get_files=true';
const api_endpoint = 'http://127.0.0.1:3100/api/downloads?get_peers=false&get_pieces=false&get_files=true';

function log(msg, force) {
	if (log.enabled || force) {
		console.log('Tribler downloader: ' + msg);
	}
}
log.enabled = true;

browser.contextMenus.create({
    id: "selected-link-download",
    title: "Download Magnet link with Tribler",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "selected-link-download") {
        const selectedText = info.selectionText;
        if (selectedText && selectedText.startsWith("magnet:")) {
            download(selectedText);
        } else {
            log('No valid magnet link selected', true);
        }
    }
});

/**
  * Downloads a file from the given URL by sending a PUT request to the local API.
  * 
  * @param {string} url - The magnet URL of the file to be downloaded.
  * @returns {void}
*/
function download(selectedText) {
    let api_payload = { "anon_hops": 2, "safe_seeding": true, "destination": "/tmp/", "uri": selectedText };
    
    let json_payload = JSON.stringify(api_payload);
    // check if json_payload is valid JSON
    try {
        JSON.parse(json_payload);
    } catch (error) {
        console.error('Invalid JSON payload: ', error);
        return;
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'X-Api-Key': 'changeme'
        },
        body: json_payload
    };

    fetch(api_endpoint, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};
