import requests
from flask import Flask, jsonify, send_from_directory
import os
from flask_cors import CORS

static_path = os.getenv('STATIC_PATH','static')
template_path = os.getenv('TEMPLATE_PATH','templates')

app = Flask(__name__, static_folder=static_path, template_folder=template_path)
CORS(app)

@app.route('/api/key')
def get_key():
    return jsonify({'apiKey': os.getenv('NYT_API_KEY')})

@app.route('/api/stories')
def get_stories():
    key = os.getenv('NYT_API_KEY')
    fq = (
      'timesTag.organization:("University of California, Davis")' 
      ' OR timesTag.location:(Sacramento)'
    )
    
    params = {
        'api-key': key,
        'q': 'Davis OR Sacramento OR "UC Davis" OR UCD',
        'fq': fq,
        'sort': 'newest',
    }

    resp = requests.get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        params=params
    )
    return jsonify(resp.json())

@app.route('/')
@app.route('/<path:path>')
def serve_frontend(path=''):
    if path != '' and os.path.exists(os.path.join(static_path,path)):
        return send_from_directory(static_path, path)
    return send_from_directory(template_path, 'index.html')

if __name__ == '__main__':
    debug_mode = os.getenv('FLASK_ENV') != 'production'
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8000)),debug=debug_mode)