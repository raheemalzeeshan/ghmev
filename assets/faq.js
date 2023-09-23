document.querySelectorAll(".faq-item-heading").forEach((ele) => {
    ele.addEventListener("click", (e) => {
        
        let faqContent = ele.nextElementSibling;
        let faqContent_checkingClass = faqContent.classList.contains("faq-item-content-open");

        let iconHide = ele.querySelector(".faq-item-icon-hide")
        let iconShow = ele.querySelector(".faq-item-icon-show")
        if (faqContent_checkingClass == true) {
            faqContent.classList.remove("faq-item-content-open");
            iconHide.style.display = "none";
            iconShow.style.display = "block";
        } else {
            faqContent.classList.add("faq-item-content-open");
            iconHide.style.display = "block";
            iconShow.style.display = "none";
        }

    })
})