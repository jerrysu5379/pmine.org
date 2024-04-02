from django.http import HttpResponseRedirect

# List of colors 
list_of_colors = ["orange", "green", "cyan", "red", "lavender", "blue", "pink"]
default_color = list_of_colors[6] 

# Set color
def set_color(request, col):
    # Ensure the color code is in the list of colors 
    if col not in list_of_colors:
        col = 'pink'  # Default to pink if the color code is not recognized

    # Change the session for the user
    request.session['color'] = default_color  

    # Return to the origin 
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/')) 

# Get color
def get_color(request): 
    # Get the color from the user, default to 'en' if not set 
    col = request.session.get('color', 'pink') 
    
    if col in list_of_colors: 
        return col 
    
    return default_color 
