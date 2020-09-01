module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/JCFlores93/react-app-github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
