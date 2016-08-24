from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

class EbikeHandler(webapp.RequestHandler):
    def get(self):
        self.redirect("http://ebikeindia.net", True)

application = webapp.WSGIApplication([('/ebikeindia', EbikeHandler)])

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()