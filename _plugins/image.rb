class Image < Liquid::Tag
  SYNTAX = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/
  attr_reader :src

  def initialize(tagName, markup, tokens)
    super

    if markup =~ SYNTAX
      @src = $1
    else
      raise "No Image provided in the \"image\" tag"
    end
  end

  def render(context)
    %{<a href="#{src}" class="fancybox" rel="gallery">
        <img src="#{src}" />
      </a>}
  end

  Liquid::Template.register_tag "image", self
end
