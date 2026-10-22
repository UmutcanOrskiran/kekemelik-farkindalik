const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
const shareText = '22 Ekim Dünya Kekemelik Farkındalık Günü: Her ses değerlidir. Dinle, zaman tanı, anlayışla yaklaş. #KekemelikFarkındalığı #HerSesDeğerlidir';
const shareButton = document.getElementById('shareButton');
const feedback = document.getElementById('shareFeedback');
shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    try { await navigator.share({ title: 'Her Ses Değerlidir', text: shareText }); feedback.textContent = 'Paylaşım penceresi açıldı.'; }
    catch (error) { if (error.name !== 'AbortError') feedback.textContent = 'Paylaşım şu anda açılamadı.'; }
  } else if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(shareText); feedback.textContent = 'Farkındalık mesajı kopyalandı. İstediğin yerde paylaşabilirsin.'; }
    catch { feedback.textContent = shareText; }
  } else { feedback.textContent = shareText; }
});
