import React from "react"

const Array = [
    {
        title: 'GitHub',
        url: '',
        icon: 'fa fa-github'
    },
    {
        title: 'LinkedIn',
        url: '',
        icon: 'fa fa-linkedin'
    },
    {
        title: 'Instagram',
        url: '',
        icon: 'fa fa-instagram'
    },
    {
        title: 'WhatsApp',
        url: '',
        icon: 'fa fa-whatsapp'
    },
]

const Contacts = (props) => {
  return (
    <div className={props.class}>
        {Array.map((item, index) => {
            return (
                <a key={index} href={item.url} target="_blank" className="contact-link">
                    <i className={item.icon}></i>
                </a>
            )
        })}
    </div>
  )
}

export default Contacts
