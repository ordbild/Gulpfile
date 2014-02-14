#Ord&Bild Gulpfile
This is the default Gulpfile that we always use at [Ord&Bild](http://ordbild.se "Ord&Bild").
It allows you to compile your SCSS-files, concat and minify your CSS and scripts and also optimize images.
It assumes that your stylesheets, scripts and images are organized in the following way:

assets/
	img/
	js/
	css/
	scss/

##Requirements
You need to have [Node](http://nodejs.org) and [Gulp](http://gulpjs.com) installed on your machine.
To install all the required Gulp modules, simply run 
npm install
from the command line in your projects directory. 

##Usage
**Compile SCSS:**  
gulp watch

**Optimize images:**  
gulp images

**Concat and minify the stylesheets**  
gulp styles

**Concat and minify the scripts**  
gulp scripts
