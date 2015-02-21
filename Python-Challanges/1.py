# http://www.pythonchallenge.com/pc/def/map.html

from string import maketrans

def translate_text(text):
	"""Takes string and outputs 
	the string using the maketrans translation
	table"""

	old = 'abcdefghijklmnopqrstuvwxyz'
	new = 'cdefghijklmnopqrstuvwxyzab'

	return text.translate(maketrans(old,new))

text = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

new_text = translate_text(text)
print new_text