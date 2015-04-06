import webapp2
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.out.write(template.render('html/index.html', None))

app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
