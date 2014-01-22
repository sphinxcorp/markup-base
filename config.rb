# Default to development if environment is not set.
saved = environment
if (environment.nil?)
  environment = :development
else
  environment = saved
end

source_dir = "src"
sass_dir = source_dir + "/sass"

output_dir = "dist"
css_dir = output_dir + "/css"
javascripts_dir = output_dir + "/js"
images_dir = output_dir + "/images"
generated_images_dir = images_dir + "/generated"

# Require any additional compass plugins installed on your system.
require 'compass-normalize'
require 'rgbapng'
require 'toolkit'
require 'breakpoint'
# require 'susy'
require 'singularitygs'
require 'sass-globbing'

##
## You probably don't need to edit anything below this.
##

# You can select your preferred output style here (:expanded, :nested, :compact
# or :compressed).
output_style = (environment == :production) ? :compressed : :nested

# To enable relative paths to assets via compass helper functions.
relative_assets = true

# Conditionally enable line comments when in development mode.
line_comments = (environment == :production) ? false : true

# Output debugging info in development mode.
sass_options = (environment == :production) ? {} : {:debug_info => true}