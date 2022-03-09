const whatsappWatiLogo = document?.getElementsByClassName('wa-chat-box-brand')[0]
export const addAltAttribute = () => {
   if (whatsappWatiLogo) {
      whatsappWatiLogo.alt = 'whatapp-contact-image'
      return true
   }
   return ''
}
export function importAll(r) {
   let images = {};
   r.keys().map((item) => {
      return images[item.replace('./', '')] = r(item);
   });
   return images;
}