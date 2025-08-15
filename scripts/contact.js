// dynamic "required after First Name is filled" logic + soft checks
(function () {
  const form  = document.getElementById('prayerForm');
  const first = document.getElementById('firstName');
  const email = document.getElementById('email');
  const email2= document.getElementById('email2');
  const emailHint = document.getElementById('emailHint');

  // everything except firstName becomes toggled required
  const toggled = Array.from(form.querySelectorAll('input, textarea, select'))
    .filter(el => el !== first);

  function syncRequired(){
    const on = first.value.trim().length > 0;
    toggled.forEach(el => on ? el.setAttribute('required','') : el.removeAttribute('required'));
  }
  first.addEventListener('input', syncRequired);
  syncRequired(); // initial state

  // basic confirm-email check (only when user has typed something)
  function checkEmails(){
    if (!email.value || !email2.value){
      email2.setCustomValidity('');
      emailHint.textContent = '';
      return;
    }
    if (email.value.trim() !== email2.value.trim()){
      email2.setCustomValidity('Emails do not match');
      emailHint.textContent = 'Email addresses must match';
    }else{
      email2.setCustomValidity('');
      emailHint.textContent = '';
    }
  }
  email.addEventListener('input', checkEmails);
  email2.addEventListener('input', checkEmails);

  // optional: prevent default submit just to show browser validation
  form.addEventListener('submit', (e) => {
    // remove this block if you’re wiring it to a backend
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
  });
})();

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});

