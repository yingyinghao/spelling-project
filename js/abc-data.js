let abcs = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'z'],
        { word: "abacus", level: 3, keywords: ["Chinese", "calculator"], alive: false },
        { word: "actor", level: 1, keywords: ["person", "art"], alive: true },
        { word: "airplane", level: 2, keywords: ["transportation", "technology"], alive: false },
        { word: "alarm", level: 1, keywords: ["noise", "home"], alive: false },
        { word: "alley", level: 1, keywords: ["location", "street"], alive: false },
        { word: "alligator", level: 3, keywords: ["animal", "reptile", "green"], alive: true },
        { word: "almond", level: 3, keywords: ["food", "nut"], alive: true },
        { word: "anchor", level: 2, keywords: ["metal", "sea"], alive: false },
        { word: "angel", level: 2, keywords: ["person"], alive: true },
        { word: "ant", level: 1, keywords: ["insect"], alive: true },
        { word: "anvil", level: 3, keywords: ["metal", "tool", "black"], alive: false },
        { word: "apple", level: 1, keywords: ["fruit", "food"], alive: true },
        { word: "apricot", level: 2, keywords: ["fruit", "food"], alive: true },
        { word: "aquarium", level: 3, keywords: ["fish", "water", "container", "glass"], alive: false },
        { word: "arch", level: 2, keywords: ["shape"], alive: false },
        { word: "arm", level: 2, keywords: ["person", "body"], alive: true },
        { word: "armadillo", level: 3, keywords: ["animal", "mallal"], alive: true },
        { word: "armor", level: 2, keywords: ["metal", "suit", "old"], alive: false },
        { word: "artist", level: 2, keywords: ["person", "art"], alive: true },
        { word: "ash", level: 2, keywords: ["nature", "fire"], alive: false },
        { word: "astronaut", level: 3, keywords: ["technology", "space", "person"], alive: true },
        { word: "avenue", level: 2, keywords: ["location", "street"], alive: false },
        { word: "avocado", level: 2, keywords: ["fruit", "food", "green"], alive: true },
        { word: "award", level: 1, keywords: ["competition"], alive: false },
        { word: "bag", level: 1, keywords: ["container", "paper"], alive: false },
        { word: "ball", level: 1, keywords: ["sports", "shape", "round"], alive: false },
        { word: "banana", level: 1, keywords: ["food", "fruit", "yellow"], alive: true },
        { word: "baseball", level: 1, keywords: ["food", "fruit", "yellow"], alive: true },
        { word: "bed", level: 1, keywords: ["room", "furniture", "sleep", "home", "flat"], alive: false },
        { word: "bird", level: 1, keywords: ["animal", "bird", "fly"], alive: true },
        { word: "book", level: 1, keywords: ["room", "furniture", "study", "home", "school"], alive: false },
        { word: "bottle", level: 2, keywords: ["container", "glass"], alive: false },
        { word: "bowl", level: 1, keywords: ["utensil", "food", "container"], alive: false },
        { word: "box", level: 1, keywords: ["paper", "container"], alive: false },
        { word: "bread", level: 1, keywords: ["food"], alive: false },
        { word: "broccoli", level: 3, keywords: ["food", "vegetable", "green"], alive: true },
        { word: "candle", level: 2, keywords: ["fire", "light", "home"], alive: false },
        { word: "carpet", level: 2, keywords: ["sports", "shape", "home"], alive: false },
        { word: "carrot", level: 2, keywords: ["food", "vegetable", "orange"], alive: true },
        { word: "cat", level: 1, keywords: ["animal", "mammal", "pet"], alive: true },
        { word: "celery", level: 2, keywords: ["food", "vegetable"], alive: true },
        { word: "chair", level: 1, keywords: ["home", "furniture"], alive: false },
        { word: "cheese", level: 2, keywords: ["food"], alive: false },
        { word: "chicken", level: 2, keywords: ["animal", "food", "bird"], alive: true },
        { word: "chopsticks", level: 2, keywords: ["utensil", "home", "food"], alive: false },
        { word: "counter", level: 2, keywords: ["furniture", "home", "flat"], alive: false },
        { word: "cup", level: 1, keywords: ["container", "glass", "plastic", "ceramic", "home", "cupboard"], alive: false },
        { word: "cupboard", level: 2, keywords: ["furniture", "home", "cupboard"], alive: false },
        { word: "desk", level: 1, keywords: ["furniture", "container", "school", "study"], alive: false },
        { word: "dictionary", level: 2, keywords: ["paper", "book", "school", "study", "language"], alive: false },
        { word: "dog", level: 2, keywords: ["animal", "mammal", "pet"], alive: true },
        { word: "dresser", level: 2, keywords: ["furniture", "home", "bedroom"], alive: false },
        { word: "earth", level: 2, keywords: ["location", "ball", "nature"], alive: true },
        { word: "egg", level: 1, keywords: ["food", "animal", "nature", "egg", "shell"], alive: true },
        { word: "eggplant", level: 2, keywords: ["food", "vegetable", "plant", "nature", "seed", "garden"], alive: true },
        { word: "elephant", level: 2, keywords: ["mammal", "animal"], alive: true },
        { word: "family", level: 1, keywords: ["person", "home"], alive: true },
        { word: "fish", level: 1, keywords: ["fish", "animal", "water", "nature", "cook", "meal"], alive: true },
        { word: "flower", level: 1, keywords: ["plant", "nature", "seed", "garden"], alive: true },
        { word: "fork", level: 1, keywords: ["utensil", "home", "food", "meal", "metal"], alive: false },
        { word: "garlic", level: 2, keywords: ["plant", "food", "cook", "meal"], alive: true },
        { word: "glass", level: 2, keywords: ["glass", "food", "water", "home", "cook", "meal", "container", "kitchen", "cupboard"], alive: false },
        { word: "grapes", level: 1, keywords: ["fruit", "food", "seed", "meal"], alive: true },
        { word: "hat", level: 1, keywords: ["clothes", "cover", "cloth", "head"], alive: false },
        { word: "house", level: 1, keywords: ["home", "location"], alive: false },
        { word: "keys", level: 1, keywords: ["metal", "home"], alive: false },
        { word: "knife", level: 1, keywords: ["metal", "kitchen", "meal"], alive: false },
        { word: "lemon", level: 1, keywords: ["fruit", "food", "seed", "tree"], alive: true },
        { word: "lid", level: 1, keywords: ["metal", "cover"], alive: false },
        { word: "map", level: 1, keywords: ["paper", "travel", "location"], alive: false },
        { word: "microphone", level: 2, keywords: ["equipment"], alive: false },
        { word: "money", level: 1, keywords: ["paper"], alive: false },
        { word: "mouse", level: 1, keywords: ["animal", "mammal"], alive: true },
        { word: "mushroom", level: 2, keywords: ["food", "plant", "cook", "meal", "kitchen"], alive: true },
        { word: "newspaper", level: 2, keywords: ["paper", "news"], alive: false },
        { word: "noodles", level: 2, keywords: ["food", "meal", "cook", "kitchen"], alive: false },
        { word: "notebook", level: 2, keywords: ["paper", "school", "page"], alive: false },
        { word: "oil", level: 2, keywords: ["food", "liquid", "cook", "meal", "kitchen", "cupboard"], alive: false },
        { word: "onion", level: 2, keywords: ["food", "meal", "cook"], alive: true },
        { word: "orange", level: 2, keywords: ["food", "fruit", "seed", "tree", "meal"], alive: true },
        { word: "pan", level: 1, keywords: ["home", "metal", "kitchen", "cook"], alive: false },
        { word: "pants", level: 1, keywords: ["clothes", "cloth"], alive: false },
        { word: "paper", level: 1, keywords: ["paper", "surface"], alive: false },
        { word: "peach", level: 1, keywords: ["fruit", "food", "tree"], alive: true },        
        { word: "pear", level: 1, keywords: ["fruit", "food", "tree", "garden", "seed"], alive: true },
        { word: "pencil", level: 1, keywords: ["paper", "school"], alive: false },
        { word: "pepper", level: 1, keywords: ["home", "food", "spice", "cook", "meal"], alive: false },
        { word: "pillow", level: 1, keywords: ["home", "bedroom", "bed"], alive: false },
        { word: "plate", level: 1, keywords: ["home", "kitchen", "meal"], alive: false },
        { word: "pot", level: 1, keywords: ["kitchen","home", "metal", "cook"], alive: false },
        { word: "potato", level: 1, keywords: ["food", "plant", "meal", "cook"], alive: true },
        { word: "rice", level: 3, keywords: ["food", "seed", "meal", "cook"], alive: false },
        { word: "rabbit", level: 3, keywords: ["animal", "mammal", "pet"], alive: true },
        { word: "robot", level: 1, keywords: ["machine", "computer"], alive: false },
        { word: "rock", level: 3, keywords: ["nature"], alive: false },
        { word: "safe", level: 3, keywords: ["metal", "money"], alive: false },
        { word: "salt", level: 1, keywords: ["food", "spice"], alive: false },
        { word: "scissors", level: 2, keywords: ["tool", "metal"], alive: false },
        { word: "shelf", level: 2, keywords: ["home", "furniture"], alive: false },
        { word: "sink", level: 3, keywords: ["kitchen", "bathroom", "home"], alive: false },
        { word: "snake", level: 3, keywords: ["animal", "nature", "reptile", "egg"], alive: false },
        { word: "soap", level: 3, keywords: ["bathroom", "kitchen"], alive: false },
        { word: "socks", level: 3, keywords: ["clothes", "cloth", "feet"], alive: false },
        { word: "sofa", level: 3, keywords: ["furniture", "living room", "home"], alive: false },
        { word: "soup", level: 3, keywords: ["food", "liquid"], alive: false },
        { word: "spinach", level: 3, keywords: ["plant", "food", "garden", "seed"], alive: false },
        { word: "spoon", level: 3, keywords: ["kitchen", "metal", "meal"], alive: false },
        { word: "stove", level: 3, keywords: ["kitchen", "home", "cook", "meal"], alive: false },
        { word: "suitcase", level: 3, keywords: ["container", "travel"], alive: false },
        { word: "table", level: 3, keywords: ["home", "furniture", "surface", "meal"], alive: false },
        { word: "tomato", level: 3, keywords: ["vegetable", "food", "garden", "plant", "seed"], alive: false },
        { word: "toothbrush", level: 3, keywords: [ "bathroom", "teeth", "tooth"], alive: false },
        { word: "towel", level: 3, keywords: ["cloth", "bathroom"], alive: false },
        { word: "tree", level: 3, keywords: ["plant", "nature", "tree", "seed"], alive: false },
        { word: "turtle", level: 3, keywords: ["animal", "nature", "reptile", "shell", "egg"], alive: false },
        { word: "vegetables", level: 2, keywords: ["food", "vegetable", "plant", "garden", "seed", "meal"], alive: true },
        { word: "vinegar", level: 2, keywords: ["food", "liquid", "cupboard", "meal"], alive: false },
];