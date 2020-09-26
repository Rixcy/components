import { Config } from 'bili'

const config: Config = {
    input: 'src/index.ts',
    output: {
        format: ['esm-min', 'cjs-min', 'iife-min'],
        moduleName: 'components',
    },
}

export default config
