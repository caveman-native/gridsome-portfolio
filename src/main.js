// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/styles.css'

export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  // Add inline CSS
  /*
  head.style.push({
    type: 'text/css',
    cssText: '.some-custom-css {color: red}'
  })
  */

  // Add an external CSS file
  /*
  head.link.push({
    rel: 'stylesheet',
    href: 'https://some-server.com/external-styleheet.css'
  })
  */
 
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  })
 

  // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: 'https://www.google.com/recaptcha/api.js',
    body: true,
    async: true,
    defer: true
  })
  

  // Add a meta tag
  head.meta.push({
    name: 'description',
    content: 'This is a portfolio site for stephen obrien.'
  })
  head.meta.push({
    name: 'keywords',
    content: 'stephen obrien, front end web developer'
  }) 
  head.meta.push({
    name: 'author',
    content: 'Stephen OBrien'
  })
}