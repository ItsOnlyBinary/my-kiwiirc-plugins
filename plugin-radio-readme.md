#### Confguring plugin-radio

you will need to find your own stations for the stations.json file, there are many resources on the internet to help with this.

The stations.json file should be structured as follows:

```
[
    {
        "name": "Rock Radio",
        "image": "https://example.com/rock_radio.jpg",
        "source": "http://example.com/rock_stream_mp3",
        "description": "Many head banging tunes"
    },
    {
        "name": "Classic Radio",
        "image": "https://example.com/kiwi_classic_radio.jpg",
        "source": "http://example.com/kiwi_classic_stream.mp3",
        "description": "Relax to some classical music"
    }
]
```


The url to the stations list can be provided in kiwiirc's client.json/config.json

```
"plugin-radio": {
    "url": "//exmaple.com/stations.json"
}
```
