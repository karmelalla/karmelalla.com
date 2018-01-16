# coding: utf-8
module Jekyll
  module DateFilter
    MONTHS = %w[января февраля марта апреля мая июня июля
                августа сентября октября ноября декабря]

    def ru_date(date)
      d = date.strftime("%d")
      m = date.strftime("%-m").to_i
      m = MONTHS[m - 1]
      y = date.strftime("%Y")

      "#{d} #{m} #{y}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)
