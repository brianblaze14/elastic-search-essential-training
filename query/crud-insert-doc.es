
# And each value must be one of 6 types to be valid JSON (string, number, object, array, boolean, null)
# http://www.json.org/
# Let's index our first JSON document!
# When we say index, we mean store in Elasticsearch
# We'll use restaurant food safety violations from the City of San Francisco, let's index one


POST /inspections/_doc
{
  "business_address": "660 Sacramento St",
  "business_city": "San Francisco",
  "business_id": "2228",
  "business_latitude": "37.793698",
  "business_location": {
    "type": "Point",
    "coordinates": [
      -122.403984,
      37.793698
    ]
  },
  "business_longitude": "-122.403984",
  "business_name": "Tokyo Express",
  "business_postal_code": "94111",
  "business_state": "CA",
  "inspection_date": "2016-02-04T00:00:00.000",
  "inspection_id": "2228_20160204",
  "inspection_type": "Routine",
  "inspection_score":96,
  "risk_category": "Low Risk",
  "violation_description": "Unclean nonfood contact surfaces",
  "violation_id": "2228_20160204_103142"
}

# See the structure of the JSON document, there is a geopoint, dates, and numbers
# Let's search the index using a GET command
GET /inspections/_doc/_search

# POST creates the document's ID for us
POST /inspections/_doc
{
  "business_address": "660 Sacramento St",
  "business_city": "San Francisco",
  "business_id": "2228",
  "business_latitude": "37.793698",
  "business_location": {
    "type": "Point",
    "coordinates": [
      -122.403984,
      37.793698
    ]
  },
  "business_longitude": "-122.403984",
  "business_name": "Tokyo Express",
  "business_postal_code": "94111",
  "business_state": "CA",
  "inspection_date": "2016-02-04T00:00:00.000",
  "inspection_id": "2228_20160204",
  "inspection_type": "Routine",
  "inspection_score":96,
  "risk_category": "Low Risk",
  "violation_description": "Unclean nonfood contact surfaces",
  "violation_id": "2228_20160204_103142"
}


# We can also specify it with PUT
# 12345 is the id value given
PUT /inspections/_doc/12345
{
  "business_address": "660 Sacramento St",
  "business_city": "San Francisco",
  "business_id": "2228",
  "business_latitude": "37.793698",
  "business_location": {
    "type": "Point",
    "coordinates": [
      -122.403984,
      37.793698
    ]
  },
  "business_longitude": "-122.403984",
  "business_name": "Tokyo Express",
  "business_postal_code": "94111",
  "business_state": "CA",
  "inspection_date": "2016-02-04T00:00:00.000",
  "inspection_id": "2228_20160204",
  "inspection_type": "Routine",
  "inspection_score":96,
  "risk_category": "Low Risk",
  "violation_description": "Unclean nonfood contact surfaces",
  "violation_id": "2228_20160204_103142"
}

# Indexing the document automatically created the index for us, named "inspection"
# The document is of type "report" (POST /inspection/report)
# It is recommeneded to store only one type per index, as multiple types per index will not be supported in the future

# Instead of dynamically creating the index based on the first document we add, we can create the index beforehand, to set certain settings
DELETE /inspections

PUT /inspections
{
  "settings": {
    "index.number_of_shards": 1,
    "index.number_of_replicas": 0
  }
}
# We'll use 1 shard for this example, and no replicas, we probably wouldn't want to do this in production