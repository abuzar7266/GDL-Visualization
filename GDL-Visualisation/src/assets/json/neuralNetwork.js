const network = {
    "nodes":[
        {"id":"1","color":0,"x":250,"y":50},
        {"id":"2","color":0,"x":250,"y":200},
        {"id":"3","color":0,"x":250,"y":350},
        {"id":"4","color":0,"x":500,"y":50},
        {"id":"5","color":0,"x":500,"y":200},
        {"id":"6","color":0,"x":500,"y":350},
        {"id":"7","color":0,"x":650,"y":125},
        {"id":"8","color":0,"x":650,"y":275},
        {"id":"9","color":0,"x":800,"y":200},
    ],
    "links":[
        {"source":"1","target":"4","color":0},
        {"source":"1","target":"5","color":0},
        {"source":"1","target":"6","color":0},
        {"source":"2","target":"4","color":0},
        {"source":"2","target":"5","color":0},
        {"source":"2","target":"6","color":0},
        {"source":"3","target":"4","color":0},
        {"source":"3","target":"5","color":0},
        {"source":"3","target":"6","color":0},
        {"source":"4","target":"7","color":0},
        {"source":"4","target":"8","color":0},
        {"source":"5","target":"7","color":0},
        {"source":"5","target":"8","color":0},
        {"source":"6","target":"7","color":0},
        {"source":"6","target":"8","color":0},
        {"source":"7","target":"9","color":0},
        {"source":"8","target":"9","color":0}
    ]
}
export default network;