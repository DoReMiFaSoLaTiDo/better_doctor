require 'httparty'

class UrlApi
  API_KEY = '92f244da2fff12abd0817cc4b1aa8e96'; // Get your API key at developer.betterdoctor.com
  RESOURCE_URL = 'https://api.betterdoctor.com/2015-09-22/doctors?name=' + 'nguyen' +'&user_key=' + api_key;

  API_URL = 'http://example.com/create'

  def unique_url
    response = HTTParty.get(RESOURCE_URL)
    json = JSON.parse(response.body)
    json['url']
  end
end
