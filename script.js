const executiveSummary = `Venkatesan Vetrimurasu is an enterprise cloud, platform, and AI engineering leader with 20+ years in technology, including 15 years across DevOps and infrastructure, 5+ years with AWS, and 6 years of people leadership. He specializes in secure AWS platforms, Kubernetes/EKS, Terraform, resilience, observability, and practical enterprise AI. Based in Dallas and authorized to work permanently in the United States, he is exploring VP and Senior Director opportunities in cloud, platform, and AI engineering.`;

const header = document.querySelector('.site-header');
const toast = document.querySelector('.toast');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(element);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('[data-copy-summary]').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(executiveSummary);
      showToast('Executive summary copied');
    } catch {
      showToast('Select and copy from the printed profile');
    }
  });
});

document.querySelectorAll('[data-print]').forEach((button) => {
  button.addEventListener('click', () => window.print());
});
