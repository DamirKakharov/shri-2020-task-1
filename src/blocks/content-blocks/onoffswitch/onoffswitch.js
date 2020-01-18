function toggleTheme(evt) {
  const onoffswitch = evt.target.closest('.onoffswitch');
  if (!onoffswitch) return;

  onoffswitch.classList.toggle('onoffswitch_checked');

  const defaultClassName = 'theme_color_project-default';
  const inverseClassName = 'theme_color_project-inverse';
  const themedElements = document.querySelectorAll(`.${defaultClassName}, .${inverseClassName}`);

  if (themedElements) {
    for (let i = 0; i < themedElements.length; i++) {
      themedElements[i].classList.toggle(defaultClassName);
      themedElements[i].classList.toggle(inverseClassName);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', toggleTheme);
});