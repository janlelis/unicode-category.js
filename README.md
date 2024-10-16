# unicode-category.js [![[ci]](https://github.com/janlelis/unicode-category.js/workflows/Test/badge.svg)](https://github.com/janlelis/unicode-category.js/actions?query=workflow%3ATest)

Returns the [Major or General Category](https://en.wikipedia.org/wiki/Unicode_character_property#General_Category) a Unicode character belongs to.

Unicode version: **16.0.0** (September 2024)

## Install

Use npm or your favorite package manager to install this module:

```sh
npm install unicode-category
```

Or use ESM module directly from the browser.

## Usage - General Category

### `unicodeGeneralCategory(char)` / `unicodeGeneralCategoryLong(char)`

```js
// Get General Category of a single character

import { unicodeGeneralCategory, unicodeGeneralCategoryLong } from "unicode-category";
unicodeGeneralCategory("ᴦ") // 'Ll'
unicodeGeneralCategoryLong("ᴦ") // 'Lowercase_Letter'
unicodeGeneralCategory("☼") // 'So'
unicodeGeneralCategoryLong("☼") // 'Other_Symbol'
unicodeGeneralCategory("𐱐") // 'Cn'
unicodeGeneralCategoryLong("𐱐") // 'Unassigned'
```

### `unicodeGeneralCategories(string)` / `unicodeGeneralCategoriesLong(string)` 

```js
// Get a Set of all General Categories used in a string

import { unicodeGeneralCategories, unicodeGeneralCategoriesLong } from "unicode-category";
unicodeGeneralCategories("A 2") // Set(3) { 'Lu', 'Nd', 'Zs' }
unicodeGeneralCategoriesLong("A 2") // Set(3) { "Decimal_Number", "Space_Separator", "Uppercase_Letter" }
```

## Usage - Major Category

### `unicodeMajorCategory(char)` / `unicodeMajorCategoryLong(char)`

```js
// Get Major Category of a single character

import { unicodeMajorCategory, unicodeMajorCategoryLong } from "unicode-category";
unicodeMajorCategory("ᴦ") // 'L'
unicodeMajorCategoryLong("ᴦ") // 'Letter'
unicodeMajorCategory("☼") // 'S'
unicodeMajorCategoryLong("☼") // 'Symbol'
unicodeMajorCategory("𐱐") // 'C'
unicodeMajorCategoryLong("𐱐") // 'Other'
```

### `unicodeMajorCategories(string)` / `unicodeMajorCategoriesLong(string)` 

```js
import { unicodeMajorCategories, unicodeMajorCategoriesLong } from "unicode-category";

// Set of all Major Categories of a string
unicodeMajorCategories("A 2") // Set(3) { 'L', 'N', 'Z' }
unicodeMajorCategoriesLong("A 2") // Set(3) { "Number", "Separator", "Letter" }
```

### List All Categories

```js
import { listUnicodeGeneralCategories } from "unicode-category"
listUnicodeGeneralCategories()
// {
//   Cc: 'Control',
//   Cf: 'Format',
//   Cn: 'Unassigned',
//   Co: 'Private_Use',
//   Cs: 'Surrogate',
//   LC: 'Cased_Letter',
//   Ll: 'Lowercase_Letter',
//   Lm: 'Modifier_Letter',
//   Lo: 'Other_Letter',
//   Lt: 'Titlecase_Letter',
//   Lu: 'Uppercase_Letter',
//   Mc: 'Spacing_Mark',
//   Me: 'Enclosing_Mark',
//   Mn: 'Nonspacing_Mark',
//   Nd: 'Decimal_Number',
//   Nl: 'Letter_Number',
//   No: 'Other_Number',
//   Pc: 'Connector_Punctuation',
//   Pd: 'Dash_Punctuation',
//   Pe: 'Close_Punctuation',
//   Pf: 'Final_Punctuation',
//   Pi: 'Initial_Punctuation',
//   Po: 'Other_Punctuation',
//   Ps: 'Open_Punctuation',
//   Sc: 'Currency_Symbol',
//   Sk: 'Modifier_Symbol',
//   Sm: 'Math_Symbol',
//   So: 'Other_Symbol',
//   Zl: 'Line_Separator',
//   Zp: 'Paragraph_Separator',
//   Zs: 'Space_Separator'
// }

import { listUnicodeMajorCategories } from "unicode-category"
listUnicodeMajorCategories()
// {
//   C: 'Other',
//   L: 'Letter',
//   M: 'Mark',
//   N: 'Number',
//   P: 'Punctuation',
//   S: 'Symbol',
//   Z: 'Separator'
// }

```

## Also See

- Get the script of a string: [unicode-script.js](https://github.com/janlelis/unicode-script.js)
- Get the block of a string: [unicode-block.js](https://github.com/janlelis/unicode-block.js)
- Get the name of a character: [unicode-name.js](https://github.com/janlelis/unicode-name.js)
- Index created with: [unicoder](https://github.com/janlelis/unicoder)

## MIT License

- Copyright (C) 2024 Jan Lelis <https://janlelis.com>. Released under the MIT license.
- Unicode data: https://www.unicode.org/copyright.html#Exhibit1
