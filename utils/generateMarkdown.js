function generateMarkdown(data) {
  return `
#Project Title
${data.title}



##Description
${data.description}


###GitHub Username:
${data.github}
# 
#Project Repo URL
 ${data.projectUrl}

#Intended Use for Product
````````
 ${data.use}
````````

# 
${data.FIXME}

#What command do you use to install?
 ${data.command}

`;
}

module.exports = generateMarkdown;
