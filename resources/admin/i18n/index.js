import { createI18n } from 'vue-i18n'

const i18n = createI18n({

    // default locale
    locale: 'en',

    // translations
    messages: {

        en: {
            formErr: {
                required: 'This field is required.',
                min : 'This field is required at least {x} characters.'
            }
        },
    },
})



export default i18n