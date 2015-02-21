# http://www.pythonchallenge.com/pc/def/linkedlist.php

import urllib2, re

def open_site_and_get_text(site):
	return urllib2.urlopen(site).read()

site = "http://www.pythonchallenge.com/pc/def/linkedlist.php"
htmltext = open_site_and_get_text(site)

#find first link
link = re.findall(r'[=]["]([l][i][n].*)["][>]',htmltext)[0]
htmltext = open_site_and_get_text('http://www.pythonchallenge.com/pc/def/' + link)

#find the next links
for i in range (400):
	htmltext = re.findall(r'[g][\s][i][s][\s](\d{1,6})',htmltext)[0]
	
	if htmltext == '16044':
		htmltext = str(16044 / 2)
	else:
		pass

	htmltext = open_site_and_get_text('http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=' + htmltext)
	print htmltext