from django.http import HttpResponseRedirect
from django.utils.translation import get_language_from_request 

# List of languages
list_of_languages = ["en", "zh", "ja"]

# Set language
def set_language(request, lan):
    # Change the session for the user
    request.session['language'] = lan
    # Return to the previous page, or home if no referrer
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/')) 

# Get language
def get_language(request):
    # Get the language from the user, default to 'en' if not set 
    # print(f"New:{request.META.get('HTTP_ACCEPT_LANGUAGE')}, old: {request.session.get('language')}") 
    language = request.session.get('language', request.META.get('HTTP_ACCEPT_LANGUAGE')[:2]) 
    set_language(request, language) 
    # Check whether the set language is in the list of languages
    if language not in list_of_languages:
        # Set to default 
        set_language(request, "en") 
    return language 
