require('colors')
const replace = require('replace-in-file');

const files = process.argv[2]

const options = {
  files,
  from: /"@0local/g,
  to: '"./packages',
}

try {
  console.log(`Replacing "@local" references in ${files}`.grey)
  const results = replace.sync(options)
  if (results && results.some(r => r.hasChanged)) {
    console.log('Changed the following files:'.green, results.filter(r => r.hasChanged).map(r => r.file))
  } else {
    console.log('No files changed'.yellow);
  }
}
catch (error) {
  console.log('Error occurred:'.red, error);
}
