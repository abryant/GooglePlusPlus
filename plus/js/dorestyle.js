var eventComponent = document.createElement('input');
eventComponent.id = 'GooglePlusPlusUpdateButton';
eventComponent.type = 'submit';
eventComponent.value = 'Recreate Google++ Styles';
eventComponent.addEventListener('click', function()
{
  createNewStyles();
});
document.body.appendChild(eventComponent);

