import markdown

translation = []
f = open("b.mdx","r")
   for mdx_line in f:
      html = markdown.markdown(mdx_line)
      translation.append(html)