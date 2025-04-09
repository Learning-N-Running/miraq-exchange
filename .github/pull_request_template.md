## 📌 Summary

<!-- PR의 목적과 간단한 요약을 적어주세요 -->

Add JWT-based user authentication and update session handling logic.

---

## 🔧 Changes

<!-- 주요 변경 사항을 bullet point로 요약 -->

- Implement JWT generation and validation middleware
- Add `/api/auth/login` and `/api/auth/me` endpoints
- Refactor user session logic to use JWT instead of cookies

---

## ✅ Checklist

<!-- PR을 리뷰하거나 머지하기 전에 확인해야 할 항목들 -->

- [ ] Does this PR adhere to the commit message convention?
- [ ] Have you tested this feature manually?
- [ ] Are there any breaking changes?
- [ ] Has relevant documentation been updated?

---

## 🔍 Test Instructions (Optional)

<!-- PR 변경사항을 확인하기 위한 테스트 방법이 있다면 -->

1. Run `pnpm dev`
2. Send POST request to `/api/auth/login`
3. Check if the JWT is set and persists across requests

---

## 🚨 Breaking Changes (Optional)

<!-- 기존 기능과 충돌하거나 호환되지 않는 사항이 있다면 명시 -->

This PR changes the session strategy. Old cookie-based sessions will no longer work.

---

## 🤝 Related Issues / PRs

<!-- 연결된 이슈나 PR이 있다면 링크 -->

Closes #42  
Depends on #39
