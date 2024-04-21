# gulp-esbuild-2024

To use this repository, install [bun.js](https://bun.sh/) on your computer. <br>
If you have Linux or macOS then run in your terminal: `curl -fsSL https://bun.sh/install | bash` <br>
If you have Windows, then use this command to install: `powershell -c "irm bun.sh/install.ps1 | iex"`

`Gulp` is used to create the `font-faces.scss` style file, transfer fonts, process image and svg files, and process `.pug` files.
`ESBuild` is used to quickly build and compile styles with the `sass` preprocessor and to quickly build and compile `typescript`.

## Development:
To run it, open 2 terminal windows in the first one and run the command: `bun run gulp:dev`, in the second window run the command: `bun run esbuild:dev`.

## Production:
Run the `bun run build` command.

---
I will connect `eslint` and `stylelint` in the near future
