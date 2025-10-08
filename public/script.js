window.addEventListener('DOMContentLoaded', ()=>{
  const sendBtn = document.getElementById('send-btn')
  const status = document.getElementById('status')
  sendBtn.addEventListener('click', ()=>{
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    if(!name || !email || !message){ status.textContent = 'Por favor preencha todos os campos.'; return; }
    status.textContent = 'Enviando...'
    // EmailJS placeholders - set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in Vercel
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    if(serviceID.startsWith('YOUR')){
      status.textContent = 'Formulário pronto: adicione suas chaves EmailJS conforme instruções no README.'
      return;
    }
    // When configured, the front-end will call EmailJS. For now we short-circuit.
    status.textContent = 'Pronto — quando o EmailJS estiver configurado, as mensagens serão enviadas.'
  })
})
