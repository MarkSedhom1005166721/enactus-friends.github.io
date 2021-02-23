from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    content_len = int(self.headers.get('Content-Length'))
    name = self.rfile.read(content_len)
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    string = "Yoooo how's it going " + name + ". U suck!"
    self.wfile.write(string.encode())
    return