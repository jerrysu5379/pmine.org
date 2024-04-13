from django.http import HttpResponseRedirect

# List of colors 
list_of_colors = ["orange", "green", "cyan", "red", "lavender", "blue", "pink"]
default_color = list_of_colors[6] 

# Set color
def set_color(request, col): 

    # Change the session for the user 
    request.session['color'] = col if col in list_of_colors else default_color 

    # Return to the origin 
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/')) 

# Get color
def get_color(request): 
    
    # Get the color from the user, default to 'en' if not set 
    col = request.session.get('color', list_of_colors[6]) 
    
    return col if col in list_of_colors else default_color 
