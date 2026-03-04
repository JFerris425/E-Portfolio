function contact(event) {
    event.preventDefault()
    emailjs
        .sendForm(
            'service_i5f5sir',
            'template_3ktf1rw',
            event.target,
            'Ir5ArnzeYtZIcZewh'
        ).then(() => {
            console.log('this worked1')
        })
}