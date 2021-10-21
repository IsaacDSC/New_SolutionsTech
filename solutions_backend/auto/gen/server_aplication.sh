#----------------------------------APP--------------------------
echo "import express from 'express'
import bodyParser from 'body-parser'
import router from '../routes/Routes'
import hbs from 'express-handlebars'
import path from 'path'
import session from'express-session'
import flash from'express-flash'
import cors from 'cors'
import { Request, Response, NextFunction } from 'express'

import passport from 'passport'
//import '../middlewares/checkCredencials';(passport)

class App {
    public express: express.Application
    constructor() {
        this.express = express()
        this.middlewares()
        this.session()
        this.flash()
        this.passport()
        this.routes()
        this.engine()
    }
    private middlewares(): void {
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(express.static(path.join(__dirname, '../', 'public')))
    }
    private session(): void {
        this.express.use(session({
            secret: process.env.SECRETKEY_SESSION || 'somesecrettoken',
            resave: true,
            saveUninitialized: true
        }))
    }
    private flash(): void {
        this.express.use(flash())
        this.express.use((req:Request, res:Response, next: NextFunction) => {
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.message = req.flash('message')
            res.locals.error = req.flash('error')
            next()
        })
    }
    private passport(): void {
        this.express.use(passport.initialize())
        this.express.use(passport.session())
    }
    private routes(): void {
        this.express.use(router)
    }
    private engine(): void {
        this.express.engine('hbs', hbs({
            defaultLayout: 'main.hbs',
            extname: 'hbs',
        }));
        this.express.set('view engine', 'hbs');
        this.express.set('views', path.join(__dirname, '../', '/views/'))
    }
}
export default new App().express
" >> ./src/app/App.ts

# ------------------------- SERVER---------------------------

echo "import app from './app/App'

const port = 3000

app.listen(process.env.PORT || port, () => {
    console.log('starter server in port: http://127.0.0.1:' + port)
});" >> ./src/Server.ts


# ---------------------- PROCEDULES ----------------------------
echo "

class AdminProcedules{
    public async CreateAdmin(){
        try {

        } catch (error) {

        }
    }
    public async EditAdmin(){
        try {

        } catch (error) {

        }
    }
    public async DeleteAdmin(){
        try {

        } catch (error) {

        }
    }
}

export default new AdminProcedules" >> ./src/database/procedules/ExemplaProcedules.ts

# ------------------------------ SETTINGS DATABASE ----------------------------
echo "
require('dotenv').config()
import mysql from 'mysql2'

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
})

const db = conn.connect()

export default db" >> ./src/database/settings/Sql.ts

echo "require('dotenv').config()
import {Sequelize} from 'sequelize'


export const database = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: '3306' || process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  define:{
    timestamps: true
  }
})" >> ./src/database/settings/ConnSequelize.ts


# -----------------------------------TABLES--------------------------

echo "const { Model, DataTypes, Op } = require('sequelize');
import bcrypt from 'bcrypt'
import { Sequelize } from 'sequelize/types';


class ClientsTable extends Model {
    static init(sequelize: Sequelize) {
        super.init({
            name: DataTypes.STRING,
            profile: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            telephone: DataTypes.STRING,
            password: DataTypes.STRING,
            superuser: DataTypes.BOOLEAN,
            dealers: DataTypes.BOOLEAN,
            marketing: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'solutionsAccount',

        })
    }


    static hashPassword(models: void) {
        this.beforeSave(async(client:any, options: any) => {
            const hash = await bcrypt.hash(client.password, 10)
            return client.password = hash
        })
    }

}


export default ClientsTable" >> ./src/database/tables/ClientsTable.ts


# --------------------------------ROUTER ----------------------------
echo "import {Router} from 'express'
const router = Router()

//middlewares

//IMPORT CONTROLLERS
import homeController from '../controllers/homeController'

//NAVIGATIONS ROUTES
router.get('/', homeController.index)

export default router
" >> ./src/routes/Routes.ts



# -------------------------------CONTROLLERS ----------------------------

echo "import {Request, Response} from 'express'

class HomeController {
    async index(req: Request, res: Response){
        res.render('home/index')
    }
}

export default new HomeController" >> ./src/controllers/homeController.ts

# ------------------------------VIEWS-----------------------------------
echo "
    {{>_nav}}
    {{{body}}}
    {{>_footer}}
" >> ./src/views/layouts/main.hbs
echo "
<h1> Hello Word </h1>" >> ./src/views/home/index.hbs
echo "<nav>NAVIGATE</nav>" >> ./src/views/partials/_nav.hbs
echo "<footer>FOOTER</footer>" >> ./src/views/partials/_footer.hbs


#--------------------------------TESTES---------------------------
echo "" >> ./tests/First.spec.ts

echo '
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2017",                                     /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": ["es6"],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow import x from y when a module doesnt have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": false,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as unknown instead of any. */
    // "alwaysStrict": true,                             /* Ensure use strict is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when a local variables arent read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isnt read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding undefined. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include undefined in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
 ' >> ./tsconfig