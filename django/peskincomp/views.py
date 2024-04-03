from django.shortcuts import render 
from op import prop 
from django.conf import settings 

# Create your views here.

trantext ={
    "en": {
        "description": "Minecraft skin pack creator, automatically generate a skinpack after you uploaded your skins",
        "skin_converter": "Minecraft skin pack creator",
        "add": "Add a skin", 
        "processing": "Processing...", 
        "desc": "Please upload your skin file overthere to compress them into a .mcpack file. You can still upload it in the process",
        "upload": "Upload",
        "add_desc": "Add another skin into your skinpack",
        "enter_name": "Enter of the name of your skinpack here",
        "skin_name": "Skin name",
        "download": "Download",
        "apply": "Apply", 
        "model": "Model",
        "delete_this_file": "Delete this skin", 
    },
    "zh-hans": {
        "description": "Minecraft 基岩版皮肤自动皮肤包格式转换工具", 
        "skin_converter": "Minecraft 基岩版皮肤包自动生成器",
        "add": "添加皮肤", 
        "processing": "上传中...", 
        "desc": "请放入皮肤文件开始打包。在打包的过程中您可以添加更多的皮肤文件", 
        "upload": "上传",
        "add_desc": "在此处上传你想在皮肤保重添加的皮肤",
        "enter_name": "请输入皮肤包名称",
        "skin_name": "皮肤名称",
        "download": "下载",
        "model": "模型", 
        "apply": "应用更改", 
        "delete_this_file": "删除皮肤"
    },
    "ja": { 
        "description": "Minecraft skin pack creator, automatically generate a skinpack after you uploaded your skins", 
        "skin_converter": "Minecraft skin pack creator",
        "add": "Add skin",
        "processing": "Processing...", 
        "desc": "Please upload your skin file overthere to compress them into a .mcpack file. You can still upload it in the process",
        "upload": "Upload",
        "add_desc": "Add another skin into your skinpack",
        "enter_name": "Enter of the name of your skinpack here",
        "model": "Model",
        "skin_name": "Skin name",
        "download": "Download",
        "apply": "Apply", 
        "delete_this_file": "Delete this skin"
    } 
} 

BACK_URL = 'https://skin.pmine.org' 

def index(request): 
    pageprop = prop.getprop(request) 
    return render(request, "peskincomp/index.html", { 
        'pageprop': pageprop, 
        'trans': trantext[pageprop["lang"]], 
        'url': BACK_URL, 
        'static_url': settings.ESSENTIALS 
    }) 

def process(request, rid): 
    pageprop = prop.getprop(request) 
    return render(request, "peskincomp/process.html", { 
        'pageprop': pageprop, 
        'trans': trantext[pageprop["lang"]], 
        'url': BACK_URL, 
        'rid': rid, 
        'static_url': settings.ESSENTIALS 
    }) 

def add(request, rid): 
    pageprop = prop.getprop(request) 
    return render(request, "peskincomp/add.html", { 
        'pageprop': pageprop, 
        'trans': trantext[pageprop["lang"]], 
        'url': BACK_URL, 
        'rid': rid, 
        'static_url': settings.ESSENTIALS 
    }) 