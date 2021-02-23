from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):
  def __init__(self):
    self.name = "kalb"
  

  def do_POST(self):
    content_len = int(self.headers.get('Content-Length'))
    self.name = self.rfile.read(content_len)


  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    string = "Yoooo how's it going " + self.name + ". U suck!"
    self.wfile.write(string.encode())
    return 