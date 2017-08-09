# CrmeryDragAndDrop

A simple script to accept dropped files on a Crmery page and upload them.

[![Build Status](https://travis-ci.org/jameskraus/CrmeryDragAndDrop.svg?branch=master)](https://travis-ci.org/jameskraus/CrmeryDragAndDrop) [![Coverage Status](https://coveralls.io/repos/github/jameskraus/CrmeryDragAndDrop/badge.svg?branch=master)](https://coveralls.io/github/jameskraus/CrmeryDragAndDrop?branch=master)

## Preview

![Example of Dragging and Dropping](https://raw.githubusercontent.com/jameskraus/CrmeryDragAndDrop/example-gif/example.gif)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjameskraus%2FCrmeryDragAndDrop.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjameskraus%2FCrmeryDragAndDrop?ref=badge_shield)

## Installation

Run `yarn install`

## Building

Run `yarn run webpack`

## Usage

To use the generated bundle.js, you must include it at the bottom of the page.
If you want to include it at the top of the page, you'll have to customize it to
run after the document is loaded. Personally, I just added this script to the
bottom of `view/companies/tmpl/company.php` and `view/people/tmpl/person.php`:
```
<!-- Drag and Drop Script -->
<script src="/components/com_crmery/media/js/drag-and-drop.js" async defer type="text/javascript"></script>
```

## Testing

Run `yarn test`

## Linting, Typechecking, Formatting

Run `yarn check-commit` to run testing, linting, typechecking (by flow) and
prettier.

## License

MIT Licensed. Enjoy.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjameskraus%2FCrmeryDragAndDrop.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fjameskraus%2FCrmeryDragAndDrop?ref=badge_large)