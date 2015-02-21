# http://www.pythonchallenge.com/pc/def/equality.html
import urllib2, re

def open_site_and_get_text(site):
	return urllib2.urlopen(site).read()

site = "http://www.pythonchallenge.com/pc/def/equality.html"
htmltext = open_site_and_get_text(site)

# find staring point for code aka anything after '<!--'
start_point = htmltext.find("<!--")

htmltext = re.findall(r'[^A-Z][A-Z]{3}([a-z])[A-Z]{3}[^A-Z]',htmltext[start_point:])

print ''.join(htmltext)