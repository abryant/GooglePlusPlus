GooglePlusPlus - Chrome Extension for Styling Google Products
=============================================================

# License

This work is licensed under the Creative Commons 
Attribution-NonCommercial-ShareAlike 3.0 Unported License. 

To view a copy of this license, visit 
	http://creativecommons.org/licenses/by-nc-sa/3.0/
or send a letter to
	Creative Commons, 
	444 Castro Street, 
	Suite 900, 
	Mountain View, 
	California, 
	94041, USA.

# Features

 - New default fonts, smaller font size
 - Using a lot less padding
 - +1s and shares limited to one line
 - +1s and shares shown inline with +1 / share button where possible
 - Top bar doesn't scroll off screen
 - More accesible sign out button on the top bar

# Code Layout

The idea is that the Google styles are augmented by the ones that are defined
in this project, which are autoloaded by Chrome.
The stylesheets that we write should be placed in the css/ directory.
Each declaration should be commented with what objects it will affect (ie you
should work out the purpose(s) of the classes or ids that you are redeclaring).

Each logic change to the styles (eg 'Make top bar float', 'Remove space between
posts') should be in its own file, and each file should only the CSS it needs.

# Future Versions / Overarching TODOs

 - Add some actual styles
 - Options page so users can select which style they want
 - Folders for styles not shared between Google products

