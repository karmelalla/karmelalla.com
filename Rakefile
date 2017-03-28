require 'yaml'
require 'mini_magick'

desc 'Resize images in post'
task :resize, [:post, :width] do |_, args|
  config_with = YAML.load_file('_config.yml')['image_width']
  args.with_defaults(width: config_with || 300)

  user_width = args[:width].to_i
  folder = "assets/images/posts/#{args[:post]}"
  path = "#{folder}/*.{jpg,png,gif,jpeg,JPG,JPEG}"
  Dir.glob(path) do |image_path|
    image_name = File.basename(image_path)
    next if image_name.include?('-small.')
    puts "Processing #{image_name}..."

    image = MiniMagick::Image.open(image_path)
    image.quality(88)
    image.write(image_path)

    image = MiniMagick::Image.open(image_path)
    ratio = image.width / image.height.to_f
    if image.width > image.height
      height = (user_width / ratio).round
      width = user_width
    else
      height = (user_width * ratio).round
      width = (height * ratio).round
    end
    image.resize "#{width}x#{height}"
    small_image_name = image_name.gsub!('.', '-small.')
    image.write("#{folder}/#{small_image_name}")
  end

  puts "All images in #{folder} were resized."
end
