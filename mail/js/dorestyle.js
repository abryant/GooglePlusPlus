var eventComponent = document.createElement('input');
eventComponent.id = 'GooglePlusPlusUpdateButton';
eventComponent.type = 'hidden';
eventComponent.value = 'Recreate Google++ Styles';
eventComponent.addEventListener('click', function()
{
  createNewStyles();
});
document.body.appendChild(eventComponent);

// to use this, type this into the console:
// document.getElementById('GooglePlusPlusUpdateButton').click()
