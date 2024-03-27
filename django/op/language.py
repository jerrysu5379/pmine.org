from django.http import HttpResponseRedirect

# List of languages
list_of_languages = ["en", "zh-hans", "ja"]

# Set language
def set_language(request, lan):
    # Ensure the language code is in the list of languages
    if lan not in list_of_languages:
        lan = 'en'  # Default to English if the language code is not recognized

    # Change the session for the user
    request.session['language'] = lan

    # Get the previous URL
    url = request.META.get('HTTP_REFERER', '/')

    # If there is no referrer, redirect to home
    if url == '/':
        return HttpResponseRedirect('/')

    # Get the first folder
    fullurl = url.split('//', 1)
    routes = fullurl[-1].split('/', 2)

    # Change the URL of language if the user is using URL specification
    if routes[1] in list_of_languages:
        routes[1] = lan 
        new_url = '//' + '/'.join(routes)
        return HttpResponseRedirect(new_url) 

    # Return to the previous page, or home if no referrer
    return HttpResponseRedirect(url)

# Get language
def get_language(request): 
    # Get the language from the user, default to 'en' if not set 

    # If the language is in the path 
    language = request.session.get('language', request.path.split('/')[1]) 
    print(language, '\t', request.path) 
    if language in list_of_languages:
        return language 
    
    # If the language is in cookie or use the default language 
    else:
        language = request.session.get('language', request.META.get('HTTP_ACCEPT_LANGUAGE', 'en')[:2])  # Default to 'en' if not set

        # Check whether the set language is in the list of languages
        for lang in list_of_languages: 
            if language == lang[:2] or language == lang: 
                set_language(request, lang) 
                print(lang) 
                return lang 
    
    language = 'en'  # Default to English if the language code is not recognized

    return language
