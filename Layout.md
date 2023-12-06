Layout

3 ways to build a website layouts

Here we // design

Float - not recommended for layout anymore
Float allows the element to be placed left or right within the container.

In a container eg div, children can use a CSS property float.
Float can be left or right amongst others values.

// Code

Here, inside the container 1st 2 children has float left property and the last child `sidebar` has float right.
After the last child, float needs to be cleared using `clear: both` CSS property, else other elements (inline especially) can appear left of the last `sidebar` if any.

For more cleaner approach to clear float is to apply clear both to the container after. ie

.conatiner:after {
    content: '';
    clear: both;
    diaplay: block;
}

for more information:
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats


Flexbox

Flexbox is a layout method to arange items (children) in rows or columns. 
All the element has display property, and one of the value is flex, so setting the display flex property of container will place all 3 children in a row, next to each other.

// code

Here, 1st and last children has `flex-grow: 1;` or in short `flex: 1;` property. By default, value of flex is `flex: 0 1 auto;` ie flex-grow as 0, flex-shrink as 1 and flex-basis as auto. However, second child has flex-grow of 3, ie 3 times the width of 1st or last child. And finally, adding gap for the space in the container.

Width can be used in the children but not recommended, however flex-grow is the a good practice.

For more information:
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox


Grid

Grid is also a layout method to arrange items in rows and columns for a complex layout. It is also two-dimensional layout system.

Building the same layout with grid couldn't be simpler. The style is required only in the container.

// code

Similar to flexbox, here the container is display as grid, then `grid-template-columns: 1fr 3fr 1fr;` is added. `fr` refers to fraction, `1fr` is one fraction of 5 (1+3+1). 1st and last item is 1/5 the size and 2nd item is 3/5 the size. And finally, using gap to add space.


Since grid can be used to build complex layout. lets build the layout below

// layout

Looking at the layout there are 4 columns and 2 rows. lets use grid area to build this layout.

// code

grid-template-areas defines the template by using a, b, c, d, e as areas; can be any string then each element is assigned to that area. 1 row has a, b and c with a occouping 2 columns and c occouping 2 rows.


For more information:
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids



