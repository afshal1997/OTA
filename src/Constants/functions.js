const whatsappWatiLogo = document.getElementsByClassName('wa-chat-box-brand')[0]
const branding = document.getElementsByClassName('wa-chat-box-poweredby')[0]
export const addAltAttribute = () => {
   if (whatsappWatiLogo) {
      branding.classList.add('d-none')
      whatsappWatiLogo.alt = 'whatapp-contact-image'
      return true
   }
   return ''
}
export function importAll(r) {
   let images = {};
   r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
   });
   return images;
}