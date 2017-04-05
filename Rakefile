require 'yaml'
require 'mini_magick'

desc 'Resize images in post'
task :resize, [:post, :width, :quality] do |_, args|
  config = YAML.load_file('_config.yml')
  args.with_defaults(width: config['image_width'] || 300, quality: config['image_quality'] || 80)
  image_width = args[:width].to_i
  image_quality = args[:quality].to_i
  folder = "assets/images/posts/#{args[:post]}"
  path = "#{folder}/*.{jpg,png,gif,jpeg,JPG,JPEG}"

  puts "Processing images with width: #{image_width}px and quality: #{image_quality}% \n\n"
  puts 'images:'
  
  Dir.glob(path) do |image_path|
    image_name = File.basename(image_path)
    next if image_name.include?('-small.')
    puts "  - #{image_name}"

    image = MiniMagick::Image.open(image_path)
    image.quality(image_quality)
    image.write(image_path)

    image = MiniMagick::Image.open(image_path)
    ratio = image.width / image.height.to_f
    if image.width > image.height
      height = (image_width / ratio).round
      width = image_width
    else
      height = (image_width * ratio).round
      width = (height * ratio).round
    end
    image.resize "#{width}x#{height}"
    small_image_name = image_name.gsub!('.', '-small.')
    image.write("#{folder}/#{small_image_name}")
  end

  puts "\nAll images in folder \"#{folder}\" were resized."
end
