# CrmeryDragAndDrop

A simple script to accept dropped files on a Crmery page and upload them.

## Installation

Run `yarn install`

## Building

Run `yarn run webpack`

## Usage

To use the generated bundle.js, you must include it at the bottom of the page.
If you want to include it at the top of the page, you'll have to customize it to
run after the document is loaded. Personally, I just added the script to the
bottom of the `companies/tmpl/company.php` and `people/tmpl/person.html`.

## Testing

Run `yarn test`

## Linting, Typechecking, Formatting

Run `yarn check-commit` to run testing, linting, typechecking (by flow) and
prettier.

## License

MIT Licensed. Enjoy.
