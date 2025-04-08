module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
      ],
    ],
    "subject-case": [
      2,
      "always",
      ["start-case"], // Title Case (e.g., Add Login Button)
    ],
    "subject-full-stop": [2, "never", "."], // No dot at the end of the subject
  },
};
