#!/usr/bin/env python
import zipfile
import urllib
from StringIO import StringIO

zip_file = StringIO()
zip_file.write(urllib.urlopen("http://www.pythonchallenge.com/pc/def/channel.zip").read())
zip_archive = zipfile.ZipFile(zip_file)
zipdict = {}

for info in zip_archive.infolist():
    zipdict[info.filename] = info.comment

current_nothing = '90052'
while True:
    print zipdict[current_nothing + '.txt'],
    page = zip_archive.read(current_nothing + '.txt')
    try:
        current_nothing = page.split('Next nothing is ')[1]
    except IndexError:
        break