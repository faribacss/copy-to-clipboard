const copyBtn = document.querySelector('button');
const textarea = document.querySelector("textarea");

copyBtn.addEventListener('click', ()=> {
    textarea.select();
    let textValue = textarea.value;
    if (!textValue) {
        return alert('ابتدا متنی  را وارد کنید');
    }

    navigator.clipboard.writeText(textValue);
    copyBtn.innerText = 'کپی شد!';
    copyBtn.style.background = "#03a9f4";

    setTimeout(() => {
        copyBtn.innerText = "کپی کن";
        copyBtn.style.background = "#b3e5fc";
    }, 1500);

})