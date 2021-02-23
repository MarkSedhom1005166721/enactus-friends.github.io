from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):

  def do_GET(self, name):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    string = "Yoooo how's it going " + name + ". U suck!"
    self.wfile.write(string.encode())
    return