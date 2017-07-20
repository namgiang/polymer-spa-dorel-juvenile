import urllib

# Simple Python script to retrieve images from Quinny, for testing the 3D viewer component
for i in range(1, 24):
    output_filename = "viewer/{:02d}.jpg".format(i)
    url_filename = 'https://shop.quinny.nl/media/3dconfigurator/zapp-xpress/6bde553b/flexseat/{:04d}.jpeg'.format(i)
    f = open(output_filename,'wb')
    f.write(urllib.urlopen(url_filename).read())
    f.close()