class IncludeImage < Liquid::Tag
  SYNTAX = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/
  attr_reader :markup

  def initialize(tagName, markup, tokens)
    super

    if markup =~ SYNTAX
      @markup = markup.strip
    else
      raise "No Image provided in the \"image\" tag"
    end
  end

  def render(context)
    context.registers[:page]["all_images"] ||= []
    context.registers[:page]["all_images"]&.push(context[markup])
    nil
  end

  Liquid::Template.register_tag("include_image", self)
end
