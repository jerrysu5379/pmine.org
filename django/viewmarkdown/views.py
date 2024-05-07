from django.shortcuts import render 
from op import prop 
from django.conf import settings

# Create your views here.

trantext = {
    "en": {
        "title": "Markdown Viewer and Converter", 
        "description": "Write and Convert your markdown", 
        "upload": "Upload your markdown file", 
        "downloadMD": "Download Markdown", 
        "downloadHTML": "Download HTML", 
        "downloadPDF": "Download PDF", 
    }, 
    "zh-hans": {
        "title": "MD 文件预览转换器", 
        "description": "你可以在此处写入并且转换你的 Markdown 文件",
        "upload": "上传 Markdown 文件",  
        "downloadMD": "下载 Markdown 文件",  
        "downloadHTML": "下载 HTML 文件",  
        "downloadPDF": "下载 PDF 文件",  
    }, 
    "ja": { 
        "title": "Markdown Viewer and Converter", 
        "description": "Write and Convert your markdown",
        "upload": "Upload your markdown file", 
        "downloadMD": "Download Markdown", 
        "downloadHTML": "Download HTML", 
        "downloadPDF": "Download PDF", 
    }
} 

def index(request): 

    pageprop = prop.getprop(request) 

    return render(request, "viewmarkdown/index.html", {
        "pageprop": pageprop, 
        "trans": trantext[pageprop["lang"]], 
        'static_url': settings.ESSENTIALS 
    }) 
