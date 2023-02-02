# CSCI446 HTML & CSS Lab

1. Include your `styles.css` file in the HTML file

    Note, use relative paths instead of absolute paths. This allows for
    filesystem independence. So, materially do something like:
    `href=styles.css` instead of `href=C:\...\...\styles.css` (or similar)
    for your operating system of choice.

2. Apply a `sans-serif` font family to the entire page

    By default, most browsers use some sort of serif font. It looks _alright_
    but for our purposes, let's use a sans-serif font.

3. Add a table to the page with some dummy content, maybe a table containing
the programming languages you know and your familiary with them.

    Use the `th`, `tr`, and `td` tags for the header, rows, and data columns
    respectively. Then, target those elements and style them differently.
    Maybe:

    - Style `th` with a _bold_ font weight
    - Style `tr` with a light gray background to contrast the white page

    Just play around with styles here and see what you can do with the table
    HTML element

4. Make the image flow around the text using the `float` CSS rule

5. Make the `.resposition` element exit normal flow using the `position` CSS
rule.

6. Play around with any other CSS rules that suit your fancy.

## References
- [MDN Font Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [MDN Float Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [MDN Position Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
