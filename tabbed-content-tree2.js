document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const articles = document.querySelectorAll('.binary-tree.ext');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');

      // 1. Reset: Remove 'active' class from all buttons and articles
      buttons.forEach(btn => btn.classList.remove('active'));
      articles.forEach(art => art.classList.remove('active'));

      // 2. Activate: Add 'active' class to the clicked button 
      // and the specific article it points to
      this.classList.add('active');
      const targetArticle = document.getElementById(targetId);
      
      if (targetArticle) {
        targetArticle.classList.add('active');
      } else {
        console.error(`No article found with ID: ${targetId}`);
      }
    });
  });
});
