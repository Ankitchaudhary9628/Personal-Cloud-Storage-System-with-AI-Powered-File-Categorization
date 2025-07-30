import sys
filename = sys.argv[1]
if filename.endswith('.pdf'):
  print('document')
elif filename.endswith('.jpg') or filename.endswith('.png'):
  print('image')
elif filename.endswith('.mp4'):
  print('video')
else:
  print('other')