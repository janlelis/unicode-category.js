import { describe, it, expect } from "vitest";
import {
  unicodeGeneralCategory,
  unicodeGeneralCategoryLong,
  unicodeGeneralCategories,
  unicodeGeneralCategoriesLong,
  listUnicodeGeneralCategories,
  unicodeMajorCategory,
  unicodeMajorCategoryLong,
  unicodeMajorCategories,
  unicodeMajorCategoriesLong,
  listUnicodeMajorCategories,
} from "../src/index.js";

describe("unicodeGeneralCategory(char)", () => {
  it("will return general category for that character", () => {
    expect(unicodeGeneralCategory("�")).toEqual("So");
  });

  it("will return Cn for unassigned codepoints", () => {
    expect(unicodeGeneralCategory("𐱐")).toEqual("Cn");
  });

  it("will return undefined for strings that are not string length 1", () => {
    expect(unicodeGeneralCategory("")).toBe(undefined);
    expect(unicodeGeneralCategory("ab")).toBe(undefined);
  });
});

describe("unicodeGeneralCategoryLong(char)", () => {
  it("will return long general category name for that character", () => {
    expect(unicodeGeneralCategoryLong("�")).toEqual("Other_Symbol");
  });
});

describe("unicodeGeneralCategories(string)", () => {
  it("will always return a Set", () => {
    expect(unicodeGeneralCategories("")).toEqual(new Set());
    expect(unicodeGeneralCategories("A")).toContain("Lu");
  });

  it("will return all categories that characters in the string belong to", () => {
    expect(unicodeGeneralCategories("A 2")).toEqual(
      new Set(["Lu", "Nd", "Zs"])
    );
  });
});

describe("unicodeGeneralCategoriesLong(string)", () => {
  it("will return all long category names", () => {
    expect(unicodeGeneralCategoriesLong("A 2")).toEqual(
      new Set(["Decimal_Number", "Space_Separator", "Uppercase_Letter"])
    );
  });
});

describe("unicodeMajorCategory(char)", () => {
  it("will return major category for that character", () => {
    expect(unicodeMajorCategory("�")).toEqual("S");
    expect(unicodeMajorCategory("𐱐")).toEqual("C");
  });

  it("will return undefined for strings that are not string length 1", () => {
    expect(unicodeMajorCategory("")).toBe(undefined);
    expect(unicodeMajorCategory("ab")).toBe(undefined);
  });
});

describe("unicodeMajorCategoryLong(char)", () => {
  it("will return long major category name for that character", () => {
    expect(unicodeMajorCategoryLong("�")).toEqual("Symbol");
  });
});

describe("unicodeMajorCategories(string)", () => {
  it("will always return a Set", () => {
    expect(unicodeMajorCategories("")).toEqual(new Set());
    expect(unicodeMajorCategories("A")).toContain("L");
  });

  it("will return all categories that characters in the string belong to", () => {
    expect(unicodeMajorCategories("A 2")).toEqual(new Set(["L", "N", "Z"]));
  });
});

describe("unicodeMajorCategoriesLong(string)", () => {
  it("will return all long category names", () => {
    expect(unicodeMajorCategoriesLong("A 2")).toEqual(
      new Set(["Number", "Separator", "Letter"])
    );
  });
});

describe("listUnicodeGeneralCategories()", () => {
  it("will return a Object containing all general categories", () => {
    expect(listUnicodeGeneralCategories()).toEqual({
      Cc: "Control",
      Cf: "Format",
      Cn: "Unassigned",
      Co: "Private_Use",
      Cs: "Surrogate",
      LC: "Cased_Letter",
      Ll: "Lowercase_Letter",
      Lm: "Modifier_Letter",
      Lo: "Other_Letter",
      Lt: "Titlecase_Letter",
      Lu: "Uppercase_Letter",
      Mc: "Spacing_Mark",
      Me: "Enclosing_Mark",
      Mn: "Nonspacing_Mark",
      Nd: "Decimal_Number",
      Nl: "Letter_Number",
      No: "Other_Number",
      Pc: "Connector_Punctuation",
      Pd: "Dash_Punctuation",
      Pe: "Close_Punctuation",
      Pf: "Final_Punctuation",
      Pi: "Initial_Punctuation",
      Po: "Other_Punctuation",
      Ps: "Open_Punctuation",
      Sc: "Currency_Symbol",
      Sk: "Modifier_Symbol",
      Sm: "Math_Symbol",
      So: "Other_Symbol",
      Zl: "Line_Separator",
      Zp: "Paragraph_Separator",
      Zs: "Space_Separator",
    });
  });
});

describe("listUnicodeMajorCategories()", () => {
  it("will return a Object containing all major categories", () => {
    expect(listUnicodeMajorCategories()).toEqual({
      C: "Other",
      L: "Letter",
      M: "Mark",
      N: "Number",
      P: "Punctuation",
      S: "Symbol",
      Z: "Separator",
    });
  });
});
