from django.shortcuts import render

from op import language

# Create your views here.
trantext = {
    "en": {
        "description": "UUID Generator",
        "uuidgen": "UUID Generator",
        "generate": "Generate 1 UUID randomly",
        "generate4": "Generate 4 UUID randomly",
    }, 
    "zh-hans": {
        "description": "生成 UUID",
        "uuidgen": "生成 UUID",
        "generate": "随机生成1个UUID",
        "generate4": "随机生成4个UUID",
    },
    "ja": { 
        "description": "UUID ジェネレーター",
        "uuidgen": "UUID ジェネレーター",
        "generate": "ランダムに 1 つの UUID を生成",
        "generate4": "ランダムに 4 つの UUID を生成",
    }
} 

def index(request): 
    return render(request, "uuidgen/index.html", {
        'lang': language.get_language(request), 
        'trans': trantext[f"{language.get_language(request)}"], 
    }) 
