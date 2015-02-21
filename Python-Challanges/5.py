# http://www.pythonchallenge.com/pc/def/peak.html

import urllib2, pickle

site = 'http://www.pythonchallenge.com/pc/def/banner.p'
htmltext = urllib2.urlopen(site)
#use pickle libray to open/read .p file 
unpickled =  pickle.load(htmltext)

#compile all the text outputs for the list 
total_unpickled =[]

for i in unpickled:
	# loop for the list inside the list 
	for a in i:
		total_unpickled.append(a[0] * a[1])
	# add new line for every new list
	total_unpickled.append('\n')

print "".join(total_unpickled)