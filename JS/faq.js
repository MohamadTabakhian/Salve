document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const isActive = answer.classList.contains('active');

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('active');
      });
      document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
      });

      // Toggle current answer
      if (!isActive) {
        answer.classList.add('active');
        item.classList.add('active');
      }
    });
  });