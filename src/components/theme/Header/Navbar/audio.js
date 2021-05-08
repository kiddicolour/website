import files from '../../../../assets/sounds'

export default Object.keys(files).map(name => [name, new Audio(files[name])])
