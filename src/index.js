import UNICODE_DATA_CATEGORIES from "./categories.js";

const { CATEGORIES, CATEGORY_NAMES, OFFSETS } = UNICODE_DATA_CATEGORIES;

const MAJOR_NAMES = {
  C: "Other",
  L: "Letter",
  M: "Mark",
  N: "Number",
  P: "Punctuation",
  S: "Symbol",
  Z: "Separator",
};

/**
 * Use codepoints instead of characters if preferred
 * @private
 */
function codepointToChar(codepoinOrNot) {
  if (Number.isInteger(codepoinOrNot)) {
    return String.fromCodePoint(codepoinOrNot);
  } else {
    return codepoinOrNot;
  }
}

/**
 * Queries index
 * @private
 */
function query(index, char) {
  let codepoint_depth_offset = char.codePointAt(0);
  let index_or_value = index;
  for (const depth of OFFSETS) {
    index_or_value = index_or_value[Math.floor(codepoint_depth_offset / depth)];
    codepoint_depth_offset = codepoint_depth_offset % depth;
    if (!Array.isArray(index_or_value)) {
      return index_or_value;
    }
  }
  return index_or_value[codepoint_depth_offset];
}

/**
 * Iterates char in strings and return set of all found properties
 * @private
 */
function setFromEachChar(string, fn) {
  const res = new Set();

  [...string].forEach((char) => {
    const charResult = fn(char);
    res.add(charResult);
  });

  return new Set([...res].sort());
}

/**
 * Returns the Unicode General Category of a single character
 *
 * @param {string|number} char Single character string or codepoint
 * @returns {string|undefined} General Category
 */
export function unicodeGeneralCategory(char) {
  char = codepointToChar(char);

  if ((typeof char !== "string" && !(char instanceof String)) || char === "") {
    return undefined;
  } else if ([...char][1]) {
    return undefined;
  }

  return query(CATEGORIES, char) || "Cn";
}

/**
 * Returns the Unicode General Category of a single character (long name)
 *
 * @param {string|number} char Single character string or codepoint
 * @returns {string|undefined} General Category (long name)
 */
export function unicodeGeneralCategoryLong(char) {
  const res = unicodeGeneralCategory(char);
  return res ? CATEGORY_NAMES[res] : undefined;
}

/**
 * Returns the Unicode Major Category of a single character
 *
 * @param {string|number} char Single character string or codepoint
 * @returns {string|undefined} Major Category
 */
export function unicodeMajorCategory(char) {
  const res = unicodeGeneralCategory(char);
  return res ? res[0] : undefined;
}

/**
 * Returns the Unicode Major Category of a single character (long name)
 *
 * @param {string|number} char Single character string or codepoint
 * @returns {string|undefined} Major Category (long name)
 */
export function unicodeMajorCategoryLong(char) {
  const res = unicodeGeneralCategory(char);
  return res ? MAJOR_NAMES[res[0]] : undefined;
}

/**
 * Returns a Set of all General Categories used in the string
 *
 * @param {string} string Input string
 * @returns {Set} Set of categories
 */
export function unicodeGeneralCategories(string) {
  return setFromEachChar(string, unicodeGeneralCategory);
}

/**
 * Returns a Set of all General Categories (long names) used in the string
 *
 * @param {string} string Input string
 * @returns {Set} Set of categories (long names)
 */
export function unicodeGeneralCategoriesLong(string) {
  return setFromEachChar(string, unicodeGeneralCategoryLong);
}

/**
 * Returns a Set of all Major Categories used in the string
 *
 * @param {string} string Input string
 * @returns {Set} Set of categories
 */
export function unicodeMajorCategories(string) {
  return setFromEachChar(string, unicodeMajorCategory);
}

/**
 * Returns a Set of all Major Categories (long names) used in the string
 *
 * @param {string} string Input string
 * @returns {Set} Set of categories (long names)
 */
export function unicodeMajorCategoriesLong(string) {
  return setFromEachChar(string, unicodeMajorCategoryLong);
}

/**
 * Lists all General Categories
 *
 * @returns {Object} Object that maps short names to long names
 */
export function listUnicodeGeneralCategories() {
  return { ...CATEGORY_NAMES };
}

/**
 * Lists all Major Categories
 *
 * @returns {Object} Object that maps short names to long names
 */
export function listUnicodeMajorCategories() {
  return { ...MAJOR_NAMES };
}
