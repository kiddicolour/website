import files from '../../../../assets/sounds'

export default Object.keys(files).map(name => [name, typeof window !== 'undefined' ? new Audio(files[name]) : false])
