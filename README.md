# Magnet Link Downloader for Tribler API

Simple "download selected" extension for downloading Magnet links using the Tribler API.

Select a valid Magnet link, right click, choose "Download Magnet link with Tribler" in context menu.

v1.0 has the following hard-coded in background.js and settings modal is a TODO item, so to use v1.0 you need to configure:

- Tribler API: change Tribler's port to http://127.0.0.1:3100 (see background.js) 
- API key: set it to Tribler default (see background.js) 
- Download location in the API call. Maybe OS X and Windows users need a different directory. 

That is because the Mozilla-signed extension can then be used without modifications/editing. If you want you can install and then edit these on hard disk.

This add-on was originally developed for easy download from xx Network Haven spaces (see https://armchairancap.github.io/blog/2024/10/29/xx-haven-with-tribler#do-we-actually-need-any-integration).

## Requirements

- Tribler 8
- Modern version of Firefox (up to 131, 64-bit)

## Known issues

Firefox Browser Developer 132.0b9 can't work with xx Network Haven (suspected WASM issues), but the extension should work fine with other sites.

Download location set in the API call should probably be OS-specific and require a few lines of JS to determine.

## Privacy

No adds, no tracking, no analytics, no telemetry.

## Source code

https://github.com/armchairancap/magnet-link-downloader-tribler-firefox

## License

Unknown (see Credits).

## Credits

Modified from https://github.com/simennj/selectedLinksDownloader.

