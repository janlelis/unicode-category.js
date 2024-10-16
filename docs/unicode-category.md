## Functions

<dl>
<dt><a href="#unicodeGeneralCategory">unicodeGeneralCategory(char)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Returns the Unicode General Category of a single character</p>
</dd>
<dt><a href="#unicodeGeneralCategoryLong">unicodeGeneralCategoryLong(char)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Returns the Unicode General Category of a single character (long name)</p>
</dd>
<dt><a href="#unicodeMajorCategory">unicodeMajorCategory(char)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Returns the Unicode Major Category of a single character</p>
</dd>
<dt><a href="#unicodeMajorCategoryLong">unicodeMajorCategoryLong(char)</a> ⇒ <code>string</code> | <code>undefined</code></dt>
<dd><p>Returns the Unicode Major Category of a single character (long name)</p>
</dd>
<dt><a href="#unicodeGeneralCategories">unicodeGeneralCategories(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all General Categories used in the string</p>
</dd>
<dt><a href="#unicodeGeneralCategoriesLong">unicodeGeneralCategoriesLong(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all General Categories (long names) used in the string</p>
</dd>
<dt><a href="#unicodeMajorCategories">unicodeMajorCategories(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all Major Categories used in the string</p>
</dd>
<dt><a href="#unicodeMajorCategoriesLong">unicodeMajorCategoriesLong(string)</a> ⇒ <code>Set</code></dt>
<dd><p>Returns a Set of all Major Categories (long names) used in the string</p>
</dd>
<dt><a href="#listUnicodeGeneralCategories">listUnicodeGeneralCategories()</a> ⇒ <code>Object</code></dt>
<dd><p>Lists all General Categories</p>
</dd>
<dt><a href="#listUnicodeMajorCategories">listUnicodeMajorCategories()</a> ⇒ <code>Object</code></dt>
<dd><p>Lists all Major Categories</p>
</dd>
</dl>

<a name="unicodeGeneralCategory"></a>

## unicodeGeneralCategory(char) ⇒ <code>string</code> \| <code>undefined</code>
Returns the Unicode General Category of a single character

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - General Category  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>string</code> \| <code>number</code> | Single character string or codepoint |

<a name="unicodeGeneralCategoryLong"></a>

## unicodeGeneralCategoryLong(char) ⇒ <code>string</code> \| <code>undefined</code>
Returns the Unicode General Category of a single character (long name)

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - General Category (long name)  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>string</code> \| <code>number</code> | Single character string or codepoint |

<a name="unicodeMajorCategory"></a>

## unicodeMajorCategory(char) ⇒ <code>string</code> \| <code>undefined</code>
Returns the Unicode Major Category of a single character

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - Major Category  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>string</code> \| <code>number</code> | Single character string or codepoint |

<a name="unicodeMajorCategoryLong"></a>

## unicodeMajorCategoryLong(char) ⇒ <code>string</code> \| <code>undefined</code>
Returns the Unicode Major Category of a single character (long name)

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - Major Category (long name)  

| Param | Type | Description |
| --- | --- | --- |
| char | <code>string</code> \| <code>number</code> | Single character string or codepoint |

<a name="unicodeGeneralCategories"></a>

## unicodeGeneralCategories(string) ⇒ <code>Set</code>
Returns a Set of all General Categories used in the string

**Kind**: global function  
**Returns**: <code>Set</code> - Set of categories  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="unicodeGeneralCategoriesLong"></a>

## unicodeGeneralCategoriesLong(string) ⇒ <code>Set</code>
Returns a Set of all General Categories (long names) used in the string

**Kind**: global function  
**Returns**: <code>Set</code> - Set of categories (long names)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="unicodeMajorCategories"></a>

## unicodeMajorCategories(string) ⇒ <code>Set</code>
Returns a Set of all Major Categories used in the string

**Kind**: global function  
**Returns**: <code>Set</code> - Set of categories  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="unicodeMajorCategoriesLong"></a>

## unicodeMajorCategoriesLong(string) ⇒ <code>Set</code>
Returns a Set of all Major Categories (long names) used in the string

**Kind**: global function  
**Returns**: <code>Set</code> - Set of categories (long names)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Input string |

<a name="listUnicodeGeneralCategories"></a>

## listUnicodeGeneralCategories() ⇒ <code>Object</code>
Lists all General Categories

**Kind**: global function  
**Returns**: <code>Object</code> - Object that maps short names to long names  
<a name="listUnicodeMajorCategories"></a>

## listUnicodeMajorCategories() ⇒ <code>Object</code>
Lists all Major Categories

**Kind**: global function  
**Returns**: <code>Object</code> - Object that maps short names to long names  
