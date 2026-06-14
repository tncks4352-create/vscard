document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    const emailText = document.getElementById("emailText");
    const phoneText = document.getElementById("phoneText");

    const copyEmailBtn = document.getElementById("copyEmailBtn");
    const copyPhoneBtn = document.getElementById("copyPhoneBtn");
    const githubBtn = document.getElementById("githubBtn");

    const copyToClipboard = async (text, button, successText) => {
        try {
            await navigator.clipboard.writeText(text);

            const originalText = button.textContent;

            button.textContent = successText;
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        } catch (error) {
            console.error("클립보드 복사 실패:", error);
            alert("복사에 실패했습니다.");
        }
    };

    if (card) {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-12px)";
            card.style.boxShadow =
                "0 0 35px rgba(219,187,251,.25), 0 18px 45px rgba(0,0,0,.7)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow =
                "0 0 25px rgba(219,187,251,.15), 0 10px 30px rgba(0,0,0,.5)";
        });
    }

    if (emailText) {
        emailText.addEventListener("click", (event) => {
            event.preventDefault();
            copyToClipboard(emailText.textContent.trim(), emailText, "복사 완료!");
        });
    }

    if (phoneText) {
        phoneText.addEventListener("click", (event) => {
            event.preventDefault();
            copyToClipboard(phoneText.textContent.trim(), phoneText, "복사 완료!");
        });
    }

    if (copyEmailBtn && emailText) {
        copyEmailBtn.addEventListener("click", () => {
            copyToClipboard(
                emailText.textContent.trim(),
                copyEmailBtn,
                "✓ 이메일 복사 완료"
            );
        });
    }

    if (copyPhoneBtn && phoneText) {
        copyPhoneBtn.addEventListener("click", () => {
            copyToClipboard(
                phoneText.textContent.trim(),
                copyPhoneBtn,
                "✓ 전화번호 복사 완료"
            );
        });
    }

    if (githubBtn) {
        githubBtn.addEventListener("click", () => {
            window.open("https://tncks4352-create.github.io/vscard/", "_blank");
        });
    }
});