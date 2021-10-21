echo "DB_HOST = localhost
DB_PORT = 3306
DB_NAME = solutionsTech
DB_USER = dev
DB_PASS = secret" > ./.env


echo "root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = false" > ./.editorconfig


echo "*node_modules
cmd.sh
.env
.dist" > ./.gitignore


echo "
# SolutionsTech

#### START DEVELOPING PACKAGE.JSON
"dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/Server.ts",
" >> ./README.md


echo "const path = require('path')

module.exports = {
    config: path.resolve(__dirname, 'src', 'config', 'database.js'),
    'migrations-path': path.resolve(__dirname, 'src', 'database', 'migrations')
}" >> .sequelizerc


echo '{
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    },
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base",
        "plugin:jest/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
        "no-console": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "treatUndefinedAsUnspecified": false
}' >> .eslintrc.json