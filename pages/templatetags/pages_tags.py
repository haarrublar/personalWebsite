from django import template
from django.utils.html import mark_safe

register = template.Library()

@register.filter
def truncatewords_forward(value, arg):
    try:
        length = int(arg)
    except ValueError:
        return value
    if length <= 0:
        return ''
    words = value.split()
    if len(words) > length:
        words = words[:length]
        return mark_safe(' '.join(words))
    else:
        return value
    
@register.filter
def truncatewords_backward(value, arg):
    try:
        length = int(arg)
    except ValueError:
        return value
    if length <= 0:
        return ''
    words = value.split()
    if len(words) > length:
        words = words[length:]
        return mark_safe(' '.join(words))
    else:
        return value
    
@register.filter
def split(value):
    return value.split('\n')    