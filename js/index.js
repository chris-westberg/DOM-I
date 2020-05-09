const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav1 = document.querySelectorAll('a')[0]
let nav1Text = document.createTextNode(siteContent['nav']['nav-item-1'])
nav1.appendChild(nav1Text);

let nav2 = document.querySelectorAll('a')[1]
let nav2Text = document.createTextNode(siteContent['nav']['nav-item-2'])
nav2.appendChild(nav2Text);

let nav3 = document.querySelectorAll('a')[2]
let nav3Text = document.createTextNode(siteContent['nav']['nav-item-3'])
nav3.appendChild(nav3Text);

let nav4 = document.querySelectorAll('a')[3]
let nav4Text = document.createTextNode(siteContent['nav']['nav-item-4'])
nav4.appendChild(nav4Text);

let nav5 = document.querySelectorAll('a')[4]
let nav5Text = document.createTextNode(siteContent['nav']['nav-item-5'])
nav5.appendChild(nav5Text);

let nav6 = document.querySelectorAll('a')[5]
let nav6Text = document.createTextNode(siteContent['nav']['nav-item-6'])
nav6.appendChild(nav6Text);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let ctah1 = document.querySelector('h1')
let ctah1Text = document.createTextNode(siteContent['cta']['h1'])
ctah1.appendChild(ctah1Text)

let ctaButton = document.querySelector('button')
let ctaButtonText = document.createTextNode(siteContent['cta']['button'])
ctaButton.appendChild(ctaButtonText)

let featuresH4 = document.querySelectorAll('h4')[0]
let featuresH4Text = document.createTextNode(siteContent['main-content']['features-h4'])
featuresH4.appendChild(featuresH4Text)

let featuresContent = document.querySelectorAll('p')[0]
let featuresContentText = document.createTextNode(siteContent['main-content']['features-content'])
featuresContent.appendChild(featuresContentText)

let aboutH4 = document.querySelectorAll('h4')[1]
let aboutH4Text = document.createTextNode(siteContent['main-content']['about-h4'])
aboutH4.appendChild(aboutH4Text)

let aboutContent = document.querySelectorAll('p')[1]
let aboutContentText = document.createTextNode(siteContent['main-content']['about-content'])
aboutContent.appendChild(aboutContentText)

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let servicesH4 = document.querySelectorAll('h4')[2]
let servicesH4Text = document.createTextNode(siteContent['main-content']['services-h4'])
servicesH4.appendChild(servicesH4Text)

let servicesContent = document.querySelectorAll('p')[2]
let servicesContentText = document.createTextNode(siteContent['main-content']['services-content'])
servicesContent.appendChild(servicesContentText)

let productH4 = document.querySelectorAll('h4')[3]
let productH4Text = document.createTextNode(siteContent['main-content']['product-h4'])
productH4.appendChild(productH4Text)

let productContent = document.querySelectorAll('p')[3]
let productContentText = document.createTextNode(siteContent['main-content']['product-content'])
productContent.appendChild(productContentText)

let visionH4 = document.querySelectorAll('h4')[4]
let visionH4Text = document.createTextNode(siteContent['main-content']['vision-h4'])
visionH4.appendChild(visionH4Text)

let visionContent = document.querySelectorAll('p')[4]
let visionContentText = document.createTextNode(siteContent['main-content']['vision-content'])
visionContent.appendChild(visionContentText)

let contactH4 = document.querySelectorAll('h4')[5]
let contactH4Text = document.createTextNode(siteContent['contact']['contact-h4'])
contactH4.appendChild(contactH4Text)

let address = document.querySelectorAll('p')[5]
let addressText = document.createTextNode(siteContent['contact']['address'])
address.appendChild(addressText)

let phone = document.querySelectorAll('p')[6]
let phoneText = document.createTextNode(siteContent['contact']['phone'])
phone.appendChild(phoneText)

let email = document.querySelectorAll('p')[7]
let emailText = document.createTextNode(siteContent['contact']['email'])
email.appendChild(emailText)

let copyright = document.querySelectorAll('p')[8]
let copyrightText = document.createTextNode(siteContent['footer']['copyright'])
copyright.appendChild(copyrightText)