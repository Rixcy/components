import { Config } from 'bili'

const config: Config = {
    input: 'src/index.ts',
    externals: ['react'],
    output: {
        format: ['esm-min', 'cjs-min'],
        moduleName: 'components',
    },
}

export default config
