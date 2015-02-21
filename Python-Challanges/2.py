# http://www.pythonchallenge.com/pc/def/ocr.html

import urllib2, re

def open_site_and_get_text(site):
	return urllib2.urlopen(site).read()

site = "http://www.pythonchallenge.com/pc/def/ocr.html"
htmltext = open_site_and_get_text(site)

# find staring point for code aka anything after '-->'
start_point = htmltext.find('-->')

#find the special characters within that
text = re.findall(r'[a-zA-Z]',htmltext[start_point:], re.DOTALL)
print ''.join(text)