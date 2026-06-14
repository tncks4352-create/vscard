document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const emailLink = document.querySelector('a[href^="mailto:"]');

    // 카드 hover 효과용 스타일 추가
    if (card) {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

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

    // 이메일 클릭 시 클립보드 복사
    if (emailLink) {
        emailLink.addEventListener("click", async (event) => {
            event.preventDefault();

            const email = emailLink.textContent.trim();

            try {
                await navigator.clipboard.writeText(email);

                const originalText = emailLink.textContent;
                emailLink.textContent = "이메일이 복사되었습니다";

                setTimeout(() => {
                    emailLink.textContent = originalText;
                }, 1500);
            } catch (error) {
                console.error("클립보드 복사 실패:", error);
                alert("이메일 복사에 실패했습니다.");
            }
        });
    }

    console.log("웹명함 카드가 정상적으로 로드되었습니다.");
});