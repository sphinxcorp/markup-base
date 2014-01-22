# Installation

* Install [Ruby](https://www.ruby-lang.org/en/downloads/) version 1.9 or higher 
* Install bundler gem using ```gem install bundler```
* Install [nodejs](http://nodejs.org/download/) version 0.8 or higher with npm support
* Install following node modules globally ```npm install -g grunt-cli bower```
* Open a console & navigate to markup project directory (this directory) and issue following commands:
	* ``` bundle install ```
	* ``` npm install ```
	* ``` bower install ```

# General guidelines

* All rules should be class based to ensure maximum reusability
* All images related to styling must be set with css background property. No image tag is allowed for deign purposes. Also use images only when it is mandatory, use CSS3 whenever possible to generate background effect. Also use [compass-rgbapng](https://github.com/aaronrussell/compass-rgbapng) plugin to enable cross browser support for rgba() if you are using.   
* Use of variables & mixins are highly recommended to keep code minimal & configurable.
* Every colors & font sizes & fonts must be defined as variables and used thoroughly whenever needed.
* Use mixins, helpers & utilities provided by [compass](http://compass-style.org/reference/compass/) library whenever possible. Write your own mixins only if there isn't one available in compass. For example, instead of adding browser prefixes manually, use compass CSS3 mixins like border-radius etc. that will take care of adding browser prefixes in generated css files. Also hacks like clearfix should also be used from compass definition.
* Use compass's [sprite helper](http://compass-style.org/reference/compass/helpers/sprites/) to generate css sprites for icons and use the sprites while writing rules.
* If needed, use a grid framework like [susy](http://susy.oddbird.net/) or [singularitygs](https://github.com/Team-Sass/Singularity) instead of using a css based grid framework to avoid use of extra non-semantic classes in markup. This two frameworks will be installed with the ```bundle install``` command and to use the chosen one, just uncomment the respective line in config.rb
* Use ```grunt``` during development & use ```grunt build``` before you commit. The default ```grunt``` task will generate the .min.js files (which are actually not minified, but beautified) so that you can link those (instead of the original .js files), in your markup html pages and can commit build independent versions of those markups, no matter whether the .min.js files are minified during production build (output from ```grunt build``` command) or not. So, to ensure this, you have to update all the markup pages, so that they link to .min.js files instead of the .js files.

# File structure

```
.
├── Gemfile                             // required ruby gems
├── Gruntfile.js                        // grunt configuration file
├── Guardfile                           // guard configuration file
├── README.md                           // README file in markdown format
├── README.html                         // README file in HTML format
├── bower.json                          // bower packages for js files
├── config.rb                           // compass project configuration
├── dist                                // output directory for all compiled files
├── html                                // developed markup files
├── images                              // image assets used in styling
│   └── sprite-icons                    // each set of icons will have its own folder to be combined into a sprite
├── js                                  // custom javascript files (if any)
├── package.json                        // node module dependencies for grunt
└── sass                                // scss files will go here
    ├── _base.scss                      // import all utility libraries here
    ├── _global.scss                    // import any output emitting library, components here
    ├── components                      // rules for common ui components will go here
    ├── functions                       // all sass functions will go here
    ├── ie.scss                         // IE specific hacks will go here
    ├── mixins                          // all mixins will go here
    ├── styles.scss                     // aggregation of base & global partials to create the final styles.css
    └── variables                       // all variable definitions will go here
        ├── _colors.scss
        ├── _config.scss
        ├── _forms.scss
        └── _typography.scss
```  