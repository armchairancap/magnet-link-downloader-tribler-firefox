# Magnet Link Downloader for Tribler

Simple "download selected" extension for downloading Magnet links using the Tribler API.

Select a valid Magnet link, right click, choose "Download Magnet link with Tribler" in the dropdown menu.

Configure it with:

- Tribler API endpoint access (http://127.0.0.1:3100 - change it to your Tribler API endpoint or modify Tribler API endpoint to that port)
- API key (set to Tribler default) 

Currently thse are hard-coded in background.js and settings modal is a TODO item.

Originally developed for easy download from xx Network Haven (see https://armchairancap.github.io/blog/2024/10/29/xx-haven-with-tribler#do-we-actually-need-any-integration).

## Requirements

- Tribler 8
- Modern (2024) version of Firefox

## Privacy

No adds, no tracking, no analytics, no telemetry.

## Source code

https://github.com/armchairancap/magnet-link-downloader-tribler-firefox

## Credit

Forked https://github.com/simennj/selectedLinksDownloader.
