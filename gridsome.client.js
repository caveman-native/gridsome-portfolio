import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    config,
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faBars, faHome, faUserCircle, faBlog, faFile, faAt, faBriefcase)

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon)
}