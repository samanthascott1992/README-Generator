function generateMarkdown(data) {
  return `
# ${data.github}
# ${data.title}
# ${data.projectUrl}
# ${data.description}
# ${data.use}
# ${data.FIXME}
# ${data.command}

`;
}

module.exports = generateMarkdown;
