function toggle(btn)
{
    const btnElement = document.querySelector(btn);
    if (!btnElement.classList.contains('is-toggled'))
    {
        removePrevious();
        btnElement.classList.add('is-toggled');
    }
    else
    {
        btnElement.classList.remove('is-toggled');
    }
}

function removePrevious()
{
    const previouslyToggled = document.querySelector('.is-toggled');
    if (previouslyToggled)
    {
         previouslyToggled.classList.remove('is-toggled');
    }
}